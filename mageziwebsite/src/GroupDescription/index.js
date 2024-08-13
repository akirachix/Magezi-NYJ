import "./index.css";
import Maureen from "../Assets/gatweri.png";
import Nakato from "../Assets/nakato.png";
import Gloria from "../Assets/gloria.png";
import Valentine from "../Assets/valentine.png";
import Brenda from "../Assets/brenda.png";
import { Link } from "react-router-dom";

const GroupDescription = () => {
  return (
    <div>
      <div id="btn">
      <h4 id="heading">Magezi Group</h4>
      </div>
      <div className="group-section">
        <div className="description">
            <div>
          <img src={Maureen} alt="Maureen" className="image" />
          </div>
          <div className="bio">
          <h4 id="name">Maureen Gatweri</h4>
          <h5 id="profession">Software Developer</h5>
          <p>
            Maureen thrives on the challenge of unlocking insights from raw
            data. Transforming random data into actionable solutions drives her
            passion for data analysis. She believes exhaustively collected data
            can be used to discover new problems and provide innovative
            solutions. This is why she is dedicated to applying her data-driven
            expertise to tackle pressing societal matters. She is particularly
            interested in using data to understand student is strengths and
            weaknesses ultimately aiming to develop solutions that empower them
            to succeed. By finding out the strengths and weaknesses of students,
            teachers will get guidance on their instructional approach to meet
            the needs of their students better.
          </p>
          </div>
        </div>
        <div className="description">
          <div>
          <img src={Nakato} alt="Nakato" className="image" />
          </div>
          <div className="bio">
          <h4 id="name">Nakato Musana Zaina</h4>
          <h5 id="profession">Software Developer</h5>
          <p>
            Nakato thrives on the challenge of unlocking insights from raw
            data. Transforming random data into actionable solutions drives her
            passion for data analysis. She believes exhaustively collected data
            can be used to discover new problems and provide innovative
            solutions. This is why she is dedicated to applying her data-driven
            expertise to tackle pressing societal matters. She is particularly
            interested in using data to understand student is strengths and
            weaknesses ultimately aiming to develop solutions that empower them
            to succeed. By finding out the strengths and weaknesses of students,
            teachers will get guidance on their instructional approach to meet
            the needs of their students better.
          </p>
        </div>
        </div>
        <div className="description">
          <div>
          <img src={Gloria} alt="Gloria" className="image" />
          </div>
          <div className="bio">
          <h4 id="name">Gloria Nyaga</h4>
          <h5 id="profession">Software Developer</h5>
          <p>
            Gloria thrives on the challenge of unlocking insights from raw
            data. Transforming random data into actionable solutions drives her
            passion for data analysis. She believes exhaustively collected data
            can be used to discover new problems and provide innovative
            solutions. This is why she is dedicated to applying her data-driven
            expertise to tackle pressing societal matters. She is particularly
            interested in using data to understand student is strengths and
            weaknesses ultimately aiming to develop solutions that empower them
            to succeed. By finding out the strengths and weaknesses of students,
            teachers will get guidance on their instructional approach to meet
            the needs of their students better.
          </p>
        </div>
        </div>

        <div className="description">
          <div>
          <img src={Valentine} alt="Valentine" className="image" />
          </div>
          <div className="bio">
          <h4 id="name">Valentine Nkatha</h4>
          <h5 id="profession">Software Developer</h5>
          <p>
            Valentine thrives on the challenge of unlocking insights from raw
            data. Transforming random data into actionable solutions drives her
            passion for data analysis. She believes exhaustively collected data
            can be used to discover new problems and provide innovative
            solutions. This is why she is dedicated to applying her data-driven
            expertise to tackle pressing societal matters. She is particularly
            interested in using data to understand student is strengths and
            weaknesses ultimately aiming to develop solutions that empower them
            to succeed. By finding out the strengths and weaknesses of students,
            teachers will get guidance on their instructional approach to meet
            the needs of their students better.
          </p>
        </div>
        </div>
        <div className="description">
          <div>
          <img src={Brenda} alt="Brenda" className="image" />
          </div>
          <div className="bio">
          <h4 id="name">Brenda Khamali</h4>
          <h5 id="profession">Software Developer</h5>
          <p>
            Brenda thrives on the challenge of unlocking insights from raw
            data. Transforming random data into actionable solutions drives her
            passion for data analysis. She believes exhaustively collected data
            can be used to discover new problems and provide innovative
            solutions. This is why she is dedicated to applying her data-driven
            expertise to tackle pressing societal matters. She is particularly
            interested in using data to understand student is strengths and
            weaknesses ultimately aiming to develop solutions that empower them
            to succeed. By finding out the strengths and weaknesses of students,
            teachers will get guidance on their instructional approach to meet
            the needs of their students better.
          </p>
          <div id="btn">
          <button className="buttons"><Link to="/Blogs">Back</Link></button>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default GroupDescription;
