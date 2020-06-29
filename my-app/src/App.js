import React from 'react';
import './styles/App.css';

class App extends React.Component{
  
  constructor() {
    super();
    this.state = {
      idCounter: 0,
      items: [
        {
        id: 1,
        text: 'test',
        checked: false
        },
        {
          id: 2,
          text: 'Sam smith is amazing',
          checked: true
        }
      ]
    };
    this.renderTodoItems = this.renderTodoItems.bind(this);
    this.renderTextArea = this.renderTextArea.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }
  
  getItemStyle(checked) {
    if(checked) {
      return {
        color: 'tomato',
        textDecoration: 'line-through'
      };
    } else {
      return {};
    }
  }

  onCheck(id) {
    const newItems = [];

    for(let i = 0; i < this.state.items.length; i++) {
      if(this.state.items[i].id === id) {
        const newItem = {
          id: this.state.items[i].id,
          text: this.state.items[i].text,
          checked: !this.state.items[i].checked
        }
        newItems.push(newItem);
      } else {
        newItems.push(this.state.items[i]);
      }      
    }

    this.setState(prevState => {
      return {
        idCounter: prevState.idCounter, 
        items: newItems
      }
    });
  }

  renderTodoItems() {
    const itemComponents = this.state.items.map(item => {
      const itemStyle = this.getItemStyle(item.checked);
      return(
        <div className='item'>
          <input 
          type='checkbox'
          checked = { item.checked }
          onChange = { () => this.onCheck(item.id) } 
          />
          <h2 style={ itemStyle }>{ item.text }</h2>
          <button>DEL</button>
        </div>
      );
    });
    return(
      <div>
        { itemComponents }
      </div>
    );
  }
  
  renderTextArea() {
    return(
      <div>
        <textarea></textarea>
      </div>
    );
  }

  renderAddButton() {
    return(
      <div className='add'>
        <button>+</button>
      </div>
    );
  }

  render() {
    return(
      <div>
        <h1>Todo List</h1>
        <this.renderTodoItems />
        <this.renderTextArea />
        <this.renderAddButton />
      </div>
    );
  }
}

export default App;