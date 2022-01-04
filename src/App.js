import React, {Component} from 'react';
import button from './components/button';

class App extends Component {
  constructor(props){
    super(props);



    this.state = {
      current: '',
      previous: []
    }
  }
  render(){
    const buttons = [
      
    ];
    return (
      <div className="App">
        <input className = "result" type = "text" value = {this.state.current} />
        

      </div>
    );
  }
}

export default App;
