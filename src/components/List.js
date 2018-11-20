import React from 'react';
import Item from './Item';

const List = ({ list, json, onClick, currentUser }) => {
   const currentUserArr = json.filter((item) => item.userId === parseInt(currentUser)) || [];
   return (
      <div>
         <ul onClick={onClick}>
            {
               currentUserArr.map((item, i) => {
                  return (
                     <Item 
                        key = {i}
                        userId = {currentUserArr[i].userId}
                        id = {i}
                        title = {currentUserArr[i].title}
                        completed = {currentUserArr[i].completed}
                     />
                  );
               })
            }
         </ul>
      </div>
   );
}

export default List;