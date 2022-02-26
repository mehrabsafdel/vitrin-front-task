import productsService from "../../services/productsService";
import Product from "../../components/Product/Product";

const ProductPage = ({ productData }) => {

    return <Product product={productData} />
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    // const productData = await productsService.getProduct(params.id);

    const productData = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    };
    if (!productData)
        return {
            notFound: true
        }

    return {
        props: {
            productData,
            seo: {
                title: productData.title,
                description: productData.description
            }
        },
        revalidate: 30,
    }
}

export default ProductPage;