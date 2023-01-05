import styled from "styled-components";
const FooterWrraper = styled.footer`
    display: flex;
    background-color: #453227;
    color:white;
    position: absolute;
    width: 100vw;
    bottom:0;
    padding-top:20px;
    padding-bottom:20px;
    .footerText 
    {
        width: fit-content;
        margin:auto;
    }

`;
const Footer = () => {
    return (
        <FooterWrraper>
            <div className="footerText">
                © 2022 <span style={{ color: "#ab7a5f" }}>ComfySloth</span> All rights reserved
            </div>
        </FooterWrraper>
    )
}

export default Footer;