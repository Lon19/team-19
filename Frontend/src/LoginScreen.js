import React from 'react';
import {Redirect} from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.scss';

export default function Login() {
    
    return (
        <div className="Main">
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" />
                </Form.Group>
                <Button variant="primary" type="submit">Log In</Button>
            </Form>
        </div>
    );
}
