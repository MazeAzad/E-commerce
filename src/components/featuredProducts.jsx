import styled from "styled-components";
import pic1 from "../assets/products/product-2.jpg"
import pic2 from "../assets/products/product-3.jpg"
import pic3 from "../assets/products/product-4.jpg"
const Wrapper = styled.section`
    width: 100vw;
    background-color: #f1f5f8;
    
    padding-top:50px;
    padding-bottom: 50px;
    h1 
    {   
        padding-top:20px;
        width: fit-content;
        margin: 30px auto;
        font-size: 3rem;
        color:#3b31cb;
    }
    .underLine 
    {
        width:300px;
        height: 5px;
        background-color: #ab7a5f;
        margin:20px auto;
        border-radius: 5px;
    }
    .imageContainer 
    {
        
        display: flex;
        flex-wrap:wrap;
        margin: 50px auto;
        gap:50px;
        margin:auto;
        width: fit-content;
    }
    .pics 
    {
        width: 400px;
        height: 300px;
        display: block;
        border-radius:5px;
    }
    button 
    {
        padding:20px; 
        display: block;
        box-sizing: border-box;
        margin:40px  auto 0 auto;
        background-color: #ab7a5f;
        color:white;
        border: 0;
        border-radius:5px;
    }
    @media only screen and (max-width:1301px)
    {   
        
        .imageContainer{
            gap:100px;
            width: 600px;
        }
        .pics 
        {
            width: 600px;
            height: 400px;
            display: block;
        }
    }
    @media only screen and (max-width:1121px)
    {
         

        .imageContainer
        {
            width: 600px; 
            gap:20px;
        }
        .pics
        {
            width: 600px;
            height: 400px;
            display: block;
        }
    }
    @media only screen and (max-width:600px)
    {   
        .imageContainer
        {
            width: 400px; 
            gap:20px;
        }
        .pics
        {
            width: 400px;
            height: 300px;
            display: block;
        }
        padding-bottom: 50px;
    }
    @media only screen and (max-width:420px)
    {   
        h1 
        {
            font-size: 2rem;
        }
        .pics 
        {
            width: 300px;
            height: 250px;
            
        }
        .imageContainer 
        {
            width: 300px;
        }
        height: fit-content;
        
    }
    @media only screen and (max-width:310px)
    {   
        .underLine
        {
            width: 200px;
        }
        h1 
        {
            font-size:1.5rem;
        }
        .pics 
        {
            width:250px;
            height: 250px;
        }
        .imageContainer
        {
            width: 250px;
        }
        height: fit-content;
    }
`;
const FeaturedProducts = () => {
    return (
        <Wrapper>
            <h1>Featured Products</h1>
            <div className="underLine"></div>
            <div className="imageContainer">
                <img src={pic1} className="pics pic1" alt="pic1" />
                <img src={pic2} className="pics pic2" alt="pic2" />
                <img src={pic3} className="pics pic3" alt="pic3" />
            </div>
            <button>ALL PRODUCTS</button>
        </Wrapper>
    )
}

export default FeaturedProducts;