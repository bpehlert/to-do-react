import React from 'react';
import Item from './Item';

const List = ({ toDoItems }) => {
   const itemComponents = toDoItems.map((item, i) => {
      return <Item key={i} id={toDoItems[i].id} name={toDoItems[i].name} done={toDoItems[i].done}/>
   })
   return (
      <div>{itemComponents}</div>
   )
}

export default List;