import { AxiosInstance } from "axios";
import _ from "lodash";
import { useMutation, query, StackItems, useQuery, StackItemsInput } from "@hexhive/client";

export default function stackActionFactory(axios: AxiosInstance){

    return {
        getStack: async () => {
            const result = await axios.get('/stacks')
            return result.data;
        },
        useGetStacks: () => {
            const query = useQuery({
                suspense: false,
                staleWhileRevalidate: true
            })

            return [ query.$state.isLoading, query.StackMany().map((x)=> {
                return {
                    ...x,
                    items: x.items?.map((y) => ({
                        ...y,
                        ports: y?.ports?.map((z) => ({...z}))
                    }))
                }
            }) ]
  
        },
        getStackItem: async (stack_id:string, item_id: string) => {
            const res = await axios.get(`/stacks/${stack_id}/items/${item_id}`)
            return res.data;
        },
        updateStackItem: async (stack_id: string, item_id: string, update: StackItems) => {
            const res = await axios.put(`/stacks/${stack_id}/items/${item_id}`, {update: update})
            return res.data;
        },
        useUpdateStack: (id: string) => {
            return useMutation((mutation, args: {id: string, update: any}) => {
                console.log(args)
                const stack_port_pick = ['_id', 'name', 'x', 'y', 'rotation', 'type']
                const stack_pick = ['_id', 'type', 'name', 'dimensions', 'code', 'ui', 'ports']
                const stack_item_pick = ['_id', 'name', 'ui', 'ports', 'key', 'type', 'dimensions']
                let update: any = {};
                if(args.update.items){
                    update.items = args.update.items.map((item: any) => {
                      let picked =   _.pick(item, stack_item_pick)
                      picked.dimensions = _.pick(picked.dimensions, ['width', 'height'])
                      return picked;
                    });
                }
                if(args.update.name){
                    update.name = args.update.name
                }
                if(args.update.ports){
                    
                    update.ports = _.pick(args.update.ports, stack_port_pick)
                }
                const result = mutation.StackUpdateById({_id: args.id, record: update})

                return {
                    item: {
                        ...result?.record,
                    },
                    error: result?.error
                }
            }, {
                onCompleted(data) {},
                onError(error) {},
                refetchQueries: [query.StackById({_id: id})],
                suspense: false,
                awaitRefetchQueries: true,
            })
        },
        useCreateStack: () => {
            return useMutation((mutation, args: {name: string}) => {
                const result = mutation.StackCreateOne({record: {name: args.name}})
               
                if(result){
                    return {
                        item: {
                            ...result.record
                        },
                        error: result.error
                    }
                }
                return {
                    error: "no access"
                }
                
            }, {
                
                    onCompleted(data) {},
                    onError(error) {},
                    refetchQueries: [query.StackMany],
                    awaitRefetchQueries: true,
                    suspense: false,
                  
            })
        
        },
        useCreateStackItem: (stack_id: string) => {
            return useMutation((mutation, args: {stack_id: string, items: StackItemsInput}) => {
                let items = _.pick(args.items, ['_id', 'type', 'name', 'code', 'ports'])
                const result = mutation.addStackItem({stack: args.stack_id, record: items as any})

                return {
                    item: {
                        ...result
                    },
                    error: null
                }
            }, {
                
                onCompleted(data) {},
                onError(error) {},
                refetchQueries: [query.StackById({_id: stack_id})],
                awaitRefetchQueries: true,
                suspense: false,
              
            })
         
        }
    }
}