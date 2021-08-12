import { ObjectTypeComposerFieldConfigMapDefinition } from "graphql-compose";
import { File, Project, User } from '@hexhive/types'
import sql from 'mssql'
import moment from "moment";
import { Connector } from "../../connector";
import { nanoid } from "nanoid";

 /*Returns all jobs from vw_Sched_Jobs*/
 /*getJobs(cb){
    new sql.Request().query("'").then((result) => {
      cb(null, result.recordsets[0]);
    });
  }

  getJobByID(id, cb){
    var request = new sql.Request();
    request.input('jobID', sql.Int, id);
 

  }

  /* Requests all jobs between a calculated endpoint, endpoint is calculated from checking the DurationType
   * and adding the Duration to it from the start date*
  getJobsByDate(date, cb){
    var request = new sql.Request();
    request.input('startTime', sql.VarChar, date.start);
    /* The following conversion for months assumes a 30 day month *
    request.input('endTime', sql.VarChar, date.end);

  }*/

const Queries = (connector: Connector) => {
    let query :  ObjectTypeComposerFieldConfigMapDefinition<any, any> = {
    ProjectById: {
        type: 'Project',
        args: {
            id: 'ID'
        },
        resolve: async (root, args) => {
            let query = `SELECT JobID as id, JobName as name, status FROM dbo.vw_Sched_Jobs WHERE JobID=@jobID`;
            let request = new sql.Request(connector.pool)
            request.input('jobID', sql.Int, parseInt(args.id))

            const result = await request.query(query)
            console.log(result)
            return result.recordset[0];
        }
    },
    ProjectMany: {
        type: '[Project]',
        args: {
            status: "String",
            statusList: "[String]",
            startDate: "Date",
            endDate: "Date"
        },
        resolve: async (root, args, context) => {
            console.log(context.user)
            //TODO add OR operator to status search
            let request = new sql.Request(connector.pool)

            let sqlQuery = "select JobID as id, JobName as name, status from dbo.vw_Sched_Jobs";

            let whereClauses = [];

            if(args.status || args.statusList || args.startDate || args.endDate) sqlQuery += " WHERE ";

            if(args.status && !args.statusList){
                whereClauses.push(`status=@status`)
                request.input('status', sql.VarChar, args.status)
            }else if(args.statusList){
                let multiWhere : any[] = [];
                args.statusList.forEach((status: string, ix: number) => {
                    let id = nanoid();
                    multiWhere.push(`status=@status_${ix}`)
                    request.input(`status_${ix}`, sql.VarChar, status)
                })

                whereClauses.push(`( ${multiWhere.join(' OR ')} )`)
            }
            
            if(args.startDate && args.endDate){
                let startDate = moment(new Date(args.startDate)).format("DD/MM/YYYY")
                let endDate = moment(new Date(args.endDate)).format("DD/MM/YYYY");

                console.log(startDate, endDate)
                whereClauses.push(`CONVERT(date, StartDate, 103) <= CONVERT(date, @endTime, 103) AND \
                CASE \
                    WHEN DurationType = 'Weeks'    THEN DATEADD(DAY, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 7)), CONVERT(date, StartDate, 103)) \
                    WHEN DurationType = 'Man Days' THEN DATEADD(HOUR, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 24)), CONVERT(datetime, StartDate, 103)) \
                    WHEN DurationType = 'Months'   THEN DATEADD(DAY, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 30)), CONVERT(date, StartDate, 103)) \
                END >= CONVERT(date, @startTime, 103)`)
                request.input('startTime', sql.VarChar, startDate)
                request.input('endTime', sql.VarChar, endDate)
            }

            console.log(sqlQuery + whereClauses.join(' AND '))

            return (await request.query(sqlQuery + whereClauses.join(' AND '))).recordset
        }
    },
    UserMany: {
        type: '[User]',
        resolve: async () => {
            return await User.find()
        }
    },
    FileMany: {
        type: '[File]',
        resolve: async () => {
            const files = await File.find()
            return files.map((x : any) => {
                
                return x;
            });
        }
    },
    FileByProject: {
        type: '[File]',
        args: {
            id: "String"
        },
        resolve: () =>{ 
            console.log("Files")
        }
    }
}
return query;
}

const Mutations = (connector: Connector) : ObjectTypeComposerFieldConfigMapDefinition<any, any>  => {
    return {
    addProject: {
        type: 'Project',
        args: {
            project: "ProjectInput"
        },
        resolve: async (root, args) => {
            let project = new Project({
                ...args.project
            })

            return await project.save();
        }
    },
    updateProject: {
        type: 'Project',
        args: {
            id: "String",
            project: "ProjectInput"
        },
        resolve: () => {
            console.log("Update project")
        }
    },
    removeFileFromProject: {
        type: 'Boolean',
        args: {
            project: "String",
            id: "String"
        },
        resolve: async (root, args, context) => {
            let project = await Project.findOne({id: args.project, organisation: context.user.organisation})
            if(project){
                project.files?.splice(project.files?.indexOf(args.id), 1)
                await project.save()
                return true;
            }
            return false;
        }
    },
    updateFile: {
        type: 'File',
        args: {
            id: "String",
            name: "String",
            status: "String"
        }, 
        resolve: async (root, args, context) => {
            let update : any = {
            }
            console.log("updateFile", args.id)
            const file = await File.findOne({_id: args.id, organisation: context.user.organisation})

            if(file){
                if(args.name) file.name = args.name;
                if(args.status) file.status = args.status;

                console.log(args.id, update)
                let result = await file?.save()
            }
            return file
        }
    },
    updateFiles: {
        type: '[File]',
        args: {
            ids: "[String]",
            status: "String"
        },
        resolve: async (root, args, context) => {
            console.log("UpdateFiles", args.ids)
            const files = await File.find({_id: {$in: args.ids}, organisation: context.user.organisation})
            return await Promise.all(files.map(async (file) => {
                file.status = args.status;
                await file.save()
                return file;
            }))
        }
    },
    removeProject: {
        type: 'Boolean'
    }
}
}

export {
    Queries,
    Mutations
}