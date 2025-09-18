import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <Image
        src={product.images[0]}
        alt={product.name}
        width={300}
        height={300}
        className={styles.image}
      />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </Link>
  );
}