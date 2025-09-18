import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>About ElectroStore</h1>
      <p>
        Founded in 2025, ElectroStore has been the leading provider of the latest and greatest in consumer electronics. Our mission is to provide top-quality products with unparalleled customer service.
      </p>
      <p>
        We believe in innovation, quality, and putting the customer first. Thank you for choosing us for your electronic needs.
      </p>
    </div>
  );
}