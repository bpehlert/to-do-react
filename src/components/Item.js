import React from 'react';
import './main.css';

const Item = (props) => {
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

export default Item;