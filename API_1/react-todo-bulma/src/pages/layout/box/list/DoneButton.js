import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { updateTask } from '../../../../actions/taskActions'


// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Task from './Task';

const mapDispatchToProps = dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task))
  }
}


const DoneButton = ({task,updateTask}) => {
  const changeCompletedAtribute = (event,task) => {
    event.preventDefault();

    task.completed = !task.completed
    updateTask(task)
  }

  return (
    <Fragment>
      <span className="icon is-primary">
        <a onClick={(e) => changeCompletedAtribute(e,task)}>
          <FontAwesomeIcon icon={
            ['far', task.completed ? 'check-circle' : 'circle']} />
        </a>
      </span>
    </Fragment>
  );
};

export default connect(null, mapDispatchToProps)(DoneButton);