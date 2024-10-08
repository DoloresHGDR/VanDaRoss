import React from 'react';
import {navigate, useNavigate} from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Register() {

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    }; 

    const {setUser} = useContext(UserContext);

    const handleRegister = async (values) => {
        console.log('Valores desde el front', values);
        try {
            const response = await axios.post('http://localhost:5000/auth/register', values);
            console.log(response.data);

            const {role} = response.data
            console.log('role',role)

            setUser ({
                logged: true,
                role: role
            })
            navigate('/panel')

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
                            <label className="labelL" For="name">Username</label>
                        </div>
                        <div className="user-box">
                            <Field className="inputL" placeholder="" type="text" name="email" required />
                            <label className="labelL" For="email">Email</label>
                        </div>
                        <div className="user-box">
                            <Field className="inputL" placeholder="" type="password" name="password" required />
                            <label className="labelL" For="password">Password</label>
                        </div>
                        <div className="user-box">
                            <Field className="inputL" placeholder="" type="password" name="confirmpassword" required />
                            <label className="labelL" For="confirmpassword">Confirm Password</label>
                        </div>
                        <center>
                            <button className="btn btn-floating btn-lg neon-icon m-1 submit aL" type='' onClick={handleRegister}>submit</button>
                        </center>
                    </div>
                </Form>
            
        </Formik>
    );
}

export default Register;




