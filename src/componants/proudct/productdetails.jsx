import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AxiosInst from '../../axiosConfig/instance.js';
import './productdetails.css'




 function ProductDetails(){

 const {id}=useParams()
 const [prd,setprd]=useState({})
 
 useEffect(function(){
    AxiosInst.get(`/movie/${id}`).then(function(response){
        
     console.log('back details',response.data);   
     setprd(response.data) 
 
 }).catch((error)=>{
    console.log(error);
 })
 },[])
 const productd = useNavigate()
 const handelnavigation = () => {
     productd(-1)
 }



    return <>
    
    
    <div style={{background:"pink"}}> 
        <h1>Hello  freom  ProductDetails <span>{id}</span>  </h1>
    </div>
    <div className='col-6 zz' style={{ margin:"0 auto",textAlign:"center" }} >
        <Card style={{ width:"700px"}} >
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original//'+prd.poster_path} className='imgd' style={{ width:"400px",display:"block"}}/>
                        <Card.Body>
                            <Card.Title  >{prd.original_title}</Card.Title>
                            <Card.Text>
                                {prd.Body}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item style={{ fontSize:"40px" }}>overview: {prd.overview}</ListGroup.Item>
                            <ListGroup.Item style={{ fontSize:"40px" }}>release_date {prd.release_date}</ListGroup.Item>
                            <ListGroup.Item style={{ fontSize:"25px" }}>status: {prd.status}</ListGroup.Item>
                            <ListGroup.Item style={{ fontSize:"25px" }}>vote_average: {prd.vote_average}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link style={{ fontSize:"40px",textDecorationLine:"none" }} onClick={()=>{handelnavigation()}}>to all product</Card.Link>
                        </Card.Body>
                    </Card>

        </div>
    
    </>
}

export default ProductDetails;