import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addTask} from '../../../actions/taskActions'
import uuidv1 from 'uuid';

// Components
import Inputs from './form/Inputs';
import Buttons from './form/Button';


const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  }
};

class Form extends Component {
  constructor(){
    super()

    this.state = {
      _id: '',
      title: '',
      details: '',
      remember_me_date: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();

    this.state._id = uuidv1();

    this.props.createTask(this.state);

    this.setState({
      _id: '',
      title: '',
      details: '',
      remember_me_date: '',
    });
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  render() {
    return (
      <Fragment>
        <h1 className="title has-text-grey-dark">
          Create Task
                </h1>
        <form>
          <Inputs />
          <Buttons />
        </form>
      </Fragment>
    );
  }
}

export default Form;