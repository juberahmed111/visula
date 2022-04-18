import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
        <div className='blog-cotnianer'>
            <div className='quest-contianer'>
                <h1>What other services does firebase provide other than authentication</h1>
                <div>
                    <h5>By: <span className='name-blog'>Alex Harry</span> <span className='date-blog'>Mar 23, 2022</span></h5>
                </div>
                <img src={'https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg'} alt="" />

            </div>
            <h2>Answer: </h2>  <p>Ofcourse! Firebase Provide more other thant authentication Like (<code> Cloud Firebase,Hosting,Storage,RealTime DataBase
                , Fuction, Development Tools,</code>)
            </p>
           <span className="fs-5 text-primary">Hosting:</span><span>Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. </span>
           <br />
           <span className="fs-5 text-primary">Firebase Storege:</span><span>firebase Storege means stored some thing like (vieo, img,text,information,chats, ) etc can sotred in firebase Storage,</span>
        </div>
        <div className='blog-cotnianer'>
            <div className='quest-contianer'>
                <h1>Difference between authorization and authentication</h1>
                <div>
                    <h5>By: <span className='name-blog'>Aman Datter Wala</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                </div>
             <img src={'www.facebook.cojm'} alt="" />

            </div>
            <h2>Answer: </h2>  
            <p>
          
           
           <br />
     
           <sapn className={'text-primary fs-3'}>Authentication:</sapn>:firebase authentication to know about your identity .  Firebase authentication is a service provided by firebase which helps you to build the user authentication system for mobile/web application. It comes with the basic lifecycle methods like Login, Logout, Signup, reset password etc.;
        <br />
        <span className="text-primary fs-3">Authorization</span> Displays an element as an inline-level block container. You CAN set height and width values.. It's essentially the same thing as inline, except that you can set height and width values.nline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not;  below top img there is exapme of inline-block element;
        <br />
           
            </p>
        </div>
    </div>
    );
};

export default Blogs;