import style from './ProductPurchaseInfo.module.scss'
import ProductColor from "../ProductColor/ProductColor";

const ProductPurchaseInfo = () => {
    return (
        <div className={style.container}>
            <div className={style.colorContainer}>
                <h5>COLOR</h5>
                <div className={style.colorPickerList}>
                    <ProductColor color='#9e9e9e' />
                    <ProductColor color='#63F3C9' />
                    <ProductColor color='#7ACAAE' />
                    <ProductColor color='#559B8E' />
                    <ProductColor color='#FF7A76' />
                </div>
            </div>
            <div className={style.separator} />
        </div>
    )
}

export default ProductPurchaseInfo;