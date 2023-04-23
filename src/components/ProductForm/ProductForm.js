import styles from './ProductForm.module.scss';
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import PropTypes from 'prop-types';

const ProductForm = props => {

    return (
        <form>
            <OptionSize 
                sizes={props.sizes}
                currentSize={props.CurrentSize}
                setCurrentSize={props.setCurrentSize}
                currentSizeName={props.currentSize.name}
              />
            <OptionColor 
                setCurrentColor={props.setCurrentColor}
                currentColor={props.currentColor}
                colors={props.colors}
                />
            <Button className={styles.button} onClick={props.order}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentSizeName: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  order: PropTypes.func.isRequired,
};
export default ProductForm