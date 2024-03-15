import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: '1', price: 5, title: 'First product', description: 'lalala' },
  { id: '2', price: 10, title: 'Second product', description: 'lelele' },
  { id: '3', price: 20, title: 'Third product', description: 'lululu' }
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
