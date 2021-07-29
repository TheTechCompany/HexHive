import React, {
   Component
} from 'react';

export default class Menu extends Component {
   constructor(props){
      super(props);
      this.state = {
         ...props
      };
   }

   renderItems(){
      return this.state.items.map((x) => {
         return (
            <li style={{height: 40, cursor: 'pointer'}}>{x}</li>
         );
      });
   }

   render(){
      return (
         <ul style={{listStyle: 'none', padding: 0}}>
            {this.renderItems()}
         </ul>
      );
   }
}
