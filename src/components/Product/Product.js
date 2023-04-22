import styles from './Product.module.scss';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';



const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  console.log('props: ', props);
  console.log('curSi: ', currentSize);

  

  const getPrice = useMemo(() => {
    return (props.basePrice + currentSize.additionalPrice);
  }, [props.basePrice, currentSize]);
     
    
  

  const sendOrder = event => {
    event.preventDefault();
    console.log('Summary');
    console.log('===========');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize.name);
    console.log('Color: ', currentColor);
  }
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
        setCurrentSize={setCurrentSize}
        currentSize={currentSize}
        testValue={currentSize.name}
        order={sendOrder}
        sizes={props.sizes}
        colors={props.colors} />
      </div>
      
    </article>
    
  )
  

};

export default Product;