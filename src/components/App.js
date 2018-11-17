import React, { Component } from 'react';
import Input from './Input';
import List from './List';

class App extends Component {
   constructor(){
      super()
      this.state = {
         user: '',
         input: '',
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

   render() {
      return(
         <div>
            {console.log(this.state.list)}
            <h1>To Do List</h1>
            <Input />
            <List list={this.state.list} />
         </div>
      )
   }
};

export default App;
