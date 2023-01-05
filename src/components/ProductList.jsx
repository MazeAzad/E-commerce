import styled from "styled-components";
import { useProducts } from "../contexts/productContext";
import { CiSearch } from "react-icons/Ci";
import { useFilter } from "../contexts/filterContext";
import { useSort } from "../contexts/sortContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
const Wrapper = styled.section`
    width: fit-content;
    .productList 
    {
        width: 950px;
        margin-top:20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        column-gap: 15px;
        row-gap: 20px;
    }
    .product 
    {
        width:100%;
    }
    .imageContainer 
    {
        width: 300px;
        height: 180px;
        position: relative;
    }
  
    .imageContainer img 
    {
        width: 100%;
        height: 100%;
        border-radius:5px;
    }
    .imageCover
    {   
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        place-items: center;
        display: none;
        background-color: rgba(0,0,0,0.18);
    }
    .searchIcon 
    {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        font-size:1.2rem;
        background-color: #d35446;
        color:white;
        display: grid;
        place-items: center;
    }
    .imageContainer:hover .imageCover
    {
        display: grid ;
    }
    .text 
    {
        display: flex;
        justify-content: space-between;
        margin-top:10px;
        font-family:Arial;
        font-size:1.2em;
        color:gray;
    }
    .name 
    {
        width: fit-content;
    }
    .price 
    {
        width: fit-content;
        color:#ab7a5f;
    }
    // filled mode
    .filledProductList 
    {   display: grid;
        grid-template-columns: 1f;
        row-gap: 20px;
        width: 950px;
        margin-top: 20px;

    }
    .filledProduct 
    {
        width: 900px;
        display: flex;
        gap:20px;
    } 
    .imageContainerFilled 
    {
        width: 300px;
        height: 200px;
    }
    .imageContainerFilled img 
    {
        width:100%;
        height: 100%;
        display: block;
        border-radius: 5px;
    }
    .textFilled 
    {
        display: block;
        width: 600px;
      
    }
    .filledPrice 
    {
        width: fit-content;
        font-size: 1.4rem;
        color:#ab7a5f;
    }
    .detailBtn
    {
        margin-top:10px;
        background-color: #be392a;
        color:white;
        padding:5px;
        border:0;
        border-radius: 3px;
        cursor: pointer;
    }
    .zero 
    {
        color:#ec5d4d;
         
    }
    
    
    @media only screen and (max-width:1346px) and (min-width:1050px)
    {
        .productList 
        {
            width: 70vw;
            grid-template-columns: 1fr 1fr;
            column-gap: 10px;
        }
        .imageContainer
        {
            width: 100%;
        }
        // filled mode 
        .filledProductList
        {
            width: 70vw;
        }
        .filledProduct 
        {
            width: 100%;
        }
        .imageContainerFilled 
        {
        width: 100%;
        height: 200px;
        }
        .textFilled 
        {
            display: block;
            width: 100%;
        }
        .description
        {
            font-size:1rem;
            color:gray;
        }
        .detailBtn
        {
            margin-top:2px;
        }
    }
    @media only screen and (max-width:1050px)    
    {
        .productList 
        {
            width: 70vw;
            grid-template-columns: 1fr 1fr;
            column-gap: 10px;
        }
        .imageContainer
        {
            width: 100%;
        }
        // filled mode 
        .filledProductList
        {
            width: 70vw;
        }
        .filledProduct 
        {
            width: 100%;
        }
        .imageContainerFilled 
        {
        width: 100%;
        height: 200px;
        }
        .textFilled 
        {
            display: block;
            width: 100%;
        }
        .description
        {
            font-size:1.5vw;
            color:gray;
        }
        .detailBtn
        {
            margin-top:2px;
        }
    }
    @media only screen and (max-width:930px)
    {
        .productList 
        {
            width: 70vw;
            grid-template-columns: 1fr;
            column-gap: 10px;
        }
        .imageContainer
        {
            width: 100%;
            height: 310px;
        }
        // filled mode 
        .filledProductList
        {
            width: 70vw;
        }
        .filledProduct 
        {
            width: 100%;
            display: block;
        }
        .imageContainerFilled 
        {
        width: 100%;
        height: 200px;
        }
        .textFilled 
        {
            display: block;
            width: 100%;
        }
        .description
        {
            font-size:1.5vw;
            color:gray;
        }
        .detailBtn
        {
            margin-top:2px;
        }
        // filled mode 
        .filledProductList
        {
            width: 70vw;
        }
        .filledProduct 
        {
            width: 100%;
        }
        .imageContainerFilled 
        {
        width: 300px;
        height: 200px;
        }
        .textFilled 
        {
            display: block;
            width: 100%;
        }
        .description
        {
            font-size:1.2rem;
            color:gray;
        }
        .detailBtn
        {
            margin:10px 0;
        }
        .filledPrice
        {
            margin:20px 0;
        }
    }
    @media only screen and (max-width:705px)
    {
        .filledProductList
        {
            width: 70vw;
        }
        .filledProduct 
        {
            width: 100%;
        }
        .imageContainerFilled 
        {
        width: 100%;
        height: 200px;
        }
        .textFilled 
        {
            display: block;
            width: 100%;
        }
        .description
        {
            font-size:1.2rem;
            color:gray;
        }
        .detailBtn
        {
            margin:10px 0;
        }
        .filledPrice
        {
            margin:20px 0;
        }
        .description
        {
            text-align: left;

        }
    }
    @media only screen and (max-width:490px)
    {
        .imageContainer
        {
            width: 100%;
            height: 200px;
        }
        .description
        {
            text-align: left;
            font-size:5vw;
        }
    }
`;
const ProductList = () => {
    const { filledRow, loading } = useProducts();
    const { filteredProducts } = useFilter();


    const products = filteredProducts

    return (
        <Wrapper>
            <div className={`${filledRow ? "filledProductList" : "productList"}`}>
                {products.length === 0 &&
                    <div className="zero">
                        <h3>no products found</h3>
                    </div>
                }
                {products.map((product) => {
                    const { id, image, name, price, description } = product;
                    return (
                        <div className={`${filledRow ? "filledProduct" : "product"}`} key={id}>
                            <div className={`${filledRow ? "imageContainerFilled" : "imageContainer"}`}>
                                {filledRow ?
                                    <>
                                        <img src={image} alt="image" />
                                        <div className="imageCover">
                                            <div className="searchIcon">
                                                <CiSearch />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <Link className="link" to={`/products/${id}`}>
                                        <img src={image} alt="image" />
                                        <div className="imageCover">
                                            <div className="searchIcon">
                                                <CiSearch />
                                            </div>
                                        </div>
                                    </Link>
                                }

                            </div>
                            <div className={`${filledRow ? "textFilled" : "text"}`}>
                                {filledRow ? <h2>{name}</h2> : <div className="name">{name}</div>}
                                <div className={`${filledRow ? "filledPrice" : "price"}`}>{price}$</div>
                                {filledRow ?
                                    <div className="description" >
                                        {description.substring(0, 150) + "..."}
                                    </div> : ""}
                                {filledRow ?
                                    <Link to={`/products/${id}`}>
                                        <button className="detailBtn">details</button>
                                    </Link>
                                    : ""}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Wrapper >
    )


}

export default ProductList;