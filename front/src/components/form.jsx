import React, {useState} from 'react';

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        newLocation(city);
    }

  return (

    <div className='container mt-5 ' style={{maxWidth:'400px', textAlign:'center'}}>
        <form onSubmit={onSubmit}>
            <div className='input-group mb-3 mx-auto'>
                <input type='text' className='form-control text-center ' placeholder='Ciudad' onChange={(e) =>setCity(e.target.value)}/>
                <button className='input-group-text btn-sm' type='submit'><img src="../img/pngwing.com.png"alt="search" /></button> 
            </div>
        </form>

    </div>
  );
}

export default Form;