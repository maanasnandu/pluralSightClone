import React, {useState} from 'react'
import logo from '../ui/c1ed3d2.png'
import { AiFillHome } from "react-icons/ai";
import "../css/App.css";
import "../css/props.css";

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
            <a href={nav[i].slug} className={"link noul flex color fontSize" + (currentPage == nav[i].slug ? " on" : "")}>
                {/* MOON ICONS GO HERE*/}
                {/* <div size={28} className={"ico " + nav[i].icon }/>  */}
                <h2 className='lbl fontSize2'>{nav[i].label}</h2>

            </a>
        </li>
        )
    }
    return (
        <div className='sidebar rel'>
            <a href='#' className='logo bl'>
                <img src={logo} className="bl"/>
            </a>

            <ul className='nav'>
               
               {navigation}

            </ul>

            <div className='updated-course flex'>
            {/* MOON ICONS GO HERE*/}

                <div className='lbl fontSize color'>
                    Updated Courses
                    <h2 className='author color fontSize'>by ABC</h2>

                </div>

            </div>

            <div className='stats flex'>
                <div className='stats-box flex'>
                    
                    <h2 className='val color fontSize'>1500</h2>
                    <h2 className='lbl color fontSize'>points</h2>

                </div>

                <div className='stats-box flex'>
                    
                    <h2 className='val color fontSize'>50%</h2>
                    <h2 className='lbl color fontSize'>completed</h2>

                </div>

            </div>

            <div className='me flex'>
        
                <div className='photo fontSize color'>
        
                    <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" className='blk'/>

                </div>

                <div className='lbl fontSize color'>
                    Maanas Muddam
                    <h2 className='uname fontSize color'>@maanasm8</h2>
                </div>

            </div>
        </div>
      
    )
}

export default Sidebar
