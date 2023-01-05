import styled from "styled-components"
const Wrapper = styled.section`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    right: 0;

    .loading 
    {
        width: 100px;
        height: 100px;
        border-radius:100%;
        border: 5px solid black;
        border-color: #dd5151 transparent #dd5151 transparent;
        animation-name: spinner;
        animation-duration: 900ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    @keyframes spinner {
        0%{ transform:rotate(0deg)}
        25%{ transform:rotate(90deg)}
        50%{transform:rotate(180deg)}
        75%{ transform:rotate(270deg)}
        100%{transform:rotate(360deg)}

    }
`;

const Loading = () => {
    return (
        <Wrapper>
            <div className="loading"></div>
        </Wrapper>
    )
}

export default Loading;