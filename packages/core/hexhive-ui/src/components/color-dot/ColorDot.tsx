import React, {
  Component
} from 'react';

export class ColorDot extends Component<any, any> {
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
