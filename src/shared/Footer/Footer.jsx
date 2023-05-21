import logo from "./../../assets/logo.jpg"

const Footer = () => {
  return (
    <footer className="footer p-10 bg-orange-900 text-base-content rounded">
  <div >
  <img className='rounded-full h-12 w-12'  src={logo}  />

    <p className="text-white">Super hero .<br/>Providing reliable tech since 1992</p>
  </div> 
  <div >
    <span className="footer-title text-white"> Toy Services </span> 
    <a className="link link-hover text-white"> Toy Branding</a> 
    <a className="link link-hover text-white"> Toy Design</a> 
    <a className="link link-hover text-white"> Toy Marketing</a> 
    <a className="link link-hover text-white"> Toy Advertisement</a>
  </div> 
  <div >
    <span className="footer-title text-white">Company</span> 
    <a className="link link-hover text-white">About us</a> 
    <a className="link link-hover text-white">Contact</a> 
    <a className="link link-hover text-white">Jobs</a> 
    <a className="link link-hover text-white">Press kit</a>
  </div> 
  <div >
    <span className="footer-title text-white">Legal</span> 
    <a className="link link-hover text-white">Terms of use</a> 
    <a className="link link-hover text-white">Privacy policy</a> 
    <a className="link link-hover text-white">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;