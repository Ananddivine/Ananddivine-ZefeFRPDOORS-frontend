import React, { useContext } from 'react';
import { HomeContext } from '../Context/HomeContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisply from '../Components/Productdisplay/Productdisply';
import Discriptionbox from '../Components/Discriptionbox/Discriptionbox';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';

const Product = () => {
    const { all_product } = useContext(HomeContext);
    const { productId } = useParams();
    console.log('all_product:', all_product);
    console.log('productId:', productId);
    const product = all_product.find((e) => e.id === Number(productId));
    console.log('product:', product);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Breadcrum product={product} />
            <Productdisply product={product}/>
            <Discriptionbox description={product.description} />
            <Relatedproduct />
        </div>
    );
};

export default Product;
