import React, {
  Component
} from 'react';

// import { connect } from 'react-redux';
// import { File } from '../../../gqless';
// import { StoreState } from '../../../reducers';
import { FileViewer } from '../file-viewer';


export interface FileCardProps {
  token?: string;
  file?: any;
  jobId?: string;
}

const FileCard: React.FC<FileCardProps> = (props) => {
  // const renderContent = (file: any) => {
  //   let url, mainType, subType;
  //   if(!file || !file.mimeType) return;
  //   console.log("FILE", file, file.extension, file.id);
  //   if(file.id){
  //     url = `${process.env.REACT_APP_API && process.env.REACT_APP_API.length > 0 ? process.env.REACT_APP_API : window.location.origin}/api/files/${file.id}${file.extension || ''}?access_token=${props.token}`; 
  //     mainType = "image";
  //     if(file.mimeType){
  //       mainType = file.mimeType.split('/')[0]
  //       subType = file.mimeType.split('/')[1]; 
  //     }
      
  //   }else{
  //     let f = file.file;
  //     console.log(f)
  //     url = URL.createObjectURL(f)
    
  //     mainType = f.type.split('/')[0]
  //     subType = f.type.split('/')[1]
      
  //   }

  //   console.log(file.mimeType, mainType, subType)
  
  //   switch(mainType){
  //     case "video":
  //       return (
  //         <img src={require('../../../assets/movie.png')} />
  //       );
  //     case "image":
  //       return (
  //         <img src={url} />
  //       );
  //     case "application":
  //       const doc = {uri: url, fileType: `${mainType}/${subType}`}
  //       switch(subType){
  //         case "pdf":
  //         case "vnd.openxmlformats-officedocument.wordprocessingml.document":
  //         case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
  //           console.log(url)
  //           return (
  //             <FileThumbnail documents={[doc]} />
  //           );
  //         case "zip":
  //         case "octet-stream":
  //         case "x-zip-compressed":
  //         case "x-rar-compressed":
  //           return (
  //             <img src={require('../../../assets/zip.png')} />
  //           );
  //         default:
  //           return null;
  //       }
  //     case "multipart":
  //       switch(subType){
  //         case "x-zip":
  //           return (
  //             <img src={require('../../../assets/zip.png')} />
  //           );
  //         default:
  //           return null;
  //       }
  //     default:
  //       return null;
  //   }
    
  // }

  
    return !props.file ? null : ( 
      <div className="file-contents">
        <FileViewer files={[props.file]} token={props.token} />
      </div>
    )
  
}

export default FileCard;
// export default connect((state: StoreState) => ({
//   token: state.auth.token
// }))(FileCard)
