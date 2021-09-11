import React from 'react';
import ForOrganization from '../components/products/ForOrganization';
import ForStores from '../components/products/ForStores';
import Logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

const Products = () => {
    return ( 
        <div className={"h-screen flex flex-col items-center"}>
            <div className={"hidden lg:block absolute top-2 left-4"}>
                <Link to={'/'}>
                    <img src={Logo} alt={"logo"}/>
                </Link>
            </div>
            <div className={"lg:hidden -mb-8 mt-2"}>
                <Link to={'/'}>
                    <img height={90} width={110} src={Logo} alt={"logo"}/>
                </Link>
            </div>
            <div className={"flex flex-col lg:flex-row justify-center p-2"}>
                <ForOrganization/>
                <ForStores/>
            </div>
        </div>
     );
}
 
export default Products;