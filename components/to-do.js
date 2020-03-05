import React, { Component } from "react";
import Listitem from "./Listitem";
import './to-do.css'

export class todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],       
      currentItem: {
        text: '',
        key: ''
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput = todo => {
    this.setState({
        currentItem:{
            text: todo.target.value,
            key: Date.now()
        }
    })
   
  };
  addItem(submit) {
    submit.preventDefault();
    const newItem = this.state.currentItem;
   // console.log(newItem);
   if(newItem !=="")
   {
       const newItems = [...this.state.items,newItem];
       this.setState({
           items:newItems,
           currentItem:{
               text:'',
               key:''
           }
       })
   }
  }

  deleteItem(key)
  {
    const filter = this.state.items.filter(item=>
        item.key!== key);
        this.setState({
            items: filter
        })
  }
setUpdate(text,key)
{
    const items = this.state.items;
    items.map(item =>
        {
            if(item.key === key)
            {
                item.text = text;
            }
        })
    this.setState({
        items: items
    })
}

  render() {
    return (
      <div>
        <header>
          <form id="to-do" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="enter To Do"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <br></br>
            <button type="submit">Add</button>
          </form>
          <Listitem item = {this.state.items}
          deleteItem = {this.deleteItem}
          setUpdate = {this.setUpdate}/>
        </header>
      </div>
    );
  }
}

export default todo;
