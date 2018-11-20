import React, { Component } from 'react';
import './main.css';
import Input from './Input';
import List from './List';
import User from './User';


class App extends Component {
   constructor(){
      super()
      this.state = {
         currentUser: 1,
         userInput: '',
         json: [],
         list: []
      }  
   }

   async componentDidMount() {      
      try {
         const res = await fetch('https://jsonplaceholder.typicode.com/todos');
         const json = await res.json();
         this.setState({ json: json, list: json });
      } catch (error) {
         console.log(error);
      };
   }

   onChange = (event) => {
      this.setState({userInput: event.target.value});
   };

   onAddBtn = () => {
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

   onClick = (e) => {
      const type = e.target;
      console.log(type);
      
      if (type.tagName === "LI") this.toggleDone(type.id);
      if (type.tagName === "BUTTON") this.deleteItem(type.id);
   }

   deleteItem = (index) => { 
      console.log(index, this.state.list);
        
      const newList = [].concat(this.state.list)
      newList.splice(index, 1);
      this.setState({list: newList})
   };

   toggleDone = (index) => {
      const newList = [].concat(this.state.list)
      newList[index].completed = !newList[index].completed;
      this.setState({list: newList})
   };

   selectUser = (event) => {

      const newUser = parseInt(event.target.value);
      const filteredList = this.state.json.filter((item) => item.userId === newUser);
      
      this.setState({currentUser: newUser, list: filteredList});
      
      
   };

   render() {
      const { list, json, currentUser, userInput } = this.state;
      return(
         <div>
            <header>
               <User 
                  list={list}
                  currentUser={currentUser}
                  selectUser={this.selectUser}
               />
               <h1>To Do List</h1>
               <Input 
                  userInput={userInput}
                  onChange={this.onChange}
                  onAddBtn={this.onAddBtn}
                  onKeyPress={this.onKeyPress}
               />
            </header>
            <List 
               list={list} 
               json={json}
               onClick={this.onClick}
               currentUser={currentUser}
            />
         </div>
      )
   }
};

export default App;
