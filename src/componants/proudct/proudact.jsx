// import { useNavigate } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet, NavLink } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Col, Row } from 'react-bootstrap';
// import AxiosInst from '../../axiosConfig/instance.js';
// import ReactPaginate from 'react-paginate';


// function ProductPg() {

//     // const productd = useNavigate();
//     const [productpg, setProduct] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//     const itemsPerPage = 5;




//     const productd = useNavigate()
//     const handelnavigation = (id) => {
//         console.log(id)
//         productd("/productdetails/" + id)
//     }


//     var [product, setproduct] = useState([])
//     useEffect(function () {
//         AxiosInst.get('/movie/popular').then((response) => {
//             setproduct(response.data.results)
//             console.log(response.data.results)

//         }).catch((error) => {
//             console.error(error)
//         });
//         // setTotalPages(Math.ceil(response.data.length / itemsPerPage));
//     },[])

//     // const startIndex = currentPage * itemsPerPage;
//     // const endIndex = startIndex + itemsPerPage;
//     // const subset = data.slice(startIndex, endIndex);

//     // const handlePageChange = (selectedPage) => {
//     //     setCurrentPage(selectedPage.selected);
//     // };

//     return <>


//         {/* <div style={{height:"100px",background:"gray"}}> 
//         <h1>hello  from  product </h1>
//         <h1>
//             <button className='btn btn-primary' onClick={()=>{handelnavigation()}}> go to ditalis</button>
//         </h1>
//         <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" ,fontSize:"33px",color:"white"}} to={"/product"}>Addproduct</NavLink>
//             <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none",fontSize:"33px",color:"white" }} to={"/product/update"}>updateproduct</NavLink>
//         <Outlet />
//     </div> */}
//         <div className='row container' style={{ width: "80%", margin: "0 auto", textAlign: "center", display: "flex", justifyContent: "center" }}>
//             {/* <div className=''> */}
//             {product.map((prd) => {
//                 return <div className='col-3' key={prd.id} >
//                     {/* <div className='col-4'> */}
//                     <Card style={{}} >
//                         <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original//'+prd.poster_path} />
//                         <Card.Body>
//                             <Card.Title style={{ fontSize: "30px" }} >Titile {prd.original_title}</Card.Title>
//                             <Card.Text>
//                                 {prd.overview}
//                             </Card.Text>
//                         </Card.Body>
//                         <ListGroup className="list-group-flush">
//                             <ListGroup.Item style={{ fontSize: "30px" }}> vote_average:{prd.vote_average}</ListGroup.Item>
//                             <ListGroup.Item style={{ fontSize: "30px" }}>release_date: {prd.release_date}</ListGroup.Item>
//                             <ListGroup.Item style={{ fontSize: "30px" }}>count: {prd.vote_count}</ListGroup.Item>
//                             <ListGroup.Item style={{ fontSize: "20px" }}>original_language: {prd.original_language}</ListGroup.Item>
//                             {/* <ListGroup.Item style={{ fontSize: "20px" }}><img src={'https://image.tmdb.org/t/p/original//'+prd.poster_path}  /> </ListGroup.Item> */}
//                         </ListGroup>
//                         <Card.Body>
//                             <Card.Link style={{ fontSize: "30px" }} onClick={() => { handelnavigation(prd.id) }}> go to ditalis</Card.Link>
//                         </Card.Body>
//                     </Card>
//                     {/* </div> */}
//                 </div>
//             })}

//             {/* </div> */}
//         </div>
//         {/* <div>
//             {subset.map((item) => (
//                 <div key={item.id}>{item.title}</div>
//             ))}
//             <ReactPaginate
//                 pageCount={totalPages}
//                 onPageChange={handlePageChange}
//                 forcePage={currentPage}
//             />
//         </div> */}





//     </>
// }
// export default Product



////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListProducts from './listproduct';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet, NavLink } from 'react-router-dom';
// import AxiosInst from '../../axiosConfig/instance.js';
// import ReactPaginate from 'react-paginate';
// import './product.css'
function Product() {
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

    // const handlePageChange = (selectedPage) => {                   //back object contain ,lenth
    //     setCurrentPage(selectedPage.selected);
    //     console.log('selected page', selectedPage)
    // };

    // const startIndex = currentPage * itemsPerPage; //2*4=8 indexes   4 to 8 
    // console.log('startindex', startIndex)
    // const endIndex = startIndex + itemsPerPage;
    // console.log('endIndex', endIndex)

    // const subset = product.slice(startIndex, endIndex);
    // console.log('subset', subset)


    // const handelnavigation = (id) => {
    //     console.log(id);
    //     productd('/productdetails/' + id);
    // };

    return (
        <>
            {/* <div className='row container' style={{ width: '80%', margin: '0 auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                {subset.map((prd) => {
                    return (
                        <div className='col-3' key={prd.id}>
                            <Card style={{}}>
                                <Card.Img variant='top' src={'https://image.tmdb.org/t/p/original//' + prd.poster_path} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px' }}>Titile {prd.original_title}</Card.Title>
                                    <Card.Text>{prd.overview}</Card.Text>
                                </Card.Body>
                                <ListGroup className='list-group-flush'>
                                    <ListGroup.Item style={{ fontSize: '30px' }}>vote_average:{prd.vote_average}</ListGroup.Item>
                                    <ListGroup.Item style={{ fontSize: '30px' }}>release_date: {prd.release_date}</ListGroup.Item>
                                    <ListGroup.Item style={{ fontSize: '30px' }}>count: {prd.vote_count}</ListGroup.Item>
                                    <ListGroup.Item style={{ fontSize: '20px' }}>original_language: {prd.original_language}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link style={{ fontSize: '30px',textDecorationLine:"none" }} onClick={() => { handelnavigation(prd.id); }}>
                                        go to details
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>
            <div className='divpg'>
                <ReactPaginate
                    pageCount={Math.ceil(product.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}          // override selected page 
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div> */}

            <div>
                <h1>product</h1>
                <Link  to='/product/list' className='fs-2 m-auto text-bg-info text-center'>List</Link>
                <Outlet/>
            </div>
        </>
    );
}

export default Product;