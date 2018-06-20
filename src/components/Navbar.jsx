import React, {Component} from 'react';
import '../css/navbar.css'
import {Link} from 'react-router-dom';

class Navi extends Component {

    render() {
        return (
            <div className="navv">              
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/home">
                        ANDREW KIM
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="custom-toggler navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup">
                        <div className="navbarNav">
                            <Link className="nav-item navlinks" to='/home'>
                                HOME
                            </Link>
                            <Link className="nav-item navlinks" to='/projects'>
                                PROJECTS
                            </Link>
                            <Link className="nav-item navlinks" to='/skills'>
                                SKILLS
                            </Link>
                            <Link className="nav-item navlinks" to='/photos'>
                                Photos
                            </Link>
                            {/* <a className="nav-item navlinks" href='contact'>
                                CONTACT
                            </a> */}
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}
export default Navi;

// ... look up negative route
// https://stackoverflow.com/questions/38717770/twitter-bootstrap-navbar-hover-effect-transition-border-expand-from-center?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa