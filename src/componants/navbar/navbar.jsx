import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPinFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import "./nav.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><BsFillPinFill />Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link> */}
            {/* <Link style={{padding:"10px",margin:"10px",textDecoration:"none"}} to={"/"}>Home</Link>
            <Link style={{padding:"10px",margin:"10px",textDecoration:"none"}} to={"/aboutus"}>AboutUS</Link>
            <Link style={{padding:"10px",margin:"10px",textDecoration:"none"}} to={"/product"}>Product</Link>
            <Link style={{padding:"10px",margin:"10px",textDecoration:"none"}} to={"/login"}>LOgin</Link> */}
            <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" }} to={"/home"}>Home</NavLink>
            <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" }} to={"/aboutus"}>AboutUS</NavLink>
            <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" }} to={"/product"}>Product</NavLink>
            <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" }} to={"/login"}>LOgin</NavLink>
            <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" }} to={"/Favorite"}>Favorite</NavLink>
            <NavLink style={{ padding: "10px", margin: "10px", textDecoration: "none" }} to={"/trinding"}>TrindingMovies</NavLink>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;