import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
// import App from './App';
import CreateUserPage from './Components/CreateUserPage'
import Example from './Components/Example'
import hoge from './Components/hoge'

ReactDOM.render(
   <BrowserRouter>
    <Route exact path="/" component={CreateUserPage}></Route>
    <Route path="/example" component={Example}></Route>
    <Route path="/hoge" component={hoge}></Route>
   </BrowserRouter> 
, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA