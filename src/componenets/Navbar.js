import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    componentDidMount() {
        const sideNav = document.querySelectorAll('.sidenav');
        const options = {
            edge: 'right'
        }
        M.Sidenav.init(sideNav, options);
    }

    render() {

        return (
            <div>
                <nav className="white ">
                    <div className="nav-wrapper ">
                        {/* Full Words Logo */}
                        <a href="/" className="brand-logo center hide-on-med-and-down KaiserText "><span className="KaiserText "> Kaiser Permanente </span></a>
                        {/* Sidenav toggle */}
                        <a data-target="Main-Menu" className="KaiserText sidenav-trigger right show-on-medium-and-up">
                            <i className="material-icons">menu</i>
                        </a>
                        {/* Logo Img jumps to center on <= Tablet */}
                        <ul className="brand-logo hide-on-small-only">
                            <li><Link to="/"><img src="img/NavLogo.png" height="60" className="p1-pt3" /></Link></li>
                        </ul>
                        {/* Logo Img resizes for Mobile */}
                        <ul className="brand-logo center hide-on-med-and-up">
                            <li><Link to="/"><img src="img/NavLogo.png" height="50" className="p1-pt3" /></Link></li>
                        </ul>
                    </div>
                    {/* Sidenav Display */}
                    <div className="right">
                        <ul className="sidenav right" id="Main-Menu">
                            <li><Link to="/"><i className=" material-icons left">people</i>Items</Link></li>
                            <li><Link to="/items-add"><i className="material-icons left">add_box</i>Add Item</Link></li>
                            <li><Link to="/items-remove"><i className="material-icons left">add_box</i>Remove Item</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;