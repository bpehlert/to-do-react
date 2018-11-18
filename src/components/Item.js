import React, {Component} from 'react';
import './main.css';

class Item extends Component {
   constructor(props){
      super(props)
      this.state = {
         
      }  
   }

render(props){
   const { userId, id, title, completed, onDelete, toggleDone } = props;
   const doneClass = completed ? 'done' : '';
   let deleteBtnClass = 'deleteBtn toggleBtn'
      return(
         <div className='container'>
            <button
               className={deleteBtnClass}
               onClick={onDelete}
            >x</button>
            <li 
               onClick={toggleDone} 
               className={doneClass}
               onMouseEnter={(e)=> console.log(e)}
               onMouseLeave={(e)=> console.log(e)}
            >{title}</li>
         </div>
      )
   }
}

export default Item;