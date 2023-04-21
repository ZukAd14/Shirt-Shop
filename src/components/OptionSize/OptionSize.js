import styles from './OptionSize.module.scss';

const OptionSize = props => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(thing => 
                <li key={thing}>   
                  <button type='button' onClick={() => props.setCurrentSize({name: thing.name , additionalPrice: thing.additionalPrice})} className={(thing.name == props.testValue ? styles.active : styles.notActive)}>{thing.name}</button>
                </li>
                )}
            </ul>
          </div>
    )
}

export default OptionSize;