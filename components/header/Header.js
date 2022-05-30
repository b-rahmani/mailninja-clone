import mail from "../../assets/images/mail.png";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../styledComponents/styledComponents";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Image src={mail} alt="logo" />
        <span>NinjaMail</span>
      </div>
      <ul className="menu">
        <li>
          <Link href="/features">FEATURES</Link>
        </li>
        <li>
          <Link href="/pricing">PRICING</Link>
        </li>
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
        <li>
          <Link href="/partners">PARTNERS</Link>
        </li>
      </ul>
      <button className="signup"></button>
      <Button bg="red">sign up</Button>
    </div>
  );
};
export default Header;
