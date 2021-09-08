import { IFileExplorerContext } from "../context";

export interface IAction {
    key: string;
    icon: JSX.Element;
    onClick?: () => void;
    disabled?: boolean | ((state: IFileExplorerContext) => boolean)
}