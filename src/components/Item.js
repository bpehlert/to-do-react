import React from 'react';

const Item = (props) => {
   const { id, name, done } = props;
   return (
      <div>
         <input id={id} type="checkbox" name='item'/>
         <label htmlFor="item">{name}</label>
         <button>x</button>
      </div>
   )
}

export default Item;