import styles from "./FooterSection.module.css";

function FooterSection() {
  const today = new Date();

  return (
    <footer className={styles.footer}>
      <p>&copy; {today.getFullYear()} Tatiana. All rights reserved.</p>
    </footer>
  );
}

export default FooterSection;
