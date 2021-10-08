import React, { useEffect, useState } from 'react'
import { deviceActions, programActions } from '../../actions'
import { ProgramModal } from '../../components/modals/program';
import { useQuery, Program, CommandProgram, useMutation } from '@hexhive/client'
import { Box } from 'grommet';
import { NestedList } from '../../components/ui/nested-list';
import { RouteComponentProps } from 'react-router-dom'
export interface ProgramListProps extends RouteComponentProps {
    history: any;
}

export const ProgramList: React.FC<ProgramListProps> = (props) => {
    const [ modalOpen, openModal ] = useState(false)
    const [ selectedProgram, setSelectedProgram ] = useState<any>()

    
    
    const [ programs, setPrograms ] = useState<Array<CommandProgram>>([])

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })
    
    const [ addProgram, { isLoading, data}] =  useMutation((mutation, args: {
        record: any
    }) => {
        const result = mutation.createCommandPrograms({
            input: [args.record]
        })

        return {
            item: {
                ...result?.commandPrograms[0]
            },
            error: null
        }
    }, {
        onCompleted(data) {},
        onError(error) {},
        refetchQueries: [query.commandPrograms()],
        suspense: false,
        awaitRefetchQueries: true,
    })
    const _programs = query.commandPrograms()
    
    useEffect(() => {
        if(_programs){
            setPrograms(_programs)
        }
    }, [_programs])
    return query.$state.isLoading ? <>Loading...</> : (
        <Box flex className="program-list">
          <ProgramModal 
            selected={selectedProgram}
            open={modalOpen} 
            onClose={() => {
                setSelectedProgram(null)
                openModal(false)
            }}
            onSubmit={(program: Program) => {
                if(program.name){
                    addProgram({args: {record: {
                        name: program.name,
                        
                        program:[],
                        hmi: []
                    }}}).then((program) => {
                        openModal(false)
                        if(program?.item){
                            let p : any[] = programs.slice()
                            p.push(program?.item)
                            setPrograms(p)
                        }
                    })
                }

            }}/>

            <NestedList
                data={programs}
                onClick={({item}) => props.history.push(`${props.match.url}/${item.id}`)}
                renderItem={(item) => item.name}
                onAdd={() => openModal(true)} />
            {/*<PaperList 
                title="Programs"
                items={programs}
                renderItem={(item: any) => item.name}
                onClick={(item: any) => props.history.push(`/editor/${item._id}`)}
                onAdd={() => openModal(true)}
                onEdit={(item: any) => {
                    setSelectedProgram(item);
                    openModal(true)
                }} />*/}
        </Box>
    )
}
