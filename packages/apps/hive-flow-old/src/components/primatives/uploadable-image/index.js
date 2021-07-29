import React, {
  Component
} from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import Typography from '@material-ui/core/Typography';
import {
    CloudUpload
} from 'grommet-icons'
import './index.css';

class UploadableImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
      loading: false
    }
  }

  changeFile(files){
    if(files.length > 0){
      console.log(files);
      this.setState({loading: true, file: files[0]})
      this.uploadToRoute().then((r) => {
        console.log("upload ", r);
        this.setState({loading: false})
      })
    }
  }

  uploadToRoute(){
    const { route } = this.props;
    let fd = new FormData();
    fd.append('file', this.state.file)
    return fetch(route, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + this.props.token 
      },
      body: fd
    }).then((r) => r.json())
  }

  _renderImage(){
    let img = null;
    if(this.state.file){
      img = URL.createObjectURL(this.state.file);
    }else{
      if(this.props.src){
        img = this.props.src;
      }else{
        img = this.props.placeholder;
      }
    }

    return (<img src={img} />)
  }

  render(){
    //    let src = this.state.file;
    const { placeholder, src, style } = this.props;

    return (
      <div className={`uploadable-image ${src ? '' : 'empty'}`} style={style}>
        {this._renderImage()}
        <div className={`uploadable-image__spinner ${this.state.loading ? 'active': ''}`}>
          <Spinner name="wandering-cubes" color="white" fadeIn="none" />
        </div>
        <div className="uploadable-image__banner">
        
          <Dropzone style={{flex: 1}} onDrop={this.changeFile.bind(this)}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div className="uploadable-image__inner" style={{flex: 1}} {...getRootProps()}>
                  <input {...getInputProps()} /> 
                  <CloudUpload />
                  <Typography variant="p">Upload image</Typography>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  token: state.auth.token
}))(UploadableImage)
