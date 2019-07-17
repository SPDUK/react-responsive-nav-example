import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  ContentGroup,
  PrimaryDropdown,
  IconDropdown,
  ColumnDropdown
} from 'react-responsive-nav';
import Body from './Body';
import './styles.css';

const primaryDropdown = {
  title: 'Products',
  links: [
    {
      link: <Link to="/elixir">Elixir</Link>,
      text: 'A complete payments plaform engineered for growth.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556303055/Portfolio/logo-elixir.svg',
      color: 'rgb(103, 114, 229)'
    },
    {
      link: <a href="https://www.mongodb.com/">MongoDB</a>,
      text: 'A complete payments plaform engineered for growth.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302711/Portfolio/mongodb-original.svg',
      color: 'rgb(36, 180, 126)'
    },
    {
      link: <Link to="/react">React</Link>,
      text: 'A complete payments plaform engineered for growth.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302728/Portfolio/react-original.svg',
      color: 'rgb(50, 151, 211);'
    },
    {
      link: <a href="https://www.heroku.com/">Heroku</a>,
      text: 'Your business data at your fingertips.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302631/Portfolio/heroku-original.svg',
      color: 'rgb(103, 114, 229)'
    },
    {
      link: <Link to="/html">HTML</Link>,
      text: 'Your business data at your fingertips.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302614/Portfolio/html5-original.svg',
      color: 'rgb(241,101,41)'
    },
    {
      link: <a href="https://redux.js.org/introduction/getting-started">Redux</a>,
      text: 'Your business data at your fingertips.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556304989/Portfolio/redux-original.svg',
      color: 'rgb(183, 106, 196)'
    },
    {
      link: <Link to="/ruby">Ruby</Link>,
      text: 'Your business data at your fingertips.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302738/Portfolio/ruby-original.svg',
      color: 'rgb(201,49,31)'
    },
    {
      link: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>,
      text: 'Your business data at your fingertips.',
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302682/Portfolio/javascript-original.svg',
      color: 'rgb(240,219,79)'
    }
  ],
  footerLink: {
    link: <Link to="/webpack">WEBPACK IS COOL TOO</Link>,
    icon:
      'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
  }
};

const columnDropdown = {
  title: 'Developers',
  color: 'rgb(131,205,41)',
  primaryLink: {
    subtitle: "Start integrating Stripe's products and tools.",
    link: <Link to="/node">Node.js</Link>,
    icon:
      'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg'
  },
  firstColumn: {
    title: 'Get Started',
    links: [
      <Link to="/get-started1">Get Started</Link>,
      <Link to="/get-started2">Get Started</Link>,
      <Link to="/get-started3">Get Started</Link>,
      <Link to="/get-started4">Get Started</Link>
    ]
  },
  secondColumn: {
    title: 'Popular Topics',
    links: [
      <Link to="/apple1">Apple Pay</Link>,
      <Link to="/apple2">Apple Pay</Link>,
      <Link to="/apple3">Apple Pay</Link>,
      <Link to="/apple4">Apple Pay</Link>
    ]
  },
  footerLinks: [
    {
      link: <Link to="/full-api1">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg'
    },
    {
      link: <Link to="/full-api2">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg'
    },
    {
      link: <Link to="/full-api3">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302721/Portfolio/nodejs-original.svg'
    }
  ]
};

const iconDropdown = {
  title: 'Company',
  color: 'rgb(50, 151, 211);',
  links: [
    {
      link: <Link to="/full-api1">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
    },
    {
      link: <Link to="/full-api2">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
    },
    {
      link: <Link to="/full-api3">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
    },
    {
      link: <Link to="/full-api4">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
    },
    {
      link: <Link to="/full-api5">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
    },
    {
      link: <Link to="/full-api6">Full API Reference</Link>,
      icon:
        'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
    }
  ],
  footerTitle: {
    link: <Link to="/blog">FROM THE BLOG</Link>,
    icon:
      'https://res.cloudinary.com/dmjolhdaq/image/upload/v1556302786/Portfolio/webpack-original.svg'
  },
  footerLinks: [
    <Link to="/apple1">A new and improved onboarding flow for Everyone</Link>,
    <Link to="/apple2">A new and improved onboarding flow for Everyone</Link>,
    <Link to="/apple3">A new and improved onboarding flow for Everyone</Link>
  ]
};

const authLinks = [
  <Link to="/signin">Sign In &rarr;</Link>,
  <Link to="/signup">Sign Up &rarr;</Link>
];
const mobileLinks = [
  <Link to="/pricing1">Pricing1</Link>,
  <Link to="/pricing2">Works With Stripe</Link>,
  <Link to="/pricing3">Partner Program</Link>,
  <Link to="/pricing4">Documentation</Link>,
  <Link to="/pricing5">About Stripe</Link>,
  <Link to="/pricing6">Jobs</Link>,
  <Link to="/pricing7">Newsroom</Link>,
  <Link to="/pricing8">Blog</Link>
];

function App() {
  return (
    <>
      <Navbar
        // debug
        duration={200}
        logo="Example"
        columnWidth="120"
        primaryDropdown={primaryDropdown}
        mobileFooterLinks={authLinks}
        mobileLinks={mobileLinks}
        breakpoint={900}
      >
        <ContentGroup title={primaryDropdown.title} height="630" width="495">
          <PrimaryDropdown primaryDropdown={primaryDropdown} />
        </ContentGroup>
        <ContentGroup title={columnDropdown.title} height="408" width="440">
          <ColumnDropdown columnDropdown={columnDropdown} />
        </ContentGroup>
        <ContentGroup title={iconDropdown.title} height="442" width="420">
          <IconDropdown iconDropdown={iconDropdown} />
        </ContentGroup>
        <ContentGroup title="Sign In" height="200" width="350">
          <ul>
            <li>Create custom sign in form here</li>
            <li>Add a link to sign up here</li>
          </ul>
        </ContentGroup>
      </Navbar>
      <Body />
    </>
  );
}

export default App;
