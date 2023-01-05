import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components';
import { useProducts } from '../contexts/productContext';
import { useFilter } from '../contexts/filterContext';
import { useSort } from '../contexts/sortContext';
const Wrapper = styled.section`
    .sort 
    {
        display: flex;
        width: 950px;
        justify-content: space-between;
        margin-top:10px;
    }
    .line 
    {
        width: 500px;
        height: 1px;
        background-color: #a9a9a9;
        margin-top:15px;
       
    }
    .formContainer 
    {
        display: flex;
        gap:10px;
        margin-top:3px;
    }
    
    .buttons 
    {
        display: flex;
        gap:5px;
        width: 200px;
    }
    .productsNumber 
    {
        margin-top:5px;
    }
    .gridFillContainer,.listIconContainer
    {
        background-color:white;
        width: 30px;
        height: 30px;
        display : grid;
        place-items: center;
        border-radius: 3px;
         
    }
    select 
    {
        box-sizing: border-box;
        margin-top:-5px;
        border:0;
        padding:5px;
    }
    .sortContainer 
    {
        display:flex;
        margin-bottom: 20px;
    }
    .active 
    {
        background-color: black;
        color:white;
    }
    @media only screen and (max-width:1346px)
    {
        .sort 
        {
            width: 70vw;
        }
        .line 
        {
            width: 30vw;
        }
    
    }
    @media only screen and (max-width:940px)
    {
        .line 
        {
            width: 20vw;
        }
    }
    @media only screen and (max-width:738px)
    {
        .line 
        {
            width: 10vw;
        }
    }
    @media only screen and (max-width:705px)
    {
        .sortText 
        {
            display: none;
        }
        .line 
        {
            display: none;
        }
        .productsNumber
        {
            display: none;
        }
    }
 
`;
const Sort = () => {
    const {
        changeGridRow,
        changeViewFilledRow,
        filledRow
    } = useProducts()
    const { sortFunc } = useSort();
    const { filteredProducts } = useFilter();
    return (
        <Wrapper>
            <div className="sort">
                <div className="buttons">
                    <button
                        className={`${filledRow === false ? "gridFillContainer active" : "gridFillContainer"}`}
                        onClick={() => { changeGridRow() }}>
                        <BsFillGridFill />
                    </button>
                    <button
                        className={`${filledRow === true ? "listIconContainer active" : "listIconContainer"}`}
                        onClick={() => { changeViewFilledRow() }}>
                        <BsList />
                    </button>
                    <div className="productsNumber">
                        {filteredProducts.length} products found
                    </div>
                </div>
                <div className="line"></div>
                <div className="formContainer">
                    <div className="sortText">
                        Sort by
                    </div>
                    <div className="sortForm">
                        <form>
                            <select onChange={(e) => { sortFunc(e) }}>
                                <option value="Price(Lowest)">Price(Lowest)</option>
                                <option value="Price(Highest)">Price(Highest)</option>
                                <option value="Name(A-Z)">Name(A-Z)</option>
                                <option value="Name(Z-A)">Name(Z-A)</option>
                            </select>
                        </form>
                    </div>


                </div>

            </div>
        </Wrapper>
    )
}

export default Sort;