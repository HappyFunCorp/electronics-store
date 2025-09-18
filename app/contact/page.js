import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>Have questions? We&apos;d love to hear from you. Reach out to us through any of the methods below.</p>
      <ul>
        <li><strong>Email:</strong> support@electrostore.com</li>
        <li><strong>Phone:</strong> +91-120-555-0123</li>
        <li><strong>Address:</strong> 123 Tech Lane, Ghaziabad, UP</li>
      </ul>
    </div>
  );
}