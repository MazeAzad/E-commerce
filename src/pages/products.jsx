import Filters from "../components/filters";
import ProductList from "../components/ProductList";
import Location from "../components/location";
import Sort from "../components/sort";
import styled from "styled-components";
import { BiFilter } from "react-icons/bi";
import { useProducts } from "../contexts/productContext";
import Loading from "../components/loading";
const Wrapper = styled.section`
    padding-bottom:100px;
    .productContainer 
    {
        display: flex;
        width: 1200px;
        margin:auto;
    }
    .production 
    {
        width:900px; 
    }
    .filterLogoContainer 
    {
        display: none;
    }
    @media only screen and (max-width:1346px)
    {
        .production
        {
            width: fit-content;
        }
        .productContainer 
        {
            width: fit-content;
            position: relative;
        }
    }
    @media only screen and (max-width:705px)
    {
        .filterLogoContainer
        {
            display: block;
            width: fit-content;
            height: fit-content;
            position: absolute;
            left:-21%;
            top:7px;
            font-size:1.8rem;
            color:red;
             
        }
    }
`;
const Products = () => {
    const {
        showFilter,
        openFilter,
        closeFilter,
        loading
    } = useProducts();
    if (loading) {
        return <Loading />
    }


    else {
        return <Wrapper>
            <Location />
            <section className="productContainer">
                <div className="filterLogoContainer" onClick={() => { openFilter() }}>
                    <BiFilter />
                </div>
                <Filters />
                <section className="production">
                    <Sort />
                    <ProductList />
                </section>

            </section>

        </Wrapper>
    }

}
export default Products;