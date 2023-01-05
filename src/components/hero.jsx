import styled from "styled-components";
import pic1 from "../assets/hero-bcg.jpeg";
import pic2 from "../assets/hero-bcg-2.jpeg"

const Banner1 = styled.div`
        width: 78vw;
        margin:auto;
        @media only screen and (max-width:940px)
        {
            .imageContainer 
        {
            display: none;
        }
      
        .text p 
        {
            font-size:0.9rem;
            text-align: justify;
            color:gray;
                
        }
        .textBody 
        {
            width: fit-content;
            height: fit-content;
        }
        .button{
                padding:10px;
                border-radius:5px;
                border:0;
                background-color: #ab7a5f;
                color:white;
                display: block;
                 
            }
            .button:hover {
                background-color: #d4b6a6
            }

        }

        @media only screen and (min-width:940px)
        {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 20px auto;
        
            .textContainer
            {
                display: grid;
                height: fit-content;
                
            }
            .textBody 
            {
                width:500px;
                height: fit-content;
                border-radius: 5px;
            
            }
            .textBody h1 
            {
                font-size:3rem;
            }
            .text{
                width: 500px;
            }
            .text p 
            {
                text-align: justify;
                font-size:1.6vw;
                color:gray;
                 
                 
            }
            .button{
                 
                border-radius:5px;
                border:0;
                background-color: #ab7a5f;
                padding:10px;
                color:white;
                display: block;
              
            }
            .button:hover {
                background-color: #d4b6a6
            }
            .imageContainer 
            {
                height: fit-content;
                display: grid;
                position: relative;

            }
            .image 
            {
                position: relative;
                margin-left:auto;
            }
            .pic1 
            {
            width: 350px;
            height: 600px;
            display: block;
            border-radius:5px;

            }
            .pic2 
            {
                width: 250px;
                height: 200px;
                position: absolute;
                bottom: 0;
                left:0;
                transform: translateX(-50%);
                border-radius:5px;
            }
            .box{
                width: 80px;
                height: 400px;
                position: absolute;
                top:150px;
                left:0;
                background-color: #decbc0;
                transform : translateX(-50%);
                z-index: -1;
                border-radius:5px;
            }
            padding-bottom: 30px;
        }
`;
const Hero = () => {
    return (
        <Banner1>
            <div className="textContainer">
                <div className="textBody">
                    <h1>Design Your Comfort Zone</h1>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                    <button className="button">SHOP NOW</button>
                </div>
            </div>
            <div className="imageContainer">
                <div className="image">
                    <img className="pic1" src={pic1} alt="pic1" />
                    <img className="pic2" src={pic2} alt="pic2" />
                    <div className="box"></div>
                </div>
            </div>
        </Banner1>
    )
}
export default Hero;