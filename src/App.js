import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from 'react-responsive-nav';
import { Navbar } from 'react-responsive-nav';
import Body from './Body';
import './styles.css';

const primaryDropdown = {
  title: 'Products',
  links: [
    {
      link: <Link to="/payments">Payments</Link>,
      text: 'A complete payments plaform engineered for growth.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <a href="https://www.google.com">Google</a>,
      text: 'A complete payments plaform engineered for growth.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <Link to="/payments">Payments</Link>,
      text: 'A complete payments plaform engineered for growth.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <a href="https://www.google.com">Google</a>,
      text: 'Your business data at your fingertips.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <Link to="/payments">Payments</Link>,
      text: 'Your business data at your fingertips.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <a href="https://www.google.com">Google</a>,
      text: 'Your business data at your fingertips.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <Link to="/payments">Payments</Link>,
      text: 'Your business data at your fingertips.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    },
    {
      link: <a href="https://www.google.com">Google</a>,
      text: 'Your business data at your fingertips.',
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/dribbble.svg',
      color: '#fff'
    }
  ],
  footerLink: {
    link: <Link to="/works-with">Works With Stripe</Link>,
    icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/bill.svg'
  }
};

const columnDropdown = {
  title: 'Developers',
  primaryLink: {
    subtitle: "Start integrating Stripe's products and tools.",
    link: <Link to="/documentation">Documentation</Link>,
    icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/document.svg'
  },
  firstColumn: {
    title: 'Get Started',
    links: [
      <Link to="/get-started">Get Started</Link>,
      <Link to="/get-started">Get Started</Link>,
      <Link to="/get-started">Get Started</Link>,
      <Link to="/get-started">Get Started</Link>
    ]
  },
  secondColumn: {
    title: 'Popular Topics',
    links: [
      <Link to="/apple">Apple Pay</Link>,
      <Link to="/apple">Apple Pay</Link>,
      <Link to="/apple">Apple Pay</Link>,
      <Link to="/apple">Apple Pay</Link>
    ]
  },
  footerLinks: [
    {
      link: <Link to="/full-api">Full API Reference</Link>,
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/search-alt.svg'
    },
    {
      link: <Link to="/full-api">Full API Reference</Link>,
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/search-alt.svg'
    },
    {
      link: <Link to="/full-api">Full API Reference</Link>,
      icon: 'https://unicons.iconscout.com/release/v1.0.0/svg/search-alt.svg'
    }
  ]
};
const links = [<Link to="/support">Support</Link>];
const authLink = <Link to="/signin">Sign In &rarr;</Link>;
const mobileLinks = [
  <Link to="/pricing">Pricing</Link>,
  <Link to="/pricing">Works With Stripe</Link>,
  <Link to="/pricing">Partner Program</Link>,
  <Link to="/pricing">Documentation</Link>,
  <Link to="/pricing">About Stripe</Link>,
  <Link to="/pricing">Jobs</Link>,
  <Link to="/pricing">Newsroom</Link>,
  <Link to="/pricing">Blog</Link>
];

function App() {
  return (
    <>
      <Navbar
        debug
        duration={200}
        logo="Example"
        primaryDropdown={primaryDropdown}
        columnDropdown={columnDropdown}
        links={links}
        authLink={authLink}
        mobileLinks={mobileLinks}
      />
      <Body />
    </>
  );
}

export default App;
