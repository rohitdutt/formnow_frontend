import React from 'react';
import Navbar from '../components/Navbar';
import ForOrganization from '../components/products/ForOrganization';
import ForStores from '../components/products/ForStores';

const Products = () => {
    return ( 
        <div className={"h-screen"}>
            <Navbar/>
            <div className={"flex justify-center p-2"}>
                <ForOrganization/>
                <ForStores/>
            </div>
        </div>
     );
}
 
export default Products;