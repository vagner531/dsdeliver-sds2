import './style.css';
import { ReactComponent as YouTube } from './youtube.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Instagram} from './instagram.svg';

function Footer() {
  return(
    <footer className="main-footer">
      DS Delivery
      <div className="footer-icons">
        <a href="youtube"target="_new">
          <YouTube />
        </a>
        <a href="linkedin" target="_new">
          <Linkedin />
        </a>
        <a href="instagram" target="_new">
          <Instagram />
        </a>
      </div>
    </footer>
  )
}
export default Footer;