import styled from "styled-components";
import story from "../assets/story.jpeg";
const Wrapper = styled.section`
    .story
    {
        width: 100vw;
        margin:auto;
        padding-top:30px;
        padding-bottom: 100px;
    }
    .content
    {
        display: flex;
        width: 1200px;
        gap:50px;
        margin:auto;
    }
    .imageContainer 
    {
        width: 600px;
        height: 500px;
    
    }
    .imageContainer img 
    {
        width:100%;
        height: 100%;
        border-radius: 5px;
    }
    .text 
    {
        width: 600px;
    }
    .text h1
    {
        color:#102a42;
        font-size:1.9rem;
    }
    .underLine 
    {
        width:70px;
        height: 5px;
        background-color: #ab7a5f;
        border-radius: 3px;
        margin-top:-10px;
        margin-bottom:30px;
    }
    @media only screen and (max-width:1200px)
    {
        .content 
        {
            display: block;
            width: 95vw;
        }
        .imageContainer
        {
            width: 95vw;
        }
        .text 
        {
            width: 95vw;
        }
    }
`;
const Story = () => {
    return (
        <Wrapper>
            <div className="story">
                <div className="content">
                    <div className="imageContainer">
                        <img src={story} alt="story" />
                    </div>
                    <div className="text">
                        <h1>
                            Our Story
                        </h1>
                        <div className="underLine"></div>
                        <div className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
                            Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto.
                            Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Story;