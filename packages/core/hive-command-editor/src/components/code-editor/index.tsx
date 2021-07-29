import React, { useRef } from 'react';
import Editor, { Monaco } from '@monaco-editor/react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

import { useEffect } from 'react';
import { Box } from 'grommet';
import { isEqual } from 'lodash';


// eslint-disable-next-line import/no-webpack-loader-syntax
const source1 = require('!!raw-loader!./react.txt').default

console.log(source1)

export interface CodeEditorProps {
    code?: string;

    typeDefs?: {[key: string]: string[] | string};

    defaultValue?: string;
    onChange?: (e: string) => void;
}

export const CodeEditor : React.FC<CodeEditorProps> = ({
    code = '',
    typeDefs = {
        name: ["open", "close"]
    },
    defaultValue,
    onChange
}) => {


    const monacoRef = useRef<{monaco?: Monaco}>({})
    const editor = useRef<{editor?: monaco.editor.IStandaloneCodeEditor}>({})

    const containerRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        if(typeDefs && editor.current && editor.current.editor && monacoRef.current.monaco){
            addTypeDefs(monacoRef.current.monaco)
        }
    }, [typeDefs])

    const addTypeDefs = (monaco: Monaco) => {
        console.log(monaco)
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
            `
            export interface Action { 
                ${Object.keys(typeDefs).map((var_name) => {
                    let type = Array.isArray(typeDefs[var_name]) ? (typeDefs[var_name] as string[]).map((x) => `"${x}"`).join(' | ') : typeDefs[var_name]
                    return `${var_name}: ${type};`
                })}
            }
            
            `, 'file:///node_modules/@types/io/index.d.ts'
        )
        
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
            `
            interface ComponentProps {
                ${Object.keys(typeDefs).map((var_name) => {
                    let type = Array.isArray(typeDefs[var_name]) ? (typeDefs[var_name] as string[]).map((x) => `"${x}"`).join(' | ') : typeDefs[var_name]
                    return `${var_name}: ${type};`
                })}
            }
            
        `,
            'file:///index.d.ts'
        )
    }

    /*

    useEffect(() => {
        if(containerRef.current != null && monaco){
            console.log("MONACO", monaco, monaco.languages)
            monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                jsx: monaco.languages.typescript.JsxEmit.React,
                jsxFactory: 'React.createElement',
                reactNamespace: 'React',
                allowNonTsExtensions: true,
                target: monaco.languages.typescript.ScriptTarget.ES2016,
                moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
                module: monaco.languages.typescript.ModuleKind.CommonJS,
                esModuleInterop: true,
                noEmit: true,
                types: ["./index.d.ts"],
                typeRoots: ["node_modules/@types"]
            })
            
            monaco.languages.typescript.typescriptDefaults.addExtraLib(
                `
                declare module "react" {
                    ${source1}
                }
                `,
                'file:///node_modules/@types/react/index.d.ts'
            )

           
        

            addTypeDefs()
            
            editor.current.editor = monaco.editor.create(containerRef.current as HTMLElement, {
                model: monaco.editor.createModel(
                    code || '', 
                    'typescript',
                    monaco.Uri.file('./index.tsx')
                )
            })

            const _subscription = editor.current.editor.onDidChangeModelContent((event) => {
            
                if(!isEqual(editor.current?.editor?.getValue(), code)) onChange?.(editor.current?.editor?.getValue() || '');
                
              });

            return () => {
                console.log("Shutdown editor")
                if (editor.current.editor) {
                    const model = editor.current.editor.getModel();
                    if (model) {
                      model.dispose();
                    }

                    editor.current.editor.dispose();

                }
                if(_subscription){
                    _subscription.dispose()
                }
                 
                /*if (this._subscription) {
                    this._subscription.dispose();
                }
            }
        }

       
    }, [])*/

  const editorWillMount = (monaco: Monaco) => {
        monacoRef.current = {monaco}
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            jsxFactory: 'React.createElement',
            reactNamespace: 'React',
            allowNonTsExtensions: true,
            target: monaco.languages.typescript.ScriptTarget.ES2016,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            esModuleInterop: true,
            noEmit: true,
            types: ["./index.d.ts"],
            typeRoots: ["node_modules/@types"]
        })
        
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
            `
            declare module "react" {
                ${source1}
            }
            `,
            'file:///node_modules/@types/react/index.d.ts'
        )

   


        addTypeDefs(monaco)

    }

    
    const editorDidMount = (_editor : monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {


        _editor.onDidContentSizeChange(() => {
            // setHeight(Math.min(1000, editor.getContentHeight()));
            _editor.layout();
        });

        console.log("Editor mount", code)
        editor.current = {editor: _editor};

    } 


    return (
        <Box
            flex
            ref={containerRef}>
            <Editor  
                defaultPath={"./index.tsx"}
                language={"typescript"}
                value={code}
                onChange={(e) => onChange?.(e?.toString() || '')}
                beforeMount={editorWillMount}
                onMount={editorDidMount} />

        </Box>
     
    )
}

/*
   <Editor 
            options={{ scrollBeyondLastLine: false }}
            editorDidMount={editorDidMount}
            editorWillMount={editorWillMount}
            theme="vs-dark"
            value={props.code}
            onChange={e => props.onChange?.(e?.toString() || '')}
            language="typescript"
            defaultValue={props.defaultValue}
            />
*/