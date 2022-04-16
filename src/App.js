import './App.css';
import Tachometer from './tachometer';
import BPSpeedometer from './BPspeedometer';
import BTSpeedometer from './BTspeedometer';
import MPHSpeedometer from './MPHspeedometer';
import axios from 'axios';
import React, { Component, } from 'react';
import IMDimage from './dashboardIcons/IMDindicator.png';
import BSPDimage from './dashboardIcons/BSPDindicator.png';
import AMSimage from './dashboardIcons/AMSindicator.png';

// IMPORTANT: faults can't be displayed until either dummy JSON or LoggerS car data is passed to them

class App extends Component{
  state={
    persons:[],
    showHideAMS: false,
    showHideIMD: false,
    showHideBSPD: false,
  }
 
  getData=()=>{
    axios.get('https://mocki.io/v1/b771bbea-0568-4fc9-bf06-1a0c9470cca1').then(res => {
    console.log(res);
    this.setState({ persons: res.data });
    });
  }
  
  componentDidMount(){
    this.getData();
    // the values update every 100 milliseconds. It's temporarily set to a large number
    this.interval = setInterval(this.getData, 10000000000);
    

    // below are fault conditionals:
    /* if(showHideAMS==true){
          return <AMSIndicator />
     }
     if(showHideIMD==true){
          return <IMDIndicator />
     }
     if(showHideBSPD==true){
          return <BSPDIndicator />
     } 
*/
    }
  
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
    <div className="App">
      <div className="dials">
      
      <Tachometer
        id="dial1"
        value={this.state.persons.map(person => (person.id))}
        /* onChange={(e) => this.setState({ persons: e.currentTarget.value })}
           only works for inputs, so it wouldn't work with this gauge */
        title="RPM"
        title2="x1000"
        />
        
        <MPHSpeedometer 
        id="dial2"
        value={10}
        title="MPH"
        />

        <BTSpeedometer
        id="dial3"
        value={205}
        title="BATTERY TEMP"
        />

        <BTSpeedometer
        id="dial4"
        value={225}
        title="ENGINE TEMP"
        />

        <BPSpeedometer
        id="dial5"
        value={88}
        title="BATTERY"
        />

        <img src={BSPDimage} alt="BSPD indicator"/>
        <img src={IMDimage} alt="IMD indicator"/>
        <img src={AMSimage} alt="AMS indicator"/>
        
    </div>
    </div>
  );
}
}
/* useEffect needs to be outside of the class because hooks don't work
inside classes. If ditching the class completely, then useState and
useEffect both need to be called inside function App() */

export default App;




