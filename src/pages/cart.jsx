import styled from "styled-components";
import { useCart } from "../contexts/cartContext";
import CartContent from "../components/cartContent";
const Wrapper = styled.section`
    .cartContainer 
    {
         width: 78.1vw;
         margin:auto;
         padding-bottom: 150px;
    }
   
`;
const Cart = () => {
    return (
        <Wrapper>
            <div className="cartContainer">
                <CartContent />
            </div>
        </Wrapper>
    )
}
export default Cart;