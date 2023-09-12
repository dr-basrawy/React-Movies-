
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increces,decreces ,increceAmount} from '../../store/slices/ccounter';

 function Home(){
const language=useSelector((state)=>state.language.language)

let counter= useSelector((state)=>state.counter.counter)
 let dispatch= useDispatch()

    return <>
    
    
    <div style={{height:"100vw",background:"gray"}}> 
        <h1>Hello  freom  home </h1>
        <h1>{language} </h1>
        <h1>counter {counter} </h1>
        <button className='btn btn-info me-5' onClick={()=>dispatch(increces())}>+</button>
        <button className='btn btn-info me-5' onClick={()=>dispatch(decreces())}>-</button>
        <button className='btn btn-info' onClick={()=>dispatch(increceAmount(10))}>amount</button>
    </div>
    
    </>
}

export default Home;