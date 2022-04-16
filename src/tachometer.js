import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const styles = {
    dial: {
    display: "inline-block",
    margin: '20px',
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px",
    position: "relative",
    top:"-20px",

  },
  title: {
    fontSize: "1em",
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    top: "-125px",
    left: "20px",
  },
  title2: {
    fontSize: ".7em",
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    top: "-125px",
    left: "20px",
  }
};

const Tachometer = ({ id, value, title, title2}) => {
    return (
        <div style={styles.dial}>
          <ReactSpeedometer
            minValue={0}
            maxValue={10}
            value={value}
            valueTextFontSize={'40px'}
            paddingHorizontal={20}
            paddingVertical={20}
            needleColor="black"
            needleHeightRatio={.87}
            segments={10}
            labelFontSize={'14px'}
            startColor="green"
            endColor="white"
          />
          <div style={styles.title}>{title}</div>
          <div style={styles.title2}>{title2}</div>
        </div>
      );
    };
    
export default Tachometer;

/* Note: the file is named tachometer.js, but
the speedometer object is named Tachometer. 
The difference is the capital 'T' */