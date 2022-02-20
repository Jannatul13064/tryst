import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className='cols col-md-6 col-lg-6 col-sm-12'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me for 14 days" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <button type="button" class="btn btn-outline-danger btn-sm my-4 ">Forgot Password?</button><br />
                    <button type="button" class="btn btn-outline-danger btn-sm ">Did'nt received Confirmation instructions ?</button>
                </div>
                <div className='cols col-md-6 col-lg-6 col-sm-12'>
                    <h2>Sign Up</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt voluptatibus ullam ipsum, quos aperiam quod, error reprehenderit facilis excepturi eius minus quidem earum sapiente natus ut explicabo vitae aliquam exercitationem voluptas sequi nam odio libero! Hic laboriosam aspernatur in rerum velit itaque, eaque eveniet laborum debitis, quisquam inventore ex!</p>

                    <div>
                        <button type="button" class="btn btn-danger my-3 p-4">I am a Provider</button><br />
                        <button type="button" class="btn btn-danger p-4 rounded">I am a Client</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;