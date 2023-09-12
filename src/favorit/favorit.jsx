// import axios from "axios"
// import react, { useEffect } from "react"
// import { useParams } from "react-router-dom"
// import AxiosInst from "../axiosConfig/instance"
// import { useState } from "react"
// import { compose } from "@reduxjs/toolkit"

// const Favorite=propos=>{
//   const {id}=useParams()
//   const [movie,setMovie]=useState({})
//   const favMovies=[]
//   const list={
//     id:'',
//     url:'',
//     titile:''
//   }
//   useEffect(()=>{
//     const getMovie=async ()=>{
        
//         const response= await AxiosInst.get(`/movie/popular${id}`)
//         console.log(response);
//         setMovie(response)
        
//     }
//     getMovie()
//   },[id])
// list.id = movie.id
// list.url = movie.poster_path
// list.titile = movie.titile
// console.log('list',list)
// favMovies.push(list)
// console.log(favMovies)
//   return <>
//   <h1>favorit</h1>
//   </>
// }


// export default Favorite
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import { GoHeart } from "react-icons/go";
import AxiosInst from '../axiosConfig/instance';

const Favorite = () => {
  const [product, setProduct] = useState([]);
  var [favorites, setFavorites] = useState([]);
  const {id}=useParams()
  console.log(id)
//   var fav =product.filter(f =>
//     f.id === id
//     )
// console.log("product.filter", product)
console.log("favorites.filter", favorites)
  

  useEffect(() => {
    // Fetch the products from the API
    AxiosInst.get('/movie/popular')
      .then((response) => {

        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        const products = response.data.results.filter(item=> storedFavorites.includes(item.id));
        setProduct(products);

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    // Update local storage when favorites change
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (id) => {
    // // Check if the movie is already in favorites
    // const isFavorite = favorites.includes(id);

    // if (isFavorite) {
    //   // Remove the movie from favorites
    //   setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite !== id));
    // } else {
    //   // Add the movie to favorites
    //   setFavorites((prevFavorites) => [...prevFavorites, id]);
    // }
    let movies = product.filter(item => item.id != id)
    localStorage.setItem('favorites', JSON.stringify(movies.map(item => item.id)));

    setProduct(movies)
    console.log("textaya");
  };

  return (
    <div className='row container' style={{ width: '80%', margin: '0 auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      {product.map((prd) => {
        const isFavorite = favorites.includes(prd.id);
        console.log("favorite  id: " + id)
        

        return (
          <div className='col-3' key={prd.id}>
            <Card style={{ position: "relative " }}>
              <Card.Img variant='top' src={'https://image.tmdb.org/t/p/original//' + prd.poster_path} />
              <div className='heart'>
                <GoHeart
                  style={{ fontSize: "33px", color: isFavorite ? 'red' : 'gray' }}
                  onClick={() => { handleToggleFavorite(prd.id) }}
                />
              </div>
              <Card.Body>
                <Card.Title style={{ fontSize: '30px ' }}>Titile {prd.original_title}</Card.Title>
                <Card.Text>{prd.overview}</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item style={{ fontSize: '30px' }}>vote_average:{prd.vote_average}</ListGroup.Item>
                <ListGroup.Item style={{ fontSize: '30px' }}>release_date: {prd.release_date}</ListGroup.Item>
                <ListGroup.Item style={{ fontSize: '30px' }}>count: {prd.vote_count}</ListGroup.Item>
                <ListGroup.Item style={{ fontSize: '20px' }}>original_language: {prd.original_language}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                {/* <Card.Link style={{ fontSize: '30px',textDecorationLine:"none" }} onClick={() => { handelnavigation(prd.id); }}>
                  go to details
                </Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;