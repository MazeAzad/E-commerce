import styled from "styled-components";
import { BsTrash } from "react-icons/bs"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "../contexts/cartContext";
import { Link } from "react-router-dom";
const Wrapper = styled.section`
    width: inherit;
    .items 
    {
        width:inherit;
        padding-bottom: 50px;
    }
    .headers 
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 20px;
    }
    .header 
    {
        text-align: center;
    }
    .item 
    {
        display: grid;
        grid-template-columns:  1fr 1fr 1fr 1fr 20px;
        margin:30px 0;
    }
    .imageContainer-and-info 
    {
        display: flex;
        gap:20px;
    }
    .image 
    {
        display: block;
        width: 100px;
        height: 80px;
        border-radius: 5px;
    }
    .info 
    {
        width: 150px;
    }
    .name {
        font-weight: bolder;
    }
    .colorContainer
    {
        
        margin-top:5px;
        display: flex;
        gap:10px;
    }
    .color 
    {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: block;
        
    }
    .price 
    {
        width: fit-content;
        height: fit-content;
        margin:auto;
         
    }
  
    .line 
    {
        width: inherit;
        height: 1px;
        background-color: gray;
        margin:20px 0;
    }
    .infoCommon 
    {
        text-align: center;
        margin-top:20px;
    }
    .quantity 
    {
        display: flex;
        width: fit-content;
        margin:auto;
        gap:15px;
    }
    .quantityBtn 
    {
        background-color: inherit;
        border:0;
        display: block;
    }
    .cartButtons 
    {
        display: flex;
        justify-content: space-between;
    }
    .cartButton 
    {
        width: fit-content;
        height: fit-content;
        border:0;
        border-radius: 5px;
        padding:10px;
        color:white;
    }
    .continue 
    {
        background-color: #ab7a5f;
    }
    .clear 
    {
        background-color: #222;
    }
    .link 
    {
        color:white;
        text-decoration: none;
    }
    .totalBox 
    {
        width: fit-content;
        height: fit-content;
        border:1px solid gray;
        border-radius: 10px;
        box-sizing: border-box;
        padding:20px;
        margin-left:auto;
    }
    .totalBox-common 
    {
        display: flex;
        justify-content: space-between;
        gap:100px;
        margin:30px;

    }
    .subtotal-head
    {
        font-size: 1.5rem;
        font-weight: bolder;
    }
    .totalBox-login 
    {
        text-align: center;
        width: 100%;
        padding:20px;
    }
`;
const Empty = styled.section`
    width: fit-content;
    font-size: 2rem;
    margin: 100px auto;
    font-weight: bolder;
`;
const CartContent = () => {
    const { updateShopCartQuantity, deleteItem, clearList } = useCart();
    const { allCarts, totalPrice } = useCart()
    const carts = allCarts;
    console.log(totalPrice);
    if (carts.length === 0) {
        return <Empty>List is empty</Empty>
    }
    else {
        return (
            <Wrapper>
                <div className="items">
                    <div className="headers">
                        <div className="header">Item</div>
                        <div className="header">Price</div>
                        <div className="header">Quantity</div>
                        <div className="header">Subtotal</div>
                    </div>
                    <div className="line"></div>
                    {carts.map((cart) => {
                        const { id, subTotal, image, color, price, count, name, stock } = cart;
                        return <div className="item" key={id}>
                            <div className="imageContainer-and-info">
                                <img src={image} alt="image" className="image" />
                                <div className="info">
                                    <div className="name">{name}</div>
                                    <div className="colorContainer">
                                        <span>color:</span>
                                        <button className="color" style={{ background: color }}></button>
                                    </div>
                                </div>
                            </div>
                            <div className="priceContainer">
                                <div className="price infoCommon">{price}</div>
                            </div>
                            <div className="quantityContainer infoCommon ">
                                <div className="quantity">
                                    <button className="minus quantityBtn"
                                        onClick={() => { updateShopCartQuantity(id, "decrease") }}
                                        type="button"
                                    >
                                        <AiOutlineMinus />
                                    </button>
                                    <div className="count"> {count}</div>
                                    <button className="plus quantityBtn"
                                        onClick={() => { updateShopCartQuantity(id, "increase") }}
                                        disabled={count >= stock}
                                    ><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className="subTotalContainer infoCommon">
                                <div className="subTotal">{subTotal}</div>

                            </div>
                            <div className="removeItem infoCommon"
                                onClick={() => { deleteItem(id) }}
                            >
                                <BsTrash />
                            </div>
                        </div>
                    })}
                    <div className="cartButtons">
                        <button className="cartButton continue">
                            <Link to="/products" className="link">Continue shoping</Link>
                        </button>
                        <button className="cartButton clear" onClick={() => { clearList() }}>Clear shoping Cart</button>
                    </div>

                </div>
                <div className="totalBox">
                    <div className="totalPrice totalBox-common">
                        <div className="subtotal-head">Subtotal:</div>
                        <div>{totalPrice}</div>
                    </div>
                    <div className="shipping totalBox-common">
                        <div>shipping:</div>
                        <div className="shippingPrice">$534</div>
                    </div>
                    <hr />
                    <div className="orderContainer totalBox-common">
                        <div className="order">Order:</div>
                        <div className="orderPrice">${parseInt(totalPrice) + parseInt(543)}</div>
                    </div>
                    <button className="totalBox-login">login</button>
                </div>
            </Wrapper>
        )
    }

}
export default CartContent;