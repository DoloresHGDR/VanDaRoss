import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';


function Login() {

  const navigate = useNavigate();

  const initialValues = {
    email:'',
    password:''
  }

  const {setUser} = useContext(UserContext);

  const handleForm = async(values) => {
    try {
      const response = await axios.post('https://localhost:5000/auth/login', values)
      console.log(response.data)

      const {role} = response.data
      console.log(response.data)

      setUser({
        logged:true,
        role:role
      })
      navigate('/panel')
    } catch(error) {
      console.log(error)
      console.log('estoy en catch')
    }
  }
  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={handleForm}
    >
        <Form>
        <div class="login-box">
        <form className='formL'>
            <div class="user-box">
                <Field class='inputL' placeholder='' type="text" name="name" required=""/>
                <label className='labelL'>Username</label>
            </div>
            <div class="user-box">
                <Field class='inputL' placeholder='' type="password" name="password" required=""/>
                <label className='labelL'>Password</label>
            </div>
            <center>
            <a className="btn btn-link btn-floating btn-lg neon-icon m-1 submit aL">
                    Log in
                <span className='spanL'></span>
            </a></center>
        </form>
        </div>
        </Form>
    </Formik>
  )
}

export default Login;