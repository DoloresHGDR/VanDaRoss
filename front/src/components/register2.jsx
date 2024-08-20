import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function Register() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    };

    const handleRegister = async (values) => {
        console.log('Valores desde el front', values);
        try {
            const response = await axios.post('http://localhost:5000/auth/register', values);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleRegister}
        >
            <Form>
                <div className="login-box">
                    <div className="user-box">
                        <Field className="inputL" placeholder="" type="text" name="name" required />
                        <label className="labelL" htmlFor="name">Username</label>
                    </div>
                    <div className="user-box">
                        <Field className="inputL" placeholder="" type="text" name="email" required />
                        <label className="labelL" htmlFor="email">Email</label>
                    </div>
                    <div className="user-box">
                        <Field className="inputL" placeholder="" type="password" name="password" required />
                        <label className="labelL" htmlFor="password">Password</label>
                    </div>
                    <div className="user-box">
                        <Field className="inputL" placeholder="" type="password" name="confirmpassword" required />
                        <label className="labelL" htmlFor="confirmpassword">Confirm Password</label>
                    </div>
                    <center>
                        <button className="btn btn-link btn-floating btn-lg neon-icon m-1 submit aL" type="submit">
                            Register
                            <span className="spanL"></span>
                        </button>
                    </center>
                </div>
            </Form>
        </Formik>
    );
}

export default Register;
