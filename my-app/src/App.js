import React from 'react';
import './styles/App.css';

class App extends React.Component{
  
  constructor() {
    super();
    this.state = {
      rabbit: 'rabbit',
      items: [
        {
        id: 1,
        text: 'test',
        checked: false
        },
        {
          id: 2,
          text: 'Sam smith is amazing',
          checked: false
        }
      ]
    };
    this.renderTodoItems = this.renderTodoItems.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
  }
  
  renderTodoItems() {
    const itemComponents = this.state.items.map(item => {
      return(
        <div className='item'>
          <input type='checkbox' />
          <h2>{ item.text }</h2>
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
        <this.renderAddButton />
      </div>
    );
  }
}

export default App;