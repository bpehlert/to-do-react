import React from 'react';

const User = ({ list, currentUser, selectUser }) => {
   if (!list.length) return null;
   let usersArr = [];
   for (let i = 1; i < 11; i++) {
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