import './index.css'
import boom from'../Footer/footericons/boomplay.png'
import facebook from'../Footer/footericons/facebook.png'
import  logo from'../Footer/footericons/footerlogo.png'
import instagram from'../Footer/footericons/instagram.png'
import  twitters from'../Footer/footericons/twitters.png'
import youtube from'../Footer/footericons/youtube.png'




function Footer(){
    return(
        <>
        <div>
            <div className='footer'>
                <div> <img src={logo} alt='logo' className='logo'/></div>
                <div> 
                    <p> <b> About </b></p>
                    <p> Company </p>
                    <p> News</p>
                    <p> Investors</p>
                    <p> Sustainability</p>
                    
                </div>
                <div>
                <p> <b> Support</b></p>
                    <p>Contact Us </p>
                    <p>Products </p>
                    <p> Returns</p>
                    <p> Downloads</p>
                </div>
                <div> 
                <p> <b> Products</b></p>
                    <p> Blogs</p>
                    <p> Videos</p>
                    <p> Portfolio</p>
                    <p> Podcasts</p>
                </div>
                <div className='icons'> 
                   <span> <img src={twitters} alt='twitter '/></span> 
                   <span><img src={facebook} alt=' facebook'/> </span>
                   <span> <img src={instagram} alt=' instagram'/></span>
                   <span> <img src={youtube} alt=' you tube'/></span>
                   {/* <span><img src={boom} alt=' boomplay'/> </span> */}
    
                </div>
                <div/>
                <p className='update'> To get updates</p>
                   <input placeholder="Enter Email" />
                   <button> <a href='#'> Subscribe </a></button> 
                {/* <hr/> */}
                <p className='policy'> @ Magezi Geeks. Inc All Rights Reserved</p>
            </div>

            </div>

        </>
    );
};



export default Footer;