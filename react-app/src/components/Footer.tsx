import "./Footer.css";

interface FooterProp {
  footerInput: string;
}

function Footer({ footerInput }: FooterProp) {
  return (
    <div className="divFooter">
      <footer>
        <p className="footerP">&copy;{footerInput}</p>
      </footer>
    </div>
  );
}

export default Footer;
