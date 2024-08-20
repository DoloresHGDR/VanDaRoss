import React from 'react'
import {Formik,Form,Field} from 'formik';
import axios from 'axios'

function login() {
    const initialValues = {
        name:'',
        password:''
    }
    const handleLogin = async (values) => {
        console.log('Valores desde el front',values)
        try {
            const response = await axios.post('http://localhost:5000/login',values)
            console.log(response.data);
        } catch (error){
            console.error(error)
        }
    }
  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={handleLogin}
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
            <a className="btn btn-link btn-floating btn-lg neon-icon m-1 submit aL" onClick={handleLogin}>
                    Log in
                <span className='spanL'></span>
            </a></center>
        </form>
        </div>
        </Form>
    </Formik>
  )
}

export default login