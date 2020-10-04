import React from 'react';
import './InputForm.css'
import {Button,Form,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class InputForm extends React.Component{
    render(){
        return(
            <div>
                <h2>Create New Rent</h2>
                <Container className="cont">
                    
                <Form>
                    
                    <Row>
                        <Col>
                    <Form.Group>
                        <Form.Label> Bike name</Form.Label>
                        <Form.Control type="text" placeholder="Example BMW ZT 4"></Form.Control>
                    </Form.Group>
                         </Col>
                         <Col>
                    <Form.Group controlId="Select">
                        <Form.Label>Bike type</Form.Label>
                        <Form.Control as="select">
                            <option>Road</option>
                            <option>Mountain</option>
                            <option>Children</option>
                            <option>Retro</option>
                            <option>Custom</option>
                        </Form.Control>
                     </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label> Rent price</Form.Label>
                        <Form.Control type="number" ></Form.Control>
                    </Form.Group>
                
                </Col>
                <Col>
                        <Button>Submit Rent</Button>
                </Col>
                 </Row>
                </Form>
                </Container>
            </div>
            
        )
    }
}



export default InputForm;