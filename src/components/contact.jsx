import styled from "styled-components";
const Wrapper = styled.section`
    .contact 
    {   margin-top:50px;
        padding-bottom: 90px;
    }
    .title 
    {
        font-size: 1.5rem;
        width: 79vw;
        text-align: left;
        margin: 0 auto 20px auto;
    }
    .EmailandText
    {
        display: flex;
        width: 79vw;
        margin:auto;
    }
  
    form 
    {
        display: flex;
    }
    input 
    {
        width: 300px;
        border:2px solid black;
    }
  
    button 
    {
        padding:10px;
        border: 1px solid black;
        font-size:1.4rem;
        background-color: #795744;
        border-radius: 0 3px 3px 0 ;
    }
    @media only screen and (max-width:900px)
    {
        .EmailandText
        {
            display: block;
        }
    }
`;
const Contact = () => {
    return <Wrapper>
        <div className="contact">
            <div className="title">Join our newsletter and get 20% off</div>
            <div className="EmailandText">
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                </div>
                <div className="email">
                    <form>
                        <input type="email" name="emaial" id="email" placeholder="Enter Email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>





    </Wrapper>
}

export default Contact;