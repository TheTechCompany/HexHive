import { DocumentPdf } from "grommet-icons";
import React from "react";
import { IFile } from "../types/file";

export const DEFAULT_ICONS = (file: IFile) => {
    if(file.name?.indexOf('.pdf')){
        return (<DocumentPdf size="42px" />);
    }
}