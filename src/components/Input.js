import React from 'react';

const Input = ({userInput, onChange, onClick, onKeyPress}) => {
   return (
      <div>
         <input 
            id="newInput" 
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={userInput}
            placeholder="New item"
         />
         <button 
            id="addBtn"
            type="button" 
            onClick={onClick}
         >Add
         </button>
      </div>
   )
}

export default Input;