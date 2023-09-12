
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {changLanguage} from"../../store/slices/language"
function AboutUS() {

    const language=useSelector((state)=>state.language.language)
    const dispath=useDispatch()
    const toggleLanguage=()=>{
        dispath(changLanguage((language=='en')?'ar':'en'))
  }

    

    return <>
     
     <div style={{height:"100vw",background:"gray"}}> 
        <h1>Hello  freom  About us </h1>
        <h1>
            {language}
        </h1>
        <button className="btn btn-primary" onClick={()=>{toggleLanguage()}}>change language</button>

    </div>
    </>
}
export default AboutUS