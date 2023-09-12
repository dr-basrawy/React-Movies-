
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink, useLoaderData, Link, useNavigate } from 'react-router-dom';
import AxiosInst from '../../axiosConfig/instance.js';
import ReactPaginate from 'react-paginate';
import './product.css'
import { useEffect, useState } from 'react';
import { GoHeart } from "react-icons/go";
import { useSelector } from 'react-redux';

const ListProducts = () => {


    var [favorites, setFavorites] = useState([]);
    useEffect(() => {
        // Load favorites from local storage on component mount
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
        setTimeout(() => {
            setbox(results)
        }, 1000);
        // let obj = useLoaderData();
        // console.log('teeeeeeeeeeeeeeest',obj)
        // setMovies(useLoaderData())
    }, []);

    // const productd = useNavigate();
    // const [product, setProduct] = useState([]);
    // const [currentPage, setCurrentPage] = useState(0);
    // const itemsPerPage = 4;

    // useEffect(() => {
    //     AxiosInst.get('/movie/popular')
    //         .then((response) => {
    //             setProduct(response.data.results);
    //             console.log(response.data.results);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);



    // const startIndex = currentPage * itemsPerPage; //2*4=8 indexes   4 to 8 
    // console.log('startindex', startIndex)
    // const endIndex = startIndex + itemsPerPage;
    // console.log('endIndex', endIndex)

    // const subset = product.slice(startIndex, endIndex);
    // console.log('subset', subset)
    //      const navpro=useNavigate()
    // const handelnavigation = (id) => {
    //     console.log('id from list',id);

    //     navpro('/productdetails/' + id);
    // };
    let { page, total_pages, results, total_results } = useLoaderData();  //{page: number, results: [], total_pages: number, total_results: number}
    //{page: number, results: [], total_pages: number, total_results: number}
    console.log('from loader data', results)
    let [box, setbox] = useState([]);
        //    setbox=results

    const handelid = (id) => {
        let localArr = JSON.parse(localStorage.getItem('favorites'));
        if (localArr.includes(id)) {
            localArr = [...localArr.filter(item => item !== id)]
        } else {
            localArr = [...localArr, id]
        }
        localStorage.setItem('favorites', JSON.stringify(localArr))
        setFavorites(localArr)
    }
    const handlePageChange = (selectedPage) => {                   //back object contain ,lenth
        getPopMovies((selectedPage.selected + 1));

        // setCurrentPage(selectedPage.selected);
        // console.log('selected page', selectedPage)
    };

    const getPopMovies = async (page) => {
        try {
           
            const result = await AxiosInst.get(`/movie/popular?page=${page}`);
            console.log('BE response: ',result.data);
            setbox(result.data.results);
            console.log('results: ', results);
            console.log(page);
            // setbox=results
            console.log('booooooox',box);
        
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h3>Total Movies: {total_results}</h3>
            <div className='row container' style={{ width: '80%', margin: '0 auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                {box.map((prd) => {
                    const isFavorite = favorites.includes(prd.id);

                    return (

                        <div className='col-2' key={prd.id}>
                            <Card style={{ position: "relative " }}>
                                <Card.Img variant='top' src={'https://image.tmdb.org/t/p/original//' + prd.poster_path} />
                                <Link to={'#'} >

                                    <div className='heart'>< GoHeart style={{ fontSize: "33px", color: isFavorite ? 'red' : 'gray' }} onClick={() => { handelid(prd.id) }} /></div>
                                </Link>


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
            <div className='divpg'>
                <ReactPaginate
                    pageCount={total_pages}
                    onPageChange={handlePageChange}
                    forcePage={page - 1}          // override selected page 
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </>
    )

}
export const loader = async () => {
    try {
        // let page=1
        const movies = await AxiosInst.get('/movie/popular?page=1')
        //  return product.data.page
        console.log('Check this BE response', movies.data);
        
        return movies.data
    } catch (err) {
        console.error(err)

    }


    // AxiosInst.get('/movie/popular')
    //     .then((response) => {
    //      return   response.data.results
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
};



export default ListProducts