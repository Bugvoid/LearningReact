import React, { Component } from 'react';

//puxando Componente
import Task from './list/Task';
import MenuTab from './list/MenuTab'

class List extends Component {
  constructor() {
    super();

    this.state = {
      tasksDoServidor: [
        { 'title': 'Primeira Tarefa', '_id': '1', 'completed': false },
        { 'title': 'Segunda Tarefa', '_id': '2', 'completed': true }
      ]
    }
  }

  render() {
    const { tasksDoServidor } = this.state;

    return (
      <div>
        <MenuTab tasks={tasksDoServidor} />
        <div className="is-task-list">
          <div>
            <Task />
          </div>
        </div>
      </div>
    )
  }
}

export default List;