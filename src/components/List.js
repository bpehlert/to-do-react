import React from 'react';
import Item from './Item';

const List = ({ list, onDelete, toggleDone, currentUser }) => {
   const currentUserArr = list.filter((item) => item.userId == currentUser);
   
   return (
      <div>
         {
            currentUserArr.map((item, i) => {
               return (
                  <Item 
                     key = {i}
                     userId = {currentUserArr[i].userId}
                     id = {currentUserArr[i].id}
                     title = {currentUserArr[i].title}
                     completed = {currentUserArr[i].completed}
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