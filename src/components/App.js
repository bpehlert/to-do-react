import React, { Component } from 'react';
import './main.css';
import Input from './Input';
import List from './List';


class App extends Component {
   constructor(){
      super()
      this.state = {
         user: '',
         userInput: '',
         list: []
      }  
   }

   async componentDidMount() {
      try {
         const res = await fetch('https://jsonplaceholder.typicode.com/todos');
         const json = await res.json();
         this.setState({ list: json });
      } catch (error) {
         console.log(error);
      }
   }

   onChange = (event) => {
      this.setState({userInput: event.target.value});
   };

   onClick = () => {
      this.addItem();
   }

   onKeyPress = (event) => {
      if (event.key !== "Enter") return;
      this.addItem();
   }

   addItem = () => {
      if (this.state.userInput === '') return;
      const newItem = {
         userId: 1,
         id: 201,
         title: this.state.userInput,
         completed: false
      };
      const listArray = [].concat(this.state.list)
      listArray.push(newItem)
      this.setState({list: listArray, userInput: ''});
   };

   onDelete = (index) => {
      const newList = [].concat(this.state.list)
      newList.splice(index, 1);
      this.setState({list: newList})
   };

   toggleDone = (index) => {
      const newList = [].concat(this.state.list)
      newList[index].completed = !newList[index].completed;
      this.setState({list: newList})
   };

   render() {
      return(
         <div>
            <header>
               <h1>To Do List</h1>
               <Input 
                  userInput={this.state.userInput}
                  onChange={this.onChange}
                  onClick={this.onClick}
                  onKeyPress={this.onKeyPress}
               />
            </header>
            <List 
               list={this.state.list} 
               onDelete={this.onDelete}
               toggleDone={this.toggleDone}
            />
         </div>
      )
   }
};

export default App;
