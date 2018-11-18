import React from 'react';
import Item from './Item';

const List = ({ list, onDelete, toggleDone }) => {
   return (
      <div>
         {
            list.map((item, i) => {
               return (
                  <Item 
                     key = {i}
                     userId = {list[i].userId}
                     id = {list[i].id}
                     title = {list[i].title}
                     completed = {list[i].completed}
                     onDelete = {onDelete.bind(this, i)}
                     toggleDone ={toggleDone.bind(this, i)}
                  />
               );
            })
         }
      </div>
   );
}

export default List;