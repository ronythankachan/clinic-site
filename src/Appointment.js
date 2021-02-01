import React from 'react'
import './Appointment.css'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

const Appointment = ({data}) => {
    return (
        <Card>
        <Card.Body >
        <Card.Title>{data.first_name+" "+data.last_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem className="list_item">
                <p style={{fontWeight:"bold"}}>Name:&nbsp;</p>
                <p>{data.first_name+" "+data.last_name}</p>
            </ListGroupItem>
            <ListGroupItem className="list_item">
                <p style={{fontWeight:"bold"}}>Age:&nbsp;</p>
                <p>{data.age}</p>
            </ListGroupItem>
            <ListGroupItem className="list_item">
                <p style={{fontWeight:"bold"}}>Phone:&nbsp;</p>
                <p>{data.phone}</p>
            </ListGroupItem>
            <ListGroupItem className="list_item">
                <p style={{fontWeight:"bold"}}>Address:&nbsp;</p>
                <p>{data.address}</p>
            </ListGroupItem>
        </ListGroup>
        <Card.Footer>
            <small className="text-muted">Doctor: {data.doctor}</small>
        </Card.Footer>
        </Card>
    )
}

export default Appointment