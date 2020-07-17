import React from 'react';
import clock from './images/clock.png';
import { Container } from 'react-bootstrap';
class Clock extends React.Component{
    render(){
        return(
                <Container>
                <img src={clock} alt="Clock" className="img-responsive clock-img"/>
                </Container>
        );
    }
}
export default Clock;