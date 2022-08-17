import React, {useState} from "react";
import './about.style.css'

function About() {
  const [info, setInfo] = useState(
[{branchId:1, name: "Head office branch", city: "Islamabad", number:125523},
{branchId:2, name: "Liberty branch", city: "Lahore", number:5468454},
{branchId:3, name: "Clifton branch", city: "karachi", number:12235488},
{branchId:1, name: "Gulberg", city: "Mianwali", number:178542}
]    
  )
  return (
    
    <div className="aboutBody">
      <h3> Passion Reborn at TCB</h3>
      <ul>
        <li>We started our journet in 1980</li>
        <li>
          Fortified with years of banking expertise and driven by the strategic
          goals set out by our board of directors and senior management, the
          bank has invested in revolutionary technology to have an extensive
          range of products and services. This facilitates our commitment to
          repay the trust and confidence of our stakeholders, and also to a
          culture of innovation.
        </li>

        <li>
          TCB has emerged as one of the foremost financial institutions in the
          country
        </li>
        <li>Our customers means the most to us </li>

        <li>TCB has over 300 branches all over Pakistan</li>

        <li>Governance of TCB has standards of excellency</li>
      </ul>
      <h2>Branches details</h2>
      <table className="myTableStyle">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>City</td>
            <td>Contact Info</td>
          </tr>
          {
          info.map(iobj => 
            <tr key={1}>
              <td>{iobj.branchId}</td>
              <td>{iobj.name}</td>
              <td>{iobj.city}</td>
              <td>{iobj.number}</td>
            </tr>

          )
        }
        </tbody>
      </table>
      <ul>
        
      </ul>
    </div>
  );
}

export default About;
