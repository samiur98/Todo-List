import React from 'react';

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
  }
  
  renderTodoItems() {
    console.log(this.state);
    const itemComponents = this.state.items.map(item => {
      return(
        <div>
          <input type='checkbox' />
          <h1>{ item.text }</h1>
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

  render() {
    return(
      <div>
        <h1>Todo List</h1>
        <this.renderTodoItems />
        <button>+</button>
      </div>
    );
  }
}

export default App;