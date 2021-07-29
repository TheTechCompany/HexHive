import React, {
  Component
} from 'react';

import './index.css';

export default class TextInput extends Component {
  render(){
    const { icon, placeholder, value, onChange } = this.props;
    return (
      <div className="text-input">
        <div className="text-input__pre">
          {icon}
        </div>
        <input placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    );
  }
}
