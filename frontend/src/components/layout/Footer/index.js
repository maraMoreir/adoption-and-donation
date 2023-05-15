import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <span>Adoção & Doação</span> &copy; 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer;