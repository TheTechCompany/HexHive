import React, {
  Component
} from 'react';

export default class ColorDot extends Component {
  render(){
    const { size, color } = this.props;
    return (
      <div style={{
        marginRight: 8,
        background: color,
        borderRadius: size * 2,
        height: size,
        width: size
      }}/>
    );
  }
}
