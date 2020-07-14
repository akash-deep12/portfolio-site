import React from 'react';
import clock from './images/clock.png';
class Clock extends React.Component{
    render(){
        return(
                <div className="clock-img">
                <img src={clock} alt="Clock" className="img-responsive clock-img"/>
                </div>
        );
    }
}
export default Clock;