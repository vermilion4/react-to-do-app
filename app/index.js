import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {SignUp} from './components/signup';
import {SignIn} from './components/signin';
import {AddTask} from './components/addtask';
import {Delete} from './components/delete';


ReactDOM.render(<SignIn />, document.getElementById('app'));