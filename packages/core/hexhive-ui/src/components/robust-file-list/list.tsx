import React, { useMemo, useState } from 'react';
import { DataTable, Text, CheckBox, Spinner } from 'grommet';

export interface FileListProps {
    loading?: string[];
    files?: any[];
    onSelect?: any;
    onClick: any;
}

export const FileList: React.FC<FileListProps> = (props) => {
    const [checked, setChecked] = useState<any[]>([])
    const [sort, setSort] = useState<{ property: string, direction: "asc" | "desc" }>()

    const _setChecked = (checked: string[]) => {
        setChecked(checked)
        props.onSelect?.(checked.map((x) => props.files?.find((a) => a.id == x)))
    }

    const onCheck = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        if (event.target.checked) {
            _setChecked([...checked, value]);
        } else {
            _setChecked(checked.filter(item => item !== value));
        }
    };

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        _setChecked(event.target.checked ? (props.files || []).map((datum) => datum.id) : []);
    }
    const sortFiles = (a: any, b: any) => {
        if (!sort) return 0; //props.files || []
        let first = a[sort.property] || ''
        let next = b[sort.property] || ''
        return sort.direction == 'asc' ?
            first == next ? 0 : first > next ? 1 : -1
            :
            first == next ? 0 : first < next ? 1 : -1


    }


    return (
        <DataTable
            fill
            onMore={() => console.log("More")}
            pin
            primaryKey={"id"}
            columns={[
                {
                    property: 'checkbox',
                    render: datum => (
                        (props.loading || []).indexOf(datum.id) > -1 || !datum.cid ? (
                            <Spinner />
                        ) : (
                            <CheckBox
                                checked={checked.indexOf(datum.id) > -1}
                                onChange={(e) => {
                                    onCheck(e, datum.id)
                                    e.preventDefault()
                                    e.stopPropagation()
                                }} />)
                    ),
                    header: (
                        <CheckBox
                            onChange={onCheckAll}
                            checked={checked.length == props.files?.length}
                            indeterminate={checked.length > 0 && checked.length < (props.files?.length || 0)} />
                    ),
                    sortable: false
                },
                {
                    property: 'name',
                    header: <Text>Name</Text>,
                    sortable: true
                },
                {
                    property: 'status',
                    header: 'Status',
                    sortable: true
                }
            ]}
            onSort={({ property, direction }) => setSort({ property, direction })}
            data={props.files?.sort(sortFiles)}
            onClickRow={({ target, datum }) => {
                let tag: any = target;
                if (tag.tagName == "INPUT" && tag.type == "checkbox") {

                } else if (tag.getElementsByTagName('input').length > 0) {

                } else {
                    console.log(tag.tagName)
                    props.onClick(datum)
                }
            }}
        />
    );
}