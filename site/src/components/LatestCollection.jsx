import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProdutcs, setlatestProdutcs] = useState([])
    useEffect(() => {
        // Correctly calling the state setter function instead of assigning to it
        setlatestProdutcs(products.slice(0, 10));
    }, [products]) // Added products to dependency array to ensure it updates when data is loaded
    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
                    Vibrant cobalt hues and high-tech fabrics define 2026’s bold
                    collections, blending nostalgic power shoulders with innovative,
                    sustainable, and air-cleansing garment designs.
                </p>
            </div>

            {/* Rendering products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestProdutcs.map((item, index) => (
                        // Added implicit return (parentheses) or 'return' keyword to render the component
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCollection;
