import React from 'react';
import './styles/App.css';

class App extends React.Component{
  
  constructor() {
    super();
    this.state = {
      idCounter: 0,
      textArea: '',
      items: [
        {
        id: 111,
        text: 'test',
        checked: false
        },
        {
          id: 2222,
          text: 'Sam smith is amazing',
          checked: true
        }
      ]
    };
    this.renderTodoItems = this.renderTodoItems.bind(this);
    this.renderTextArea = this.renderTextArea.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onType = this.onType.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
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

  onType(event) {
    const newTextArea = event.target.value;
    this.setState(prevState => {
      return {
        idCounter: prevState.idCounter,
        textArea: newTextArea,
        items: prevState.items
      }
    });
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
        textArea: prevState.textArea, 
        items: newItems
      }
    });
  }

  onAdd() {
    const newID = this.state.idCounter + 1;
    const newItems = this.state.items;
    const newItem = {
      id: newID,
      text: this.state.textArea,
      checked: false
    };
    newItems.push(newItem);

    this.setState(prevState => {
      return {
        idCounter: prevState.idCounter + 1,
        textArea: prevState.textArea,
        items: newItems
      };
    });
  }

  onDelete(id) {
    const newItems = [];

    for(let i = 0; i < this.state.items.length; i++) {
      if(id !== this.state.items[i].id) {
        newItems.push(this.state.items[i]);
      }
    }

    this.setState(prevState => {
      return {
        idCounter: prevState.idCounter,
        text: prevState.textArea,
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
          <button onClick={() => this.onDelete(item.id)}>DEL</button>
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
    const placeholderText = 'Add New Item';
    return(
      <div>
        <textarea placeholder={placeholderText} onChange={ this.onType }></textarea>
      </div>
    );
  }

  renderAddButton() {
    return(
      <div className='add'>
        <button onClick={() => this.onAdd() }>+</button>
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