import React from 'react';

const Item = (props) => {
   const { userId, id, title, completed } = props;
   return(
      <div> 
         <li>{title}
         <button>x</button>
         </li>
      </div>
   )
}

export default Item;