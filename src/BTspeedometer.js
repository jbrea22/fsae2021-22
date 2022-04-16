import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const styles = {
    dial: {
    display: "inline-block",
    // So far, I've had success by putting negative margin on BT speedometer
    margin:'-62px',
    width: `300px`,
    height: `auto`,
    color: "#000",
    padding: "2px",
    position: "relative",
    top: "-31px",

  },
  title: {
    fontSize: ".7em",
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    top: "-200px",
    left: "1px"
  }
};

const BTSpeedometer = ({ id, value, title}) => {
    return (
        <div style={styles.dial}>
          <ReactSpeedometer
            minValue={0}
            maxValue={200}
            value={value}
            width={150}
            needleHeightRatio={.73}
            needleColor="black"
            segments={10}
            maxSegmentLabels={0}
            ringWidth={30}
            startColor="yellow"
            endColor="orange"
            // eslint-disable-next-line
            currentValueText="${value}ºF"
          />
          <div style={styles.title}>{title}</div>
        </div>
      );
    };
    
export default BTSpeedometer;

/* Note: the file is named BTspeedometer.js, but
the speedometer object is named BTSpeedometer
The difference is the capital 'S' */ 

// BT = Battery Temp
