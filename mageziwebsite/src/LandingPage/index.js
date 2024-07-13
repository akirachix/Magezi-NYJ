import './index.css';
import girl from '../Images/girl.png';
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { GrSpotify } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Landingpage = () =>{
    return(
        
    <body>
        <div id="feature">
            <div id="landingpage-info">
                <div>
                    <p id="landingpage-text">
                        Get to listen to your favourite 
                        <span className='highlight'> Podcast</span>, watch informartive 
                        <span className='highlight'> Videos </span>
                         and read our inspiring 
                        <span className='highlight'> Blogs </span>
                    </p>

                    <button id="btn">Get Started</button>
                </div>


                <div>
                    <img id= "girlpic" src ={girl} alt= "girl-photo"/>
                </div>


            </div>
            <div>
                 
                <div id= "icons">

                <div>
                    <FaTwitter size={43}/>
                </div>

                <div>
                    <RiInstagramFill  size={40}/>
                </div>

                <div>
                    <GrSpotify size={40}/>
                </div>

                <div>
                    <FaFacebook  size={40}/>
                </div>

                <div>
                    <FaYoutube  size={43}/>
                </div>

            </div>

            </div>


        </div>

    </body>    
    );
};

  
export default Landingpage;