import { useState } from 'react';
import axios from 'axios';
import cookies from 'nookies';
import CustomInput from './../components/customInput/CustomInput';
import { useRouter } from 'next/router';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = signinInfo;

    if (!email || !password) {
      setError('Email or Password are required fields');
      return;
    }

    try {
      const res = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signin',
        { ...signinInfo }
      );

      cookies.set(null, 'token', res.data.token, {
        path: '/',
      });

      router.replace('/[country]', '/us');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = e => {
    setSigninInfo({
      ...signinInfo,
      [e.target.name]: e.target.value,
    });
  };

  const renderError = () => {
    return error && <div className="error">{error}</div>;
  };

  return (
    <div className="signin">
      {renderError()}
      <h3>Sign In</h3>
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
