import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './Home.module.css';

export default function HomePage() {
  const popularProducts = products.filter((p) => p.category === 'popular')
  const trendingProducts = products.filter((p) => p.category === 'trending')

  return (
    <div>
      <section className={styles.hero}>
        <h1>Welcome to ElectroStore</h1>
        <p>The best electronics at the best prices.</p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Most Popular</h2>
        <div className={styles.grid}>
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Trending Now</h2>
        <div className={styles.grid}>
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}