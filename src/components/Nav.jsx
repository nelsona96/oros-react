import "../styles/nav.css";
import { FaInstagram } from "react-icons/fa";

export default function Nav() {
  return (
    <nav>
      <div class="row nav__row">
        <div class="nav__logo--wrapper">
          <span class="logo__text">OROS</span>
        </div>
        <div class="nav__links">
          <a
            href="https://www.instagram.com/oros_pro/?igsh=MWZpaGRlZmhvbDNrYQ%3D%3D#"
            target="_blank"
            class="nav__link insta"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
