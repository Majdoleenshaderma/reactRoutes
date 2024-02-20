import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Card from 'react-bootstrap/Card';


class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{ width: '400px', border: `2px solid ${this.props.color}` }} >
                <Card.Img variant="top" src={this.props.src} />
                <Card.Body>
                    <Card.Title>{this.props.brand}</Card.Title>
                    <Card.Text>
                        {this.props.discription}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Car;