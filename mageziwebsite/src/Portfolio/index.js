import './index.css'
import React from 'react';
import brendah from'../Portfolio/images/Brendah.png'
import gloria from'../Portfolio/images/Gloria.png'
import maureen from'../Portfolio/images/maureen.png'
import nakato from'../Portfolio/images/Nakato.png'
import valentine from'../Portfolio/images/valentine.png'
import work from '../Portfolio/images/whiteWork.png'
import creative from'../Portfolio/images/whitecreative.png'
import intelligent from'../Portfolio/images/whiteintelligent.png'
import line from '../Portfolio/images/line.png'


function Portfolio(){
    return(
        <>
        <div className='container'>
            <p className='portfolios'> <img src={line} className='line1'/>  Portfolios <img src={line} className='line2'/> </p>
            <p className='aboutus'> Learn more about us</p>
            <div className='cards'>
                <div className='brendah'>
                 <img src={brendah} alt='brendah' className='photo'/>
                 <p> Brendah Khamali</p>
                 
                 <div> <img src={creative} alt='create' className='create'/> <span> Creative</span> </div>
                    <div><img src={intelligent} alt='intelligent' className='intelligent'/> <span> Inteligent</span></div>
                     <div> <img src={work}alt='hardwork' className='work'/><span> Hardworking</span></div>
                 
                
                <button> <a href="https://brenda-s-porfolio.vercel.app/"> Portfolio</a></button>
                </div>

                <div className='valentine'>
                <img src={valentine} alt='valentine' className='photo'/>
                 <p> Valentine Nkatha</p>
                
                 <div> <img src={creative} alt='create' className='create'/> <span> Creative</span> </div>
                    <div><img src={intelligent} alt='intelligent' className='intelligent'/> <span> Inteligent</span></div>
                     <div> <img src={work}alt='hardwork' className='work'/><span> Hardworking</span></div>
                 
                     <button> <a href="https://portfolio-valentine.vercel.app/"> Portfolio </a></button>
                </div>

                <div className='maureen'>
                <img src={maureen} alt='maureen' className='photo'/>
                 <p> Maureen Gatweri</p>
                 
                 <div> <img src={creative} alt='create' className='create'/> <span> Creative</span> </div>
                    <div><img src={intelligent} alt='intelligent' className='intelligent'/> <span> Inteligent</span></div>
                     <div> <img src={work}alt='hardwork' className='work'/><span> Hardworking</span></div>
                 
                 
                     {/* <button> <a href='https://my-portfolio-xi-drab-30.vercel.app/'> Portfolio <a/> </button> */}
                     <button> <a href='https://my-portfolio-xi-drab-30.vercel.app/'> Portfolio </a></button>
                </div>

                <div className='gloria'>
                <img src={gloria} alt='gloria' className='photo'/>
                 <p> Gloria Nyaga</p>
                
                 <div> <img src={creative} alt='create' className='create'/> <span> Creative</span> </div>
                    <div><img src={intelligent} alt='intelligent' className='intelligent'/> <span> Inteligent</span></div>
                     <div> <img src={work}alt='hardwork' className='work'/><span> Hardworking</span></div>
                 
                 
                 <button> <a href=' https://glorias-portfolio.vercel.app/'> Portfolio </a> </button>
                </div>

                <div className='nakato'>
                <img src={nakato} alt='nakato' className='photo'/>
                 <p> Nakato Musana</p>
                 
                 <div> <img src={creative} alt='create' className='create'/> <span> Creative</span> </div>
                    <div><img src={intelligent} alt='intelligent' className='intelligent'/> <span> Inteligent</span></div>
                     <div> <img src={work}alt='hardwork' className='work'/><span> Hardworking</span></div>
                 
                
                 <button> <a href='http://127.0.0.1:5500/index.html'> Portfolio </a></button>   
                </div>
            </div>
        </div>
        </>
    );
};

export default Portfolio;


