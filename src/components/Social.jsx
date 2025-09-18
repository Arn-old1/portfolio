
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./Socials.module.css";

export default function Socials() {
  return (
    <div className={styles.socials}>
       <div className="contact-badge">
            <span className="contact-dot"></span>
            FOLLOW ME
          </div>
      <a href="https://www.linkedin.com/in/kirabo-Arnold" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Arn-old1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/@Giftarnold5" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com/iamgiftarnold1" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.tiktok.com/@iamgiftarnold1" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
    </div>
  );
}