import React, { Component } from 'react';
import { fromJS } from 'immutable';

import './component/AddNewModal/style.css';
import Column from './component/Column';
import AddNewModal from './component/AddNewModal';
import Task from './component/Task';
import Header from './component/Header';

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { dieudata: ["Add", "Infor", "Bell", "Gear","Avatar"] }
  // }

  state = {
    displayModal: false,
    columns: fromJS([
      { id: 'td', title: 'TO DO', tasks: [{ id: 1, content: 'Demo task', time: '11/6/2020, 3:40:35 PM' }] },
      { id: 'di', title: 'DOING', tasks: [] },
      { id: 'vf', title: 'VERIFY', tasks: [] },
      { id: 'do', title: 'DONE', tasks: [] }
    ])
  }

  // handleToggleModal = () => {
  //   this.setState(prevState => ({
  //     displayModal: !prevState.displayModal,
  //   }))
  // }

  render() {
    const { columns, displayModal } = this.state;

    return (
      <div>
        <div className="Header">
          <Header name="Logo" dieudata={this.state.dieudata} />
        </div>
        <div className="App">
          <div className="App_content">
            {
              (columns || []).map(column => (
                <Column key={column.get('id')} column={column}
                  handleToggleModal={this.handleToggleModal}>
                  <div style={{ minHeight: '200px' }}>
                    {
                      column.get('tasks').map(task => (
                        <Task key={task.get('id')} task={task} />
                      ))
                    }
                  </div>
                </Column>
              ))
            }
          </div>
          {displayModal && <AddNewModal />}
        </div>
      </div>
    );
  }
}

export default App;
