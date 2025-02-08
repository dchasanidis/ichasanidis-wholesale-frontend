import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div>
        <p>© {currentYear} Ioannis Chasanidis jewelry. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
