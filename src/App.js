import React from 'react';
import { Navbar } from "react-responsive-nav";
import Body from "./Body";
import "./styles.css";


const primaryDropdown = {
  title: "Products",
  links: [{ title: "Payments", url: "/payments", icon: "www.jpg", color: "#fff" }],
  footerLink: {title: "Works With Stripe", url:"/works-with", icon: "https://unicons.iconscout.com/release/v1.0.0/svg/bill.svg"}
}

const columnDropdown = {
    title: "Developers",
    primaryLink: {
      title: "Documentation",
      subtitle: "Start integrating Stripe's products and tools.",
      url: "/documentation",
      icon: "https://unicons.iconscout.com/release/v1.0.0/svg/document.svg"
    },
    firstColumn: {
      title: "Get Started",
      links: [{title: "Elements", url: "/elements"}]
    },
    secondColumn: {
      title: "Popular Topics",
      links: [{title: "Apple Pay", url: "/apple"}]
    },
    footerLinks: [
      { title: "Full API Reference", url: "/fullApi", icon: "https://unicons.iconscout.com/release/v1.0.0/svg/search-alt.svg" }
    ]
}
const links = [{
  title: "Support",
  url: "/support"
}]
const authLink = {
  title: "Sign In",
  url: "/signin"
 }

 const mobileLinks= [{
  title: "Pricing",
  url: "/pricing"
}]
function App() {
  return (
    <>
      <Navbar 
      logo="Example" 
      primaryDropdown={primaryDropdown} 
      columnDropdown={columnDropdown} 
      links={links}
      authLink={authLink} 
      mobileLinks={mobileLinks} />
      <Body />
    </>
  );
}


export default App;
