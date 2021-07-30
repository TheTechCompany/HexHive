import { ObjectTypeComposerFieldConfigMapDefinition } from "graphql-compose";
import sql from 'mssql'
import moment from "moment";
import { Connector } from "../../connector";

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
    QuoteById: {
        type: 'Quote',
        args: {
            id: 'ID'
        },
        resolve: async (root, args) => {
            let query = `SELECT osqhQuoteID as id, osqhtOther11 as name, osqhStatus as status, osqhCustName as customer,  convert(datetime, osqhDate) as date FROM dbo.vwosQuotes WHERE id=@quoteID`;
            let request = new sql.Request(connector.pool)
            request.input('quoteID', sql.Int, parseInt(args.id))

            const result = await request.query(query)
            console.log(result)
            return result.recordset
        }
    },
    QuoteMany: {
        type: '[Quote]',
        args: {
            status: "String",
            startDate: "Date",
            endDate: "Date"
        },
        resolve: async (root, args) => {
            //TODO add OR operator to status search
            let request = new sql.Request(connector.pool)

            let sqlQuery = `SELECT 
                                vwosQuotes.osqhQuoteID as id, 
                                osqhtOther11 as name, 
                                osqhStatus as status, 
                                osqhCustName as customer, 
                                convert(datetime, osqhDate) as date,
                                SUM(dbo.vwosQuoteData.osqlLinePrice) AS price
                            FROM dbo.vwosQuotes
                            INNER JOIN dbo.vwosQuoteData ON dbo.vwosQuoteData.OurRef = vwosQuotes.osqhQuoteID
                            `;

            let whereClauses = [];

            if(args.status || args.startDate || args.endDate) sqlQuery += " WHERE ";
            if(args.status){
                whereClauses.push(`osqhStatus = @status`)
                request.input('status', sql.VarChar, args.status)
            }
            
            // if(args.startDate && args.endDate){
            //     let startDate = moment(new Date(args.startDate)).format("DD/MM/YYYY")
            //     let endDate = moment(new Date(args.endDate)).format("DD/MM/YYYY");

            //     console.log(startDate, endDate)
            //     whereClauses.push(`CONVERT(date, StartDate, 103) <= CONVERT(date, @endTime, 103) AND \
            //     CASE \
            //         WHEN DurationType = 'Weeks'    THEN DATEADD(DAY, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 7)), CONVERT(date, StartDate, 103)) \
            //         WHEN DurationType = 'Man Days' THEN DATEADD(HOUR, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 24)), CONVERT(datetime, StartDate, 103)) \
            //         WHEN DurationType = 'Months'   THEN DATEADD(DAY, CONVERT(int, CEILING(CAST(Duration AS FLOAT) * 30)), CONVERT(date, StartDate, 103)) \
            //     END >= CONVERT(date, @startTime, 103)`)
            //     request.input('startTime', sql.VarChar, startDate)
            //     request.input('endTime', sql.VarChar, endDate)
            // }

            console.log(sqlQuery + whereClauses.join(' AND '))

            return (await request.query(sqlQuery + whereClauses.join(' AND ') + ' GROUP BY vwosQuotes.osqhQuoteID, osqhCustName, osqhStatus, osqhtOther11, osqhDate')).recordset.sort((a, b) => b.date - a.date);
        }
    }
}
return query;
}

const Mutations = (connector: Connector) : ObjectTypeComposerFieldConfigMapDefinition<any, any>  => {
     return {
    // addProject: {
    //     type: 'Project',
    //     args: {
    //         project: "ProjectInput"
    //     },
    //     resolve: async (root, args) => {
    //         let project = new Project({
    //             ...args.project
    //         })

    //         return await project.save();
    //     }
    // },
    // updateProject: {
    //     type: 'Project',
    //     args: {
    //         id: "String",
    //         project: "ProjectInput"
    //     },
    //     resolve: () => {
    //         console.log("Update project")
    //     }
    // },
    // removeFileFromProject: {
    //     type: 'Boolean',
    //     args: {
    //         project: "String",
    //         id: "String"
    //     },
    //     resolve: async (root, args) => {
    //         let project = await Project.findOne({id: args.project})
    //         if(project){
    //             project.files?.splice(project.files?.indexOf(args.id), 1)
    //             await project.save()
    //             return true;
    //         }
    //         return false;
    //     }
    // },
    // updateFile: {
    //     type: 'File',
    //     args: {
    //         id: "String",
    //         name: "String",
    //         status: "String"
    //     }, 
    //     resolve: async (root, args) => {
    //         let update : any = {
    //         }

    //         const file = await File.findById(args.id)

    //         if(file){
    //             if(args.name) file.name = args.name;
    //             if(args.status) file.status = args.status;

    //             console.log(args.id, update)
    //             let result = await file?.save()
    //         }
    //         return file
    //     }
    // },
    // updateFiles: {
    //     type: '[File]',
    //     args: {
    //         ids: "[String]",
    //         status: "String"
    //     },
    //     resolve: async (root, args) => {
    //         let result = await File.updateMany({_id: {$in: args.ids}}, {$set: {status: args.status}})
    //         return result;
    //     }
    // },
    // removeProject: {
    //     type: 'Boolean'
    // }
}
}

export {
    Queries,
    Mutations
}