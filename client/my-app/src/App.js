
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
export default  class Clock extends React.Component {
  constructor(props) {
    super(props);
   this.state= {date: new Date(), country: "South Africa"};

  }
  
  //when the component has loaded
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
  	
    return (
      <div>
        <h1>Hello, {this.state.country}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


root.render(<Clock />);