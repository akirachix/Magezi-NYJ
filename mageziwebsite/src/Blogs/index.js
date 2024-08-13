import "./index.css";
import book from "../Assets/Screenshot from 2024-07-09 11-09-18 1.png";
import { Link } from "react-router-dom";
import uber from "../Assets/Group 30.png";
import magezi from "../Assets/Group 31.png";

const Blogs = () => {
  return (
    <div className="blogs-section">
      <div className="line-text">{/* <h1 id="blogs">Blogs</h1> */}</div>
      <h1>Blogs</h1>
      <h4 id="Read">Read, get enlighted and learn</h4>
      <div className="blog-details">
        <div className="blogs">
          <div>
            <img src={book} alt="Trevor Noah" className="books" />
          </div>
          <div className="book-section">
            <h4>Born A Crime</h4>
            <p>
              A book on the life of Trevor Noah
              <br />
              outlines,family,apartheid,love,
              <br />
              abuse,poverty and strength
            </p>
          </div>
          <div>
            <button className="buttons-one">
              <Link to="/Blogstwo">Read More</Link>
            </button>
          </div>
        </div>

        <div className="blogs-one">
          <div>
            <img src={uber} alt="Trevor Noah" className="books" />
          </div>
          <div className="book-section">
            <h4> Dairy value chains in Rwanda</h4>
            <p>
              To design relevant digital services
              <br />
              among dairy farmers in Rwanda
            </p>
          </div>
          <div>
            <button className="buttons-two">
              <Link to="/CaseStudy">Read More</Link>
            </button>
          </div>
        </div>
        <div className="blogs-two">
          <div>
            <img src={magezi} alt="Magezi Group" className="books" />
          </div>
          <div className="book-section">
            <h4>A Description about Magezi</h4>
            <p>
              The name Magezi is inspired
              <br />
              by Luganda language from Uganda
              <br />
              which means wisdom
            </p>
          </div>
          <div>
            <button className="buttons-three">
              <Link to="/GroupDescription">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
