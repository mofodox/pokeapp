import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 py-3 mt-5 text-center text-white">
        <span>
          Designed & developed by{" "}
          <a
            className={styles.linkTextPrimary}
            href="https://mofodox.com"
            target={"_blank"}
          >
            Khairul Akmal
          </a>
          .
        </span>
      </div>
    </div>
  );
};

export default Footer;
