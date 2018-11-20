import React from 'react';
import './main.css';

const Item = (props) => {
   const { id, title, completed } = props;
   const doneClass = completed ? 'done' : '';
   let deleteBtnClass = 'deleteBtn'
   return(
      <div className='container'>
          <button
            className={deleteBtnClass}
            id={id}
         >x</button>
         <li 
            className={doneClass}
            id={id}
         >{title}</li>
      </div>
   )
}

export default Item;