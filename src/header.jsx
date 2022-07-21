import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router,Routes,Route,NavLink, Link} from "react-router-dom";
import App from './App';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import Profile from './components/profile';
import Writepost from './components/writepost';


class header extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand>
                                 <NavLink style={({isActive})=>(isActive ? {color:'orange'} : {color:'blue'})}  to="/">React example</NavLink>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link >
                                        <NavLink style={({isActive})=>(isActive ? {color:'orange'} : {color:'blue'})} to="/about">About us</NavLink>
                                    </Nav.Link>

                                    <Nav.Link >
                                        <NavLink style={({isActive})=>(isActive ? {color:'orange'} : {color:'blue'})} to="/contact">Contact us</NavLink>
                                    </Nav.Link>

                                    <Nav.Link >
                                        <NavLink style={({isActive})=>(isActive ? {color:'orange'} : {color:'blue'})} to="/blog">Blog</NavLink>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <NavLink style={({isActive})=>(isActive ? {color:'orange'} : {color:'blue'})} to="/profile">Profile</NavLink>
                                    </Nav.Link>
                                
                                    <Nav.Link href="#" disabled>
                                    Link
                                    </Nav.Link>
                                </Nav>
                            
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <Routes>
                    <Route exact path="/writepost" element={ < Writepost/>} />
                    <Route exact path="/" element={ <App />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/profile" element={<Profile/>} />
                </Routes>

            </Router>
        )
    }
}

export default header
