import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { FaStarOfLife } from "react-icons/fa";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [name,setName] = useState("")
  const [mobileNum, setMobileNum] = useState("")
  const [password, setPassword] = useState("")
  const [mail, setMail] = useState("");
  const [companyName, setCompanyName] = useState("")
  const [radio, setRadio] = useState('')
  const result = name !== "" && mobileNum !=="" && password!=="" && mail !=="" && radio !== "";
  return (
    <div className="sign-up-container"> 
      <div className="form-main-container">
        <h1>Create your PopX account</h1>
        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Full Name <FaStarOfLife className="star"/></label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input-field"
              onChange = {(event) => {setName(event.target.value)}}
              value = {name}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Phone Number <FaStarOfLife className="star"/></label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="input-field"
              onChange={(event) => {setMobileNum(event.target.value)}}
              value = {mobileNum}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Email <FaStarOfLife className="star"/></label>
            <input
              type="email"
              placeholder="Enter email address"
              className="input-field"
              onChange={(event) => {setMail(event.target.value)}}
              value = {mail}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Password <FaStarOfLife className="star"/></label>
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
              onChange={(event) => {setPassword(event.target.value)}}
              value = {password}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Company name</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="input-field"
              onChange={(event) => {setCompanyName(event.target.value)}}
              value = {companyName}
            />
          </div>
          <div className="radio-main-container">
            <p>Are you an agency?  <FaStarOfLife className="star"/></p>
            <div className="radio-group">
              <label className="radio-container">
                Yes
                <input type="radio" name="choice" value="yes" onChange={() => {setRadio('yes')}}/>
                <span className="checkmark"></span>
              </label>

              <label className="radio-container">
                No
                <input type="radio" name="choice" value="no" onChange={() => {setRadio('no')}}/>
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className={`sign-up-btn ${result? 'active': 'inactive'}`} onClick={() => {navigate("/login-screen")}}>Create Account</button>
    </div>
  );
};
export default SignUp;
