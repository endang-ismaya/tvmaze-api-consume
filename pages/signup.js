import { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'nookies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomInput from './../components/customInput/CustomInput';
import { validateEmail, validateRequired } from '../utils/validator';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState(initialState);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 3000);
  }, [error]);

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password, name } = signupInfo;

    if (
      !validateRequired(email) ||
      !validateRequired(password) ||
      !validateRequired(name)
    ) {
      setError('Please fill all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please provide a valid email address');
      return;
    }

    try {
      const res = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signin',
        { ...signupInfo }
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
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  };

  const renderError = () => {
    return error && <div className="error">{error}</div>;
  };

  return (
    <div className="signup">
      {renderError()}
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <CustomInput
          name="name"
          type="text"
          placeholder="Enter name"
          value={signupInfo.name}
          onChange={handleChange}
        />
        <CustomInput
          name="email"
          type="email"
          placeholder="Enter email"
          value={signupInfo.email}
          onChange={handleChange}
        />
        <CustomInput
          name="password"
          type="password"
          placeholder="Enter password"
          value={signupInfo.password}
          onChange={handleChange}
        />
        <input type="submit" value="Create Account" />
        <Link href="/signin">
          <a href="#!">Have an account?login ...</a>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
