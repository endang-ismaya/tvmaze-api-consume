import { useState } from 'react';
import axios from 'axios';
import CustomInput from './../components/customInput/CustomInput';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await axios.post(
      'https://iwallet-api.herokuapp.com/api/auth/signin',
      { ...signinInfo }
    );

    console.log(res);
  };

  const handleChange = e => {
    setSigninInfo({
      ...signinInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="email"
          type="email"
          placeholder="Enter email"
          value={signinInfo.email}
          onChange={handleChange}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Enter password"
          value={signinInfo.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
