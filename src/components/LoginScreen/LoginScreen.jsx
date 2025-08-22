
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginScreen.css'; 

const LoginScreen = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => { //use to navigate when button is clicked
    toast.success('Registration successful! Please login.');
    navigate('/Profile');
  };

  const isFormValid = email !== '' && password!== ''; //form validation

  return (
    <div className="signin-container">
      <ToastContainer className="toast-position" />
      <div className="signin-box">
        <h1 className="signin-heading">Signin to your PopX account</h1>
        <p className="signin-subtext">
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
        </p>

        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`signin-button ${isFormValid ? 'active' : 'disabled'}`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
