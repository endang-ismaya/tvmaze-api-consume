import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import Link from 'next/link';
import { isAuth } from './../../utils/withAuthorization';

const countries = [
  {
    label: 'us',
    name: 'United States',
  },
  {
    label: 'br',
    name: 'Brazil',
  },
  {
    label: 'ca',
    name: 'Canada',
  },
];

const Header = () => {
  const router = useRouter();

  const [country, setCountry] = useState(router.query.country);

  useEffect(() => {
    setCookie(null, 'defaultCountry', country, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }, [country]);

  const handleChange = e => {
    // push / redirect to choosen country
    router.push(`/[country]`, `/${e.target.value}`);
    setCountry(e.target.value);
  };

  const renderCountries = () => {
    return countries.map(country => (
      <option key={country.label} value={country.label}>
        {country.name}
      </option>
    ));
  };

  return (
    <div className="header">
      <select onChange={handleChange} value={country}>
        {renderCountries()}
      </select>
      {isAuth() ? (
        <Link href="/us">
          <a href="#!">Sign Out</a>
        </Link>
      ) : (
        <Link href="/signin">
          <a href="#!">Sign In</a>
        </Link>
      )}
    </div>
  );
};

export default Header;
