import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {getAllTasks} from '../../../actions/taskActions';

// Components
import Task from './list/Task';
import MenuTab from './list/MenuTab'
import { create } from 'domain';

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTasks: () => dispatch(getAllTasks())
  }
}

class List extends Component {

  render() {
    const { tasks } = this.props;
    let taskListComponent = '';

    if(!getAllTasks.length){
      taskListComponent =
      <Fragment>
        <div className="box">
          <h1>There's no task created</h1>
        </div>
      </Fragment>
    }else{
      taskListComponent =
      <Fragment>
        {tasks.map(task => (
          <Task task = {task} key={task._id} />
        ))}
      </Fragment>
    }

    return (
      <div>
        <createButton />
        <MenuTab />
        <div className="is-task-list">
          {taskListComponent}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);