import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';


const HomePage = () => {
  return (
    <div> 
      <h1>HOME PAGE </h1> 
    </div>
  );
};

const TopicList = () => {
  return (
    <div>
      <h1>TOPIC LIST</h1>
    </div>
  );
};

const TopicDetail = () => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  )
}



export default App;
