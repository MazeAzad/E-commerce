import styled from "styled-components";
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
const Wrapper = styled.section`
    .services 
    {
        max-width: 100vw;
        background-color: #decbc0;
        margin-top:-20px;
    }
    .textContainer
    {
        display: flex;
        width: fit-content;
        margin:auto;
    }
    .text 
    {
        width: 600px;
        font-size: 1.1rem;
        text-align: left;
        margin-top:50px;
    }
    .heading 
    {
        width: 600px;
        font-size: 2rem;
        margin-top:16px;
    }
    .cards 
    {
        width:fit-content;
        display: flex;
        flex-wrap:wrap;
        margin:  auto;
        gap:180px;
        transform: translateY(20%);
        
        
    }
    .card
    {
        width:280px ;
        background-color: #c5a491;
        border-radius: 5px;
    }
    .icon
    {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        display: grid;
        place-items: center;
        margin:20px auto;
        font-size: 2.3rem;
        background-color: #eaded7;
        color:#453227;

    }
    .title 
    {
        width: fit-content;
        margin:20px auto;
        color:#453227;
        font-size:2rem;
        font-family: Arial;
        
    }
    .textCard p
    {
        text-align: center;
        
    }
    .buttomBox 
    {
        width: 100vw;
        height: 200px;
        background-color: white;
    }
   @media only screen and (max-width:1200px)
   {
        .buttomBox
        {
            display: none;
        }
        .card{
            width:400px;
        }
        .cards 
        {
            width:980px;
            margin:auto;
            transform: translateY(0);
        }
        .textContainer
        {
            width: 980px;
        }
   }
   @media only screen and (max-width:980px)
   {
      .textContainer
      {
        display: block;
        width:600px;
        padding-top:20px;
      }
      .text 
      {
        margin-top:20px;
      }
      .cards 
      {
        width: 600px;
        margin : auto;
        gap:60px;
        padding-bottom: 50px;
        
      }
      .card 
      {
        width:600px;
        
      }
   }
   @media only screen and (max-width:600px)
   {
        .textContainer
        {
            width: 400px;
            display: block;
            padding-top:20px;
        }
        .heading 
        {
            width:400px;
        }
        .text 
        {
            width:400px;
        }
        .cards 
        {
            width:400px;
            
        }
        .card 
        {
            width:400px;
        }
   }
   @media only screen and (max-width:400px)
   {
        .textContainer 
        {
            width:100vw;
            display: block;
            padding-top:20px;
        }
        .heading 
        {
            width:100vw;
            font-size: 1.3rem;
        }
        .text 
        {
            width:100vw;
            text-align: center;
        }
        
        .cards 
        {
            width:100vw;
            
        }
        .card 
        {
            width:400vw;
        }
   }
`;
const Services = () => {
    const services = [
        {
            id: 1,
            icon: <GiCompass />,
            title: 'mission',
            text:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
        {
            id: 2,
            icon: <GiDiamondHard />,
            title: 'vision',
            text:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
        {
            id: 3,
            icon: <GiStabbedNote />,
            title: 'history',
            text:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
    ]
    return (
        <Wrapper>
            <div className="services">
                <div className="textContainer">
                    <div className="heading">
                        <h1>Custom Furniture Built Only For You</h1>
                    </div>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                        </p>
                    </div>
                </div>
                <div className="cards">
                    {services.map((service) => {
                        const { id, title, icon, text } = service;
                        return (
                            <div className="card" key={id}>
                                <div className="icon">{icon}</div>
                                <div className="title">{title}</div>
                                <div className="textCard">
                                    <p>
                                        {text}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="buttomBox">
                </div>
            </div>
        </Wrapper>

    )
}
export default Services;