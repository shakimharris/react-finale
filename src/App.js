import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


const HomePage = (props) => {
  console.log(props);
  return (
    <div> 
      <button onClick={() => props.history.push('/topics')}>Topics</button>
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

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE {props.match.params.topicId} </h1>
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
