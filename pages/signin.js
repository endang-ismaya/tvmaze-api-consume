import { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
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
        <input
          name="email"
          placeholder="Enter email"
          type="email"
          value={signinInfo.email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Enter password"
          type="password"
          onChange={handleChange}
          value={signinInfo.password}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
