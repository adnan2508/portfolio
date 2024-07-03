import React from 'react';
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral footer-center text-neutral-content rounded p-10">
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.linkedin.com/in/md-adnan-shiragee/'>
      <FaLinkedin size={30} />
      </a>
      <a href='https://github.com/adnan2508'>
      <FaGithub size={30} />
      </a>
      <a href='https://x.com/AdnanShiragee'>
      <FaSquareXTwitter size={30} />
      </a>
      <a href='https://www.facebook.com/profile.php?id=61561913450158'>
      <FaFacebook size={30} />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Adnan Shiragee</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;