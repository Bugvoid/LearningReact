import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Components
import Task from './list/Task';
import MenuTab from './list/MenuTab'

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

class List extends Component {

  render() {
    const { tasks } = this.props;

    return (
      <div>
        <MenuTab />
        <div className="is-task-list">
          <Fragment>
            {tasks.map(task => (
              <Task task={task} key={task._id} />
            ))}
          </Fragment>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(List);