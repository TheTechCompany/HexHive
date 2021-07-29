import React, { useMemo, useState } from 'react';
import { DataTable, Text, CheckBox, Spinner } from 'grommet';

export interface FileListProps {
    loading?: string[];
    files?: any[];
    onSelect?: any;
    onClick?: any;
}

export const FileList: React.FC<FileListProps> = (props) => {
    const [checked, setChecked] = useState<any[]>([])
    const [sort, setSort] = useState<{ property: string, direction: "asc" | "desc" }>()

    const _setChecked = (checked: string[]) => {
        setChecked(checked)
        props.onSelect?.(checked.map((x) => props.files?.find((a) => a._id == x)))
    }

    const onCheck = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        if (event.target.checked) {
            _setChecked([...checked, value]);
        } else {
            _setChecked(checked.filter(item => item !== value));
        }
    };

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        _setChecked(event.target.checked ? (props.files || []).map((datum) => datum._id) : []);
    }
    const sortedFiles = useMemo(() => {
        if (!sort) return props.files || []

        return (props.files || []).map((x) => ({ ...x })).sort((a: any, b: any) => {
            let first = a[sort.property] || ''
            let next = b[sort.property] || ''
            return sort.direction == 'asc' ?
                first == next ? 0 : first > next ? 1 : -1
                :
                first == next ? 0 : first < next ? 1 : -1
        })

    }, [JSON.stringify(props.files), sort])


    return (
        <DataTable
            step={50}
            paginate={true}
            onMore={() => console.log("More")}
            pin
            primaryKey={"_id"}
            columns={[
                {
                    property: 'checkbox',
                    render: datum => (
                        (props.loading || []).indexOf(datum._id) > -1 || !datum.cid ? (
                            <Spinner />
                        ) : (
                            <CheckBox
                                checked={checked.indexOf(datum._id) > -1}
                                onChange={(e) => {
                                    onCheck(e, datum._id)
                                    e.preventDefault()
                                    e.stopPropagation()
                                }} />)
                    ),
                    header: (
                        <CheckBox
                            onChange={onCheckAll}
                            checked={checked.length == sortedFiles.length}
                            indeterminate={checked.length > 0 && checked.length < sortedFiles.length} />
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
            data={sortedFiles}
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