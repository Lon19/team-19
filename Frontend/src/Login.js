import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.scss';

export default function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div className="Main">
            <Form action={login}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" />
                </Form.Group>
                <Button variant="primary" type="submit">Log In</Button>
            </Form>
        </div>
    );
}