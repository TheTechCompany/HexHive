import React from 'react';


import { Box, Layer, Button } from 'grommet'

export interface BaseModalProps {
    open: boolean;
    width?: string;
    onClose?: () => void;
    onDelete?: () => void;
    onSubmit?: () => Promise<boolean> | void;

    title?: string;

    padding?: string;
    gap?: string;

    header?: any;
    noClick?: boolean;
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
                onClickOutside={!this.props.noClick && this.onClose}
                onEsc={this.onClose} >
                <Box
                    overflow="hidden"
                    round="small"
                    background="neutral-2"
                    width={this.props.width || "medium"}
                    gap={this.props.gap}>
                    <Box
                        background="accent-2"
                        pad={"small"}
                        border={{ side: 'bottom', size: 'small' }}>
                        {this.props.title}
                    </Box>
                    {this.props.header && this.props.header}
                    <Box
                        pad={this.props.padding || "small"}
                        style={{ display: 'flex', flexDirection: 'column' }}>
                        <Box gap="small">
                            {this.props.children}
                        </Box>
                    </Box>
                    <Box
                        pad="xsmall"
                        gap="xsmall"
                        direction="row" justify="end">
                        {this.props.onDelete && <Button hoverIndicator onClick={this.props.onDelete} label="Delete" color="red" />}

                        <Button hoverIndicator label="Cancel" plain onClick={this.onClose} />

                        <Button hoverIndicator label="Save" primary onClick={this.onSubmit} />

                    </Box>
                </Box>
            </Layer>
        )
    }
}