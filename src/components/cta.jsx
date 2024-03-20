import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <footer className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together
      </p>
      <Link to="/contact" className="btn capitalize">
        contact
      </Link>
    </footer>
  );
};

export default CTA;
