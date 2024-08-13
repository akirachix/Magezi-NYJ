import "./index.css"
import caseStudy from "../Assets/Group 30.png"
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div>
      
      <div className="Case-study">
        <div>
          <img src={caseStudy} alt="caseStudy" className="images"/>
          </div>
          <div className="case-study">
      <h3>
        Analyzing Dairy Value Chains in Rwanda
        
        To Design Relevant Digital Services in Rwanda
      </h3>
      
   
      <p>
        This research focuses on identifying the causes of low mobile money
        uptake among rural producers in Rwanda's tea and dairy value chains and
        proposing solutions to bridge this gap.
      </p>
      <h4>Findings</h4>
      <ol>
        <li>Limited Membership in Dairy Cooperatives </li>
        <li>
          Poor record keeping which causes challenges in determing accorate
          production assessments
        </li>
        <li>Poor access to financial services</li>
        <li>Cost-Benefit Analysis of Rwanda's Dairy Value Chains</li>
        <li>Increase of dairy production in Rwanda through digitization</li>
      </ol>
      <h4>Proposed Solutions</h4>
      <p>
        To address the comprehensive needs of SACCOs and their members, we are
        proposing the Suubi system, a cutting-edge SACCO Management application
        designed to streamline operations and enhance member engagement. The
        Suubi application is designed to be scalable, secure, and user-friendly,
        catering to the evolving needs of SACCOs and their members. Suubi system
        automates manual processes such as loan processing and account
        management. The system also allows members to access their accounts and
        perform transactions remotely. The Suubi system ensures compliance with
        industry standards and regulations ensuring the security and integrity
        of member data. The system ensures transparency by providing real-time
        data enabling SACCOs to make informed decisions and maintain
        accountability. By leveraging advanced technology, Suubi aims to
        transform the SACCO sector, promoting financial inclusivity, efficiency,
        and transparency. It has 2 products: A dashboard for the SACCO and an
        Android app for the farmers
      </p>
      <div id="btn">
      <button className="buttons"><Link to="/Blogs">Back</Link></button>
    </div>
    </div>
   
    </div>
    </div>
  );
};
export default CaseStudy;
