import logo from "../assets/logo.svg";
import { SlBasket } from "react-icons/sl";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sidebar";
import { useProducts } from "../contexts/productContext";
import { useCart } from "../contexts/cartContext";
const NavbarWrapper = styled.nav`
    width: 100vw;
    .container 
    {
        display: flex;
        max-width: 1200px;
        justify-content: space-around;
        margin:auto;
    }
    .logoContainer{
        width:100px;
        height: 70px;
        margin-top:-5px
    }
    .logoContainer img {
        width: 100%;
        height: 100%;
    }
    .navText 
    {
        display: flex;
        gap:20px;
        width: fit-content;
        margin: 15px auto;
    }
    .links 
    {
        text-decoration:none;
        font-size: 1.5rem;
        color:gray;
        display: flex;
    }
    .navIcons
    {
        display: flex;
        margin:15px;
        gap:20px;
        font-size: 20px;
        color:gray;
    }
    .navIcons div 
    {
        cursor: pointer;
    }
    .basketContainer 
    {
        display: flex;
        gap:4px;
        margin-top:3px;
        position: relative;
    }
    .loginContainer 
    {
        display: flex;
        gap:4px;
        margin-top:3px;
    }
    .personIcon 
    {
        margin-top:3px;
    }
    .bars 
    {
        display: none;
    }
    .cartItems
    {
        position: absolute;
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        border-radius: 100%;
        top:-15px;  
        right: -15px;
        background-color: #cb5656;
        opacity: 0.9;
        color:black;
    }

    @media only screen and (max-width:600px)
    {
        .navText 
        {
            display: none;
        }
        .navIcons 
        {
            display: none;
        }
        .bars 
        {
            display: block;
            width: fit-content;
            font-size: 1.5rem;
            margin-top:10px;
            margin-right:5px;
            height: fit-content;
            
        }
        justify-content: initial;
        .logoContainer
        {
            margin-right:auto;
        }
         
    }
`;
const Navbar = () => {
    const { openSidebar } = useProducts();
    const { totalCount } = useCart();
    return (
        <NavbarWrapper>
            <Sidebar />
            <div className="container">
                <div className="logoContainer">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navText">
                    <span><Link className="links" to="/">Home</Link></span>
                    <span><Link className="links" to="/about">About</Link></span>
                    <span><Link className="links" to="/products">Products</Link></span>
                </div>
                <div className="navIcons">
                    <div className="basketContainer">
                        <Link to="/cart" className="links">
                            <div>Cart</div>
                            <div><SlBasket /></div>
                        </Link>
                        <div className="cartItems">{totalCount}</div>
                    </div>
                    <div className="loginContainer">
                        <div>Login</div>
                        <div className="personIcon"><BsFillPersonPlusFill /></div>
                    </div>
                </div>
                <div className="bars" onClick={() => { openSidebar() }}>
                    <FaBars />
                </div>
            </div>
        </NavbarWrapper>
    )
}
export default Navbar;