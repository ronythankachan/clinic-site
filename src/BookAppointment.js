import React from 'react';
import './BookAppointment.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useFormik} from 'formik'

const validate = values =>{
    const errors={}
    if(!values.date){
        errors.date = 'Required field'
    }
    if(!values.firstName){
        errors.firstName = 'Required field'
    }else if(values.firstName.length <3){
        errors.firstName = 'First Name should be atleast 3 characters long'
    }
    if(!values.phone){
        errors.phone = 'Required field'
    }
    if(!values.age){
        errors.age = 'Required field'
    }
    if(!values.address){
        errors.address = 'Required field'
    }
    return errors
}


const BookAppointment = () => {

    const formik = useFormik({
        initialValues:{
            date:'',
            firstName:'',
            lastName:'',
            phone:'',
            age:'',
            address:'',
            doctor:''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            formik.resetForm()
        }
    })

    return (
        <div className="bookappointment">
            <div className="bookappointment__heading">
                <h1>Book an appointment</h1>
                <ul>
                    <li> Get a confirmed visiting date</li>
                    <li> No waiting in queue</li>
                    <li> Get follow up updates on your appointment</li>
                </ul>

            </div>
            <div className="bookappointment__form">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Select Date *</Form.Label>
                        <Form.Control id="date" type="date" placeholder="Select date" name="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.date && formik.errors.date ? (<div className="error">{formik.errors.date}</div>) : null}
                    </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label> First Name *</Form.Label>
                                    <Form.Control id="firstName" type="text" placeholder="First Name" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.firstName && formik.errors.firstName ? (<div className="error">{formik.errors.firstName}</div>) : null}
                                </Col>
                                <Col>
                                    <Form.Label> Last Name</Form.Label>
                                    <Form.Control id="lastName" type="text" placeholder="Last Name" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Phone *</Form.Label>
                                    <Form.Control id="phone" type="number" placeholder="Phone Number" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.phone && formik.errors.phone ? (<div className="error">{formik.errors.phone}</div>) : null}
                                </Col>
                                <Col>
                                    <Form.Label>Age *</Form.Label>
                                    <Form.Control id="age" type="number" placeholder="Age" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.age && formik.errors.age ? (<div className="error">{formik.errors.age}</div>) : null}
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address *</Form.Label>
                            <Form.Control as="textarea" rows={3} id="address" placeholder="Address with ZIP Code" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.address && formik.errors.address ? (<div className="error">{formik.errors.address}</div>) : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Doctor</Form.Label>
                            <Form.Control as="select" name="doctor" value={formik.values.doctor} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option>Choose...</option>
                                <option>Dr.Leena</option>
                                <option>Dr.Rony</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" >Book appointment</Button>
                </Form>
            </div>
        </div>
    )
}

export default BookAppointment
