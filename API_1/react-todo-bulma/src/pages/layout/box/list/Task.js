import React, { Component } from 'react';

import TextInput from '../../../../components/TextInput';
import DoneButton from './DoneButton';
import EditButton from './EditButton';

class Task extends Component {
  constructor(){
    super();

    this.state = {
      title:'',
    };
  }
componentDidMount(){
  const { task } = this.props;

  if(task){
    this.setState(task);
  }
}

  render() {
const { task } = this.props;

    return (
      <div className="box" key={task._id}>
        <div className="columns is-mobile">
          <div className="column is-1 is-centered">
            <DoneButton />
          </div>
          <div className="column is-9">
            <TextInput
            id={task._id} 
            name={'title'} 
            className="is-shadowless" 
            value={this.state.title}/>

          </div>

          <div className="column is-2 is-centered" >
            <EditButton _id = {task._id} />
          </div>
        </div>
      </div>
    )
  }
}

export default Task;