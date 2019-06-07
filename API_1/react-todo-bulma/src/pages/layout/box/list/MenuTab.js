import React from 'react';
import { connect } from 'react-redux';
import { filterCompletedTasks } from '../../../../actions/taskActions';

// Components
import Tab from './menuTab/Tab';

const mapStateToProps = state => {
  return { 
    tasks: state.tasks,
    filterCompleted:state.filterCompleted 
  }
};

const mapDispatchToprops = dispatch => {
  return{
    applyFilter: (active) => dispatch(filterCompletedTasks(active))
  }
}

const MenuTab = ({ tasks }) => {
  const numberOfCompletedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="tabs is-fullwidth has-text-weight-bold">
      <ul>
        <Tab
          text="Incomplete"
          quantity={(tasks.length - numberOfCompletedTasks)}
          className={filterCompleted ? '' : 'is-active'}
          onClick={() => applyFilter(false)}
        />

        <Tab
          text="Completed"
          quantity={numberOfCompletedTasks}
          className={''}
        />
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToprops)(MenuTab);