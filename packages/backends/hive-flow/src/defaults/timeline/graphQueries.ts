import { ObjectTypeComposerFieldConfigMapDefinition } from "graphql-compose";
import sql from 'mssql'
import moment from "moment";
import { Connector } from "../../connector";
import { TimelineItem } from '@hexhive/types'

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
    TimelineItemById: {
        type: 'TimelineItem',
        args: {
            id: 'ID'
        },
        resolve: async (root, args) => {
           const result = await TimelineItem.findById(args.id)
           return result.toJSON({virtuals: true})
        }
    },
    TimelineItemMany: {
        type: '[TimelineItem]',
        args: {
            timeline: "String",
            startDate: "Date",
            endDate: "Date"
        },
        resolve: async (root, args) => {
            let query : any = {};
            
            let dateQuery : any = {};
            if(args.startDate){
                query['endDate'] = {$gte: args.startDate};
            }

            if(args.endDate){
                query['startDate'] = {$lte: args.endDate};
            }

            if(args.timeline){
                query['timeline'] = args.timeline;
            }

            // if(args.startDate || args.endDate){
            //     query['date'] = dateQuery;
            // }

            const result = await TimelineItem.find(query)
            return result.map((x: any) => x.toJSON({virtuals: true}))
        }
    }
}
return query;
}

const Mutations = (connector: Connector) : ObjectTypeComposerFieldConfigMapDefinition<any, any>  => {
     return {
        createTimelineItem: {
            type: 'TimelineItem',
            args: {
                item: "TimelineItemInput"
            },
            resolve: async (root, args, context, info) => {
                console.log(root, args, context, info)
                let timeline = new TimelineItem({
                    ...args.item,
               //     owner: context.user._id
                })

                await timeline.save();
                return timeline
            }
        },
        updateTimelineItem: {
            type: 'TimelineItem',
            args: {
                id: "String",
                item: "TimelineItemInput"
            },
            resolve: async (root, args, context, info) => {
                let item = await TimelineItem.findById(args.id);

                if(item){
                    console.log("UPDATE TIMELINE", item)
                    if(args.item.startDate) item.startDate = args.item.startDate;
                    if(args.item.endDate) item.endDate = args.item.endDate;
                    if(args.item.items) item.items = args.item.items;
                    await item.save();
                }

                return item.toJSON({virtuals: true});
            }
        },
        removeTimelineItem: {
            type: "Boolean",
            args: {
                id: "String"
            },
            resolve: async (root, args, context, info) => {
                let item = await TimelineItem.deleteOne({_id: args.id})

                return item.deletedCount == 1;
            }
        }
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