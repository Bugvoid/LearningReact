import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


//compoments
import List from './List';
import Form from './Form';

const Box = () => {
  return (
    <div className="box">
      <BrowerRouter>
        <switch>
          <Route exact path='/' component={List}/>
          <Route exact path='/create' component={Form}/>
          <Route exact path='/update/:id' component={Form} />
        </switch>
      </BrowerRouter>
    </div>
  );
};

export default Box;