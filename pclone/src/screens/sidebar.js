import React, {useState} from 'react'
import logo from '../ui/c1ed3d2.png'
import { AiFillHome } from "react-icons/ai";
import "../css/App.css";

function Sidebar() {

    const [nav, setNav] = useState([
        {label: "Home" , slug: "/", icon: "icon-home"},
        {label: "Discover" , slug: "discover", icon: "icon-"},
        {label: "Categories" , slug: "categories", icon: "icon-"},
        {label: "My Courses" , slug: "my-courses", icon: "icon-"}

    ])

    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];

    for(let i = 0; i<nav.length; i++){
        navigation.push( 
        <li key={"nav-" + i + "-" + nav[i].slug}>
            <a href={nav[i].slug} className={"link noul flex color" + (currentPage == nav[i].slug ? " on" : "")}>
                {/* MOON ICONS GO HERE*/}
                {/* <div size={28} className={"ico " + nav[i].icon }/>  */}
                <h2 className='lbl fontSize2'>{nav[i].label}</h2>

            </a>
        </li>
        )
    }
    return (
        <div className='sidebar fixed'>
            <a href='#' className='logo bl'>
                <img src={logo} className="bl"/>
            </a>

            <ul className='nav'>
               
               {navigation}

            </ul>

            <div className='updated-course'>
            {/* MOON ICONS GO HERE*/}

                <div className='lbl fontSize color'>
                    Updated Courses
                    <h2 className='author color fontSize'>by Maanas</h2>

                </div>

            </div>
        </div>
      
    )
}

export default Sidebar
