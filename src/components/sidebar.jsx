import styled from "styled-components";
import logo from "../assets/logo.svg";
import { SlBasket } from "react-icons/sl";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProducts } from "../contexts/productContext";
const Wrapper = styled.section`
    .sidebar{
        background-color: white;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        transform: translateX(-100%);
        transition: ease 300ms;
    }
.sidebar-open {
  transform: translateX(0);
}

    .header 
    {
        display: flex;
        width: 100vw;
    }
    .logoContainer 
    {
        width: 200px;
        height: 100px;
        margin-left:20px;
        margin-right: auto;

    }
    .logoContainer img 
    {
        width: 100%;
        height: 100%;
        
    }
    .timesIcon 
    {
        font-size:2.4rem;
        margin-top:20px;
        margin-right:20px;
        color:red;
    }
    .linksContainer 
    {
        margin:20px 20px;
    }
    .linkContainer
    {
        font-size: 2rem;
        margin-bottom:20px;
        margin-top:20px;
       
    }
    .linkContainer:hover .link{
        padding: 0.3em 0.5rem;
        padding-left: 1rem;
        background-color: #f79393;
        color:white;
        z-index:20px;
        box-shadow: 1px 20px 20px 1px  gray;
        transition-duration:500ms;
        transition-delay:100ms;
    }
    .link 
    {
        text-decoration: none;
        color:black;
        display: block;
        
    }
    .icons
    {
        display: flex;
        width: fit-content;
        margin:auto;
        gap:50px;
        font-size: 2rem;
        margin-top:70px;
    }
    .basketIcon
    {
        margin-top:3px;
    }
`;
const Sidebar = () => {
    const { closeSidebar, showSidebar } = useProducts();

    return (
        <Wrapper>
            <div className={`${showSidebar ? "sidebar sidebar-open " : "sidebar"}`}>
                <div className="header">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="timesIcon" onClick={() => { closeSidebar() }}>
                        <FaTimes />
                    </div>
                </div>

                <div className="linksContainer">
                    <div className="linkContainer">
                        <Link className="link">Home</Link>
                    </div>
                    <div className="linkContainer">
                        <Link className="link">About</Link>
                    </div>
                    <div className="linkContainer">
                        <Link className="link">Products</Link>
                    </div>
                </div>
                <div className="icons">
                    <div className="basketIcon">
                        <SlBasket />
                    </div>
                    <div className="personIcon">
                        <BsFillPersonPlusFill />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default Sidebar;