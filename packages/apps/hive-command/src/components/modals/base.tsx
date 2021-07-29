import React from 'react';


import { Box, Layer, Button } from 'grommet'

export interface BaseModalProps {
    open: boolean;
    width?: string;
    onClose?: () => void;
    onSubmit?: () => Promise<boolean> | void;

    title?: string;
}

export interface BaseModalState {

}

export class BaseModal extends React.Component<BaseModalProps, BaseModalState> {

    constructor(props: BaseModalProps) {
        super(props)

        this.onClose = this.onClose.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onClose() {
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    async onSubmit() {
        if (this.props.onSubmit) {
            let res = await this.props.onSubmit()
            if (res || res === undefined) this.onClose();
        } else {
            this.onClose()
        }
    }

    render() {
        return !this.props.open ? null : (
            <Layer
                background="transparent"
                onClickOutside={this.onClose}
                onEsc={this.onClose} >
                <Box
                    round="small"

                    background="brand"
                    width={this.props.width || "medium"}
                    gap="small"
                    pad="xsmall">
                    <Box
                        pad="small"
                        border={{ side: 'bottom', size: 'small' }}>
                        {this.props.title}
                    </Box>
                    <Box
                        pad="small"
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <Box gap="small">
                            {this.props.children}
                        </Box>
                    </Box>
                    <Box direction="row" justify="end">
                        <Button margin={{ right: 'small' }} label="Cancel" plain onClick={this.onClose} />

                        <Button label="Save" primary onClick={this.onSubmit} />

                    </Box>
                </Box>
            </Layer>
        )
    }
}