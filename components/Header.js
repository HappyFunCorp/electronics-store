import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          ElectroStore
        </Link>
        <Link href="/products" className={styles.navLink}>
          All Products
        </Link>
      </nav>
    </header>
  );
}