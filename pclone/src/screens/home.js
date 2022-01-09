import React, {useState} from 'react'
import "../css/props.css";
import "../css/App.css";

import Course2 from "../ui/wild.jpg";
import Course1 from "../ui/film-manifesto.jfif";
import Course3 from "../ui/archi.jfif";

function HomePage() {

    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Film-making basics",
            tutor: {
                ID: 1,
                name: "J.Hik",
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
                name: "A.Bcdef",
                username: "abcdef123",
                dp: "https://placeimg.com/50/50/animals?tutor-" + 2, 
            },
            duration: "16 min",
            poster: Course2
        },
        {
            ID: 3,
            title: "Intro to Architecture",
            tutor: {
                ID: 3,
                name: "M.Nopqr",
                username: "mnopqr",
                dp: "https://placeimg.com/50/50/animals?tutor-" + 3, 
            },
            duration: "40 min",
            poster: Course3
        }
    ])

    const [topTutors, setTopTutorList] = useState([
        {
                ID: 1,
                name: "Tutor 1",
                username: "abc123",
                dp: "https://placeimg.com/50/50/animals?tutor-" + 4, 
           
        },
        {
            ID: 2,
            name: "Tutor 2",
            username: "abc4567",
            dp: "https://placeimg.com/50/50/animals?tutor-" + 5, 
       
        },
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

    var topTutorList= [];

    for(let i = 0; i<topTutors.length; i++){
        topTutorList.push(

            <a href='#' className='user-block rel noul' key={"top-tutors-" + i}>

                    <div className='user aic flex'>
                        <div className='pic'>
                            <img src={topTutors[i].dp} className='bl'/>
                        </div>
                        <div className='meta rel'>
                            <h2 className='fontSize name color'>{topTutors[i].name}</h2>
                            <h2 className='fontSize uname color'>@{topTutors[i].username}</h2>
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

             {/* Top Tutors/Courses */}
             <div className='section rel'>
                <h2 className='title fontSize2'>Top Tutors</h2>

                <div className='top-tutors rel flex'>
                    {topTutorList}
                </div>
            </div>
            
        </div>
    )
}

export default HomePage
