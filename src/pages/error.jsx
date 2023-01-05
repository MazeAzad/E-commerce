import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.section`
    background-color: #f1f5f8;
    height: 100vh;
    display: grid;
    place-items: center;
    .notFound 
    {
        width: 400px;
        height: 300px;
        background-color:#c39c87;
        color:white;
        font-family: 'Courier New', Courier, monospace;
        display: grid;
        place-items: center;
        margin:auto;
    }
    h1 
    {
        width: fit-content;
        
    }
 
`;

const Error = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const out = setTimeout(() => {
            navigate("/");
        }, 3000)
    }, [])
    return (
        <Wrapper>
            <div className="notFound">
                <h1>page not found</h1>
            </div>


        </Wrapper>
    )
}

export default Error;