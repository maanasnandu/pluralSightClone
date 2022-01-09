import React, {useState} from 'react'
import "../css/props.css";
import "../css/App.css";

import Course2 from "../ui/wild.jpg";
import Course1 from "../ui/film-manifesto.jfif";

function HomePage() {

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Film-making basics",
            tutor: {
                ID: 1,
                name: "Blah blah",
                username: "blah1234",
                dp: "https://placeimg.com/50/50/animals?tutor-" + 1, 
            },
            duration: "20 min",
            poster: Course1
        },
        {
            ID: 2,
            title: "Wildlife conservation",
            tutor: {
                ID: 2,
                name: "Abcd efgh man",
                username: "abcdef123",
                dp: "https://placeimg.com/50/50/animals?tutor-" + 1, 
            },
            duration: "16 min",
            poster: Course2
        }
    ])

    var tutorList= [];
    

    for(let i = 0; i<10; i++){
        tutorList.push(
            <button className='tutor rel2' key={"tutor-live-" + i}>

                <img src={"https://placeimg.com/50/50/animals?" + i} className='bl'/>

            </button>
        )
    }

    var courseList = [];

    for(let i = 0; i<popularCourse.length; i++){
        courseList.push(
            <a href='#' className='popular-course' key={"popular-course-" + i}>

                <div className='block' style={{background: "url(" + popularCourse[i].poster +") no-repeat center"}}>
                    <div className='user abs flex'>
                        <div className='pic'>
                            <img src={popularCourse[i].tutor.dp} className='bl'/>
                        </div>
                        <div className='meta rel'>
                            <h2 className='fontSize name color2'>{popularCourse[i].tutor.name}</h2>
                            <h2 className='fontSize uname color2'>@{popularCourse[i].tutor.username}</h2>


                        </div>
                    </div>

                    <div className='dura abs'>

                        <h2 className='name'>{popularCourse[i].duration}</h2>

                    </div>

                    <div className='course-title abs'>

                        <h2 className='name'>{popularCourse[i].title}</h2>

                    </div>
                </div>

            </a>
        )
    }

    return (
        <div className='home-page rel'>
            {/* Tutors Online */}
            <div className='section rel'>
                <h2 className='title fontSize2'>Tutors Online</h2>

                <div className='tutors rel flex'>
                    {tutorList}
                </div>
            </div>

             {/* Trending Courses */}
             <div className='section section-b rel'>
                <h2 className='title fontSize2'>Trending Courses</h2>

                <div className='courses rel flex'>
                    {courseList}
                </div>
            </div>
            
        </div>
    )
}

export default HomePage
