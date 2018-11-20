import React from 'react';

const Input = ({userInput, onChange, onAddBtn, onKeyPress}) => {
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
            onClick={onAddBtn}
         >Add
         </button>
      </div>
   )
}

export default Input;