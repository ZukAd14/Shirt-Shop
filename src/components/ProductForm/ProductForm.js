import styles from './ProductForm.module.scss';
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";


const ProductForm = props => {

    return (
        <form>
            <OptionSize 
                sizes={props.sizes}
                currentSize={props.CurrentSize}
                setCurrentSize={props.setCurrentSize}
                testValue={props.currentSize.name}
              />
            <OptionColor 
                prepareColorClassName={props.prepareColorClassName}
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

export default ProductForm