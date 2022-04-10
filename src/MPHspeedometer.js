import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const styles = {
    dial: {
    display: "inline-block",
    margin: '20px',
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: ".5px solid #fff",
    padding: "2px"
  },
  title: {
    fontSize: "1em",
    color: "#000",
    fontWeight: "bold",
  }
};

const MPHSpeedometer = ({ id, value, title}) => {
    return (
        <div style={styles.dial}>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={value}
            valueTextFontSize={'40px'}
            paddingHorizontal={20}
            paddingVertical={20}
            needleColor="black"
            needleHeightRatio={.87}
            segments={10}
            startColor="darkgreen"
            endColor="yellow"
          />
          <div style={styles.title}>{title}</div>
        </div>
      );
    };
    
    export default MPHSpeedometer;

    /* Note: the file is named MPHspeedometer.js, but
    the speedometer object is named MPHSpeedometer. 
    The difference is the capital 'S' */ 
