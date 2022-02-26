import style from './ProductInfo.module.scss'
import ImageBox from "../ImageBox/ImageBox";
import PropTypes from 'prop-types';
import ProductTitle from "./components/ProductTitle/ProductTitle";
import Price from "./components/Price/Price";
import Rate from "./components/Rate/Rate";

const ProductInfo = ({ product }) => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.headerLeftBox}>
                    <ProductTitle title={product.title} category={product.category} />
                    <Price price={product.price} />
                </div>
                <Rate rate={product.rating} />
            </div>
        </div>
    )
}

ImageBox.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductInfo;