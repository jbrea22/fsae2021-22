import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const styles = {
    dial: {
    display: "inline-block",
    margin: '2px',
    width: `100px`,
    height: `auto`,
    color: "#000",
    padding: "2px",
    position: "relative",
    top: "-30px",

  },
  title: {
    fontSize: ".7em",
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    top: "-200px",
    left: "24px"
  }
};

const BPSpeedometer = ({ id, value, title}) => {
    return (
        <div style={styles.dial}>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={value}
            width={150}
            needleHeightRatio={.73}
            needleColor="black"
            segments={1}
            maxSegmentLabels={0}
            startColor="yellow"
            endColor="yellow"
            // eslint-disable-next-line
            currentValueText="${value}%"
          />
          <div style={styles.title}>{title}</div>
        </div>
      );
    };
    
    export default BPSpeedometer;

    /* Note: the file is named BPspeedometer.js, but
    the speedometer object is named BPSpeedometer
    The difference is the capital 'S' */ 

    // BP = Battery Power
