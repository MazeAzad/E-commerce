import Location from "../components/location";
import Product from "../components/product";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { useProducts } from "../contexts/productContext";
import { useEffect, useState } from "react";
import { single_product_url } from "../api_endpoints/endpoints";
import axios from "axios";
const Wrapper = styled.section`

`;
const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const fetchProduct = async (url) => {
        const response = await axios(url);
        setProduct(response.data);
    }
    useEffect(() => {
        fetchProduct(`${single_product_url}${productId}`)
    }, [productId])

    useEffect(() => {
        setTitle(product.name)
    }, [product])
    return (
        <Wrapper>
            <Location title={title} product={product} />
            <Product product={product} />
        </Wrapper>
    )
}
export default SingleProduct;