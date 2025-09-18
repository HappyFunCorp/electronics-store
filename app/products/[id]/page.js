import { products } from '@/data/products';
import Image from 'next/image';
import styles from './DetailPage.module.css';

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageGallery}>
        {product.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${product.name} image ${index + 1}`}
            width={500}
            height={500}
            className={styles.mainImage}
          />
        ))}
      </div>
      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.addButton}>Add to Cart</button>
      </div>
    </div>
  );
}