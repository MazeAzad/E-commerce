import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./loading";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useCart } from "../contexts/cartContext";
import Stars from "./stars";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.section`
  padding-bottom: 100px;
    .productContainer 
    {
        width: 1200px;
        margin:auto;
        margin-top:10px;
      

    }
    .product 
    {
        display: grid;
        grid-template-columns:1fr 1fr;
        width: 1200px;
        column-gap: 20px;
    }
    .main-image 
    {
        width: 100%;
        height: 500px;
        display: block;
        border-radius: 5px;
    }
    .images 
    {
        display: flex;
        justify-content: space-between;
        margin-top:30px;
    }
    .image 
    {
        width: 100px;
        height: 80px;
        display: block;
        border-radius: 3px;
        padding:0;
    }
    .choseImage 
    {
        border:3px solid #ab7a5f;
    }
    .name 
    {
        font-size:2rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .price 
    {
        font-size: 1.3rem;
        margin-bottom: 20px;
        color:gray;
    }
    .description
    {
        width: inherit;
        font-size: 1rem;
        margin-bottom: 20px;
    }
    .info 
    {
        width: 380px;
    }
    .commonInfo 
    {
        display: grid;
        width: inherit;
        grid-template-columns: 1fr 1fr;
        margin:20px 0;
    }
    .title 
    {
        font-weight: bolder;
    }
    .line 
    {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0,0,14,0.39) ;
    }
    .colors 
    {
        display: flex;
        gap:10px;
        margin-top:10px;

    }
    .colors span 
    {
        display: block;
        margin-top:5px;
        
    }
   
    .color 
    {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border:0;
        display: grid;
        place-items: center;
    }
    .transparent 
    {
        opacity: 0.5;
    }
    .minusIcon, .plusIcon 
    {
        background-color: inherit;
        border:0;
        width: fit-content;
        height: fit-content;
        border-radius: 0;
        display: block;
        margin-top:2px;
        font-size: 2rem;
    }
    .counter
    {
        display: flex;
        margin-top:20px;
        gap:10px;
        font-size: 2rem;
        font-weight: bolder;
    }
    .addToCart 
    {
        border-radius: 0 ;
        width: fit-content;
        height: fit-content;
        padding:8px;
        background-color: #ab7a5f;
        border:0;
        border-radius: 5px;
        display: block;
        margin-top:10px;
    }
    .white 
    {
        color:white;
    }
    .rating 
    {
        display: flex;
    }
    .review 
    {
        display : grid;
        place-items: center;
        margin-left:10px;
        color:gray;
    }
    @media only screen and (max-width:1200px)
    {   .productContainer
        {
            width: 90vw;
        }
        .product    
        {
            display: block;
            width: 90vw;
        }
        .image
        {
            width: 120px;
            height: 100px;
        }
    }
    @media only screen and (max-width:635px)
    {
        .image 
        {
            width: 90px;
            height: 70px;
            display: block;
            border-radius: 3px;
            padding:0;
        }
    }
    @media only screen and (max-width: 510px)
    {
        .image 
        {
            width: 80px;
            height: 75px;
        }
        .main-image
        {
            height: 300px;
        }
        .info
        {
            width: 50vw;
        }
        .commonInfo 
        {
            display: block;
            
        }
    }
    @media only screen and (max-width:455px)
    {
        .images 
        {
            display: none;
        }
    }
    @media only screen and (max-width:340px)
    {
        .main-image{
            height: 200px;
        }
    }
`;
const Product = ({ product }) => {
    const navigate = useNavigate();
    if (product === undefined) {
        navigate("/error");
    }

    const {
        colors,
        company,
        id,
        images,
        name,
        description,
        reviews,
        stars,
        stock,
        price
    } = product;

    let productArray = Object.entries(product);
    const [options, setOptions] = useState({ count: 1 });
    const { allCarts } = useCart();
    useEffect(() => {
        if (productArray.length === 0) {
            return
        } else {
            if (allCarts.length === 0) {
                setOptions({ ...options, color: colors[0], id: id, price: price, name: name, image: images[0].url, subTotal: price, stock: stock })
            } else {
                let item = allCarts.find((item) => {
                    return item.id === id;
                })
                console.log(item);
                if (item === undefined) {
                    setOptions({ ...options, color: colors[0], id: id, price: price, name: name, image: images[0].url, subTotal: price, stock: stock })

                } else {
                    setOptions(item);
                }

            }

        }
    }, [product, allCarts])
    const [imageIndex, setImageIndex] = useState(0);
    const { updateCart } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCart(options);
    }
    const choseColor = (color) => {
        options.color = color;
        setOptions({ ...options })
    }
    const counter = (number, type) => {
        if (type === "increse") {
            setOptions((options) => {
                return { ...options, count: parseInt(number) + 1 }
            })
        }
        else {
            setOptions((options) => {
                return { ...options, count: parseInt(number) - 1 }
            })
        }
    }
    useEffect(() => {
        const subTotalPrice = options.count * options.price;
        setOptions((options) => {
            return { ...options, subTotal: subTotalPrice }
        })
    }, [options.count])
    console.log(options);
    if (productArray.length === 0) {
        return <Loading />
    }

    return (
        <Wrapper>
            <div className="productContainer">
                <div className="product">
                    <div className="imageContainer">
                        <img src={images[imageIndex].url} alt="image" className="main-image" />
                        <div className="images">
                            {images.map((image, index) => {
                                return <img
                                    src={image.url}
                                    alt="image"
                                    className={`${index === imageIndex ? "image choseImage" : "image"}`}
                                    key={index}
                                    onClick={() => { setImageIndex(index) }}
                                />
                            })}
                        </div>
                    </div>
                    <div className="infoContainer">
                        <div className="name">{name}</div>
                        <div className="rating">
                            <Stars stars={stars} />
                            <div className="review">
                                <p>({reviews} customer reviews)</p>
                            </div>
                        </div>
                        <div className="price">{price}$</div>
                        <div className="description">{description}</div>
                        <div className="info">
                            <div className="available commonInfo">
                                <div className="title">available</div>
                                <div className="information">{stock ? "In Stock" : "Not available"}</div>
                            </div>
                            <div className="SKU commonInfo">
                                <div className="title">SKU</div>
                                <div className="information">{id}</div>
                            </div>
                            <div className="brand commonInfo">
                                <div className="title">Brand</div>
                                <div className="information">{company}</div>
                            </div>

                        </div>
                        <div className="line"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="colors">
                                <span>colors:</span>
                                {colors.map((color, index) => {
                                    return (
                                        <button
                                            style={{ background: color }}
                                            name="color"
                                            type="button"
                                            className={options.color === color ? "color" : "color transparent"}
                                            onClick={() => { choseColor(color) }}
                                            key={index}>
                                            {options.color === color && <TiTick className={`${color === "#000" && "white"}`} />}
                                        </button>)
                                })}
                            </div>
                            {stock &&
                                <div className="counterContainer">
                                    <div className="counter">
                                        <button
                                            className="minusIcon"
                                            name="decrese"
                                            disabled={options.count <= 1}
                                            type="button"
                                            onClick={() => { counter(options.count, "decrese") }}
                                        >
                                            <AiOutlineMinus />
                                        </button>
                                        <div className="count">
                                            {options.count}
                                        </div>
                                        <button
                                            className="plusIcon"
                                            name="increse"
                                            type="button"
                                            disabled={options.count >= stock}
                                            onClick={() => { counter(options.count, "increse") }}
                                        >
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                    <button className="addToCart" type="submit">
                                        ADD TO CART
                                    </button>
                                </div>}
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default Product;