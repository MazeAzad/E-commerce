import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import styled from "styled-components";
const Wrapper = styled.section`
    .stars 
    {
        color:#ffd700;
        margin:20px 0;
    }
`;
const Stars = ({ stars }) => {
    let number = Math.floor(stars);
    let float = (stars - number).toFixed(1);
    let remain = Math.floor(5 - stars);
    let starsArray = [];

    for (let i = 0; i < number; ++i) {
        starsArray.push(<span key={Math.random()}><BsStarFill /></span>)
    }
    if (float) {
        starsArray.push(<span key={Math.random()}><BsStarHalf /></span>)
    }
    for (let i = 0; i < remain; ++i) {
        starsArray.push(<span key={Math.random()}><BsStar /></span>)
    }
    return (
        <Wrapper>
            <div className="stars">
                {starsArray.map((star) => {
                    return star;
                })}
            </div>
        </Wrapper>
    )
}

export default Stars;