import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import MyComponent from '../MyComponent/MyComponent';
import ProductCatagories from '../productCategories/ProductCatagories';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Advertised></Advertised>
           <MyComponent></MyComponent>
           <ProductCatagories></ProductCatagories>
        </div>
    );
};

export default Home;