import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { useProducts } from "../contexts/productContext";
import { useEffect, useState } from "react";
const Wrapper = styled.section`
    
        .location 
    {
        width: 100vw;
        background-color: #eaded7;
        padding-top:20px;
        padding-bottom:20px;
    }
    .text 
    {
        font-size: 2rem;
        font-weight: bold;
        width: 1200px;
        margin:auto;
    }
    .home 
    {
        color:#ab7a5f;
    }
    .link 
    {
        color:#ab7a5f;
        text-decoration: none;
    }
    .pathName 
    {
        color:#453227;
    }
    span 
    {
        padding-left:5px;
        padding-right:5px;
    }
 

    @media only screen and (max-width:1346px)
    {
        .text 
        {
            width: 95vw;
            font-size: 3vw;
        }
    }
    @media only screen and (max-width:510px)
    {
        .text 
        {
            font-size: 5vw;
        }
    }
    @media only screen and (max-width:360px)
    {
        .text 
        {
            font-size:1rem;
        }
    }
    @media only screen and (max-width:300px)
    {
        .text 
        {
            font-size:0.8rem;
        }
    }
`;
const Location = ({ product, title }) => {
    const location = useLocation();
    let pathName = location.pathname;
    pathName = pathName[0] + pathName[1].toUpperCase() + pathName.slice(2);

    return (
        <Wrapper>
            <div className="location">
                <div className="text">
                    <p>
                        <span className="home"><Link to="/" className="link">Home</Link></span>
                        {product !== undefined ?
                            <span>
                                <span>/</span>
                                <Link to="/products" className="link">products</Link>
                                <span>/</span>
                                <span>{title}</span>
                            </span>
                            :
                            <span>{pathName}</span>
                        }
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}
export default Location;