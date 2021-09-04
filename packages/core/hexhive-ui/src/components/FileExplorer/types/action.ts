import { IFileExplorerContext } from "../context";

export interface IAction {
    key: string;
    icon: JSX.Element;

    disabled?: boolean | ((state: IFileExplorerContext) => boolean)
}