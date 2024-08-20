import React from 'react'
import Carrousel from "./carrousel";
import Text from "./text";
import Card from "./card";
import Loader from "./loader";



const home = () => {
  return (
    <div>

        <div>
        <Carrousel/>
        </div>

        <div className="space">
        <Loader/>
        <Text/>
        <Loader/>
        </div>

        <div className="row">
        <div class='col'>
            <Card/> 
        </div >
        <div class='col'>
            <Card text1="asaddas"/>
        </div>
        <div class='col'>
            <Card/>
        </div>
        </div>

    </div>
  )
}

export default home