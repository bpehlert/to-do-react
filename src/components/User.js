import React from 'react';

const User = ({ list, currentUser, selectUser }) => {
   if (!list.length) return null;
   const lastUser = list[list.length -1].userId
   let usersArr = [];
   for (let i = 1; i <= lastUser; i++) {
      usersArr.push(<option 
                        onSelect={selectUser}
                        key={i}
                        value={i}
                        >User {i}</option>);
   }
   return (
      <div className='user'>
         <select onChange={selectUser} value={currentUser}>
            {usersArr}
         </select>
      </div>

   )
}

export default User;