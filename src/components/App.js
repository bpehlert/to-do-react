// Setting up components and ReactRouter
import React from 'react';
import Input from './Input';
import List from './List';
import { toDoItems } from '../toDoItems';

const App = () => {
   return (
      <div>
         <h1>To Do List</h1>
         <Input />
         <div>
         <List toDoItems = { toDoItems } />
         </div>
      </div>
   )
};

export default App;