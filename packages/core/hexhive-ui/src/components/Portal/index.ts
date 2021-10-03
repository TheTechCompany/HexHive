import ReactDOM from "react-dom"

export const Portal = ({ children }: any) => {
    return typeof document === 'object'
      ? ReactDOM.createPortal(children, document.body)
      : null
  }