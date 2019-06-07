import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../../../actions/taskActions';
import TextInput from '../../../../components/TextInput';
import DoneButton from './DoneButton';
import EditButton from './EditButton';



const mapDispatchToProps = dispatch => {
  return {
    updateTask = task => dispatch(updateTask(task))
  }
}

class Task extends Component {
  constructor(){
    super();

    this.state = {
      title:'',
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleBlur = this.handleBlur.bind(this)
  }

componentDidMount(){
  const { task } = this.props;

  if(task){
    this.setState(task);
  }
}

handleChange(event){
  this.setState({
    title: event.target.value
  })
}

handleBlur(){
  const { task } = this.props

  if( task.title !== this.state.title){
    task.title = this.state.title;
    this.props.updateTask(task)
  }
}

  render() {
const { task } = this.props;

    return (
      <div className="box" key={task._id}>
        <div className="columns is-mobile">
          <div className="column is-1 is-centered">
            <DoneButton task={task}/>
          </div>
          <div className="column is-9">
            <TextInput
            id={task._id} 
            name={'title'} 
            className="is-shadowless" 
            value={this.state.title}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            />
          </div>
          <div className="column is-2 is-centered" >
            <EditButton _id = {task._id} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,mapDispatchToProps)(Task);