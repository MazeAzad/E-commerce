import { useEffect, useState } from "react";
import styled from "styled-components";
import { useProducts } from "../contexts/productContext";
import { FaTimes } from "react-icons/fa";
import { useFilter } from "../contexts/filterContext";
import { TiTickOutline } from "react-icons/ti";
const Wrapper = styled.section`
    .filter 
    {
         width: 250px;
         margin-top: 10px;
         position: sticky;
         top:20px;
        
    }
    input[type=text]
    {
        padding:5px;
    }
    .category-btn
    {
        display: block;
        background-color: inherit;
        border:0;
        font-size: 1.1rem;
        color:gray;
        padding:0;
        cursor: pointer;
    }
    .colors 
    {
        display: flex;
        width: fit-content;
        gap:5px;
    }
    .colorBtn
    {
        width: 25px;
        height: 25px;
        border-radius:100%;
        border:0;
        display: grid;
        place-items:center;
        cursor: pointer;
        
    }
    .colorAllBtn
    {
        width: fit-content;
        height: fit-content;
        border:0;
        background-color: inherit;
        border-radius: initial;
        display: block;
        margin-top:1px;
        font-size: 1rem;
        
    }
    #company 
    {
        padding:5px;
        border:0;
        background-color: #f1f5f8;
        border-radius: 5px;
    }
    #company:focus
    {
        outline: none;
    }
    .clear 
    {
        background-color: #e31033;
        padding:5px;
        color:white;
        font-size: 1.2rem;
        display: block;
        margin-top:10px;
        border:0;
        border-radius: 5px;
    }
    .closeBtn 
    {
        display: none;
    }
    .price 
    {
        margin-top:10px;
    }
    input[type=range]
    {
        display: block;
        margin-right:10px;
    }
    label[for=price]
    {
        display: block;
        width: fit-content;
        margin-left:2px;
    }
    .underline 
    {
        border-bottom:1px solid #574232;
    }
    .white 
    {
        color:white;
    }
    @media only screen and (max-width:1346px) and (min-width:705px)
    {
        .filter
        {
            width: 25vw;
        }
    }
    @media only screen and (max-width:705px)
    {
        .filter{
            position: absolute;
            top:-10px;
            z-index: 1;
            left:-22%;
            width: 100%;
            height: 100%;
            background-color: #f8dbdb;
            display: flex;
            justify-content: space-between;
            border:1px solid transparent;
            border-radius:5px;
            padding-left:10px;
            padding-bottom:20px;
            padding-top:20px;
            transform: translateX(-130%);
            transition: 300ms ease;
        }
        .show-filter 
        {
            transform: translateX(0);
        }
        .closeBtn 
        {
            width: fit-content;
            height: fit-content;
            background-color: inherit;
            border:0;
            font-size: 1.4rem;
            display: block;
        }
    }
    @media only screen and (max-width:306px)
    {
        .filter 
        {
            display: block;
            padding-top:50px;
            display: flex;
        }
        #search 
        {
            margin-top:0px;
            width: 100px;
        }
        .closeBtn 
        {
            position: absolute;
            right: 0;
            top:0;
            
        }
       
    }
`;

const Filters = () => {
    const {
        companies,
        categories,
        colors,
        maxPrice,
        showFilter,
        openFilter,
        closeFilter,
        loading,
        products
    } = useProducts();
    const { filterProducts, filterObject, clearAll } = useFilter();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Wrapper>
            <div className={`${showFilter ? "filter show-filter" : "filter"}`}>
                <form onSubmit={handleSubmit}>
                    <div className="formControll searchContainer">
                        <input type="text" name="name" id="search" placeholder="Search" value={filterObject.name} onChange={(e) => filterProducts(e)} />
                    </div>
                    <div className="formControll categoryContainer">
                        <h3>Category</h3>
                        <div className="categoryButton">
                            {categories.map((category, index) => {
                                return (
                                    <button
                                        type="button"
                                        name="category"
                                        key={index}
                                        value={category}
                                        onClick={(e) => filterProducts(e)}
                                        className={`${category === filterObject.category ? "category-btn underline" : "category-btn "}`}>
                                        {category}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="formControll companiesContainer">
                        <h2>company</h2>
                        <select name="company" id="company" value={filterObject.company} onChange={(e) => filterProducts(e)} >
                            {companies.map((company, index) => {
                                return (<option value={company} key={index}>{company}</option>)
                            })}
                        </select>
                    </div>
                    <div className="formControll colorContainer">
                        <h2>color</h2>
                        <div className="colors">
                            {colors.map((color, index) => {
                                if (color === "all") {
                                    return <button
                                        name="color"
                                        value="all"
                                        className={`${color === filterObject.color ? "colorAllBtn underline" : "colorAllBtn"}`}
                                        onClick={(e) => filterProducts(e)}
                                        key={index}>
                                        all
                                    </button>
                                }
                                else {
                                    return <button
                                        name="color"
                                        className="colorBtn"
                                        value={color}
                                        style={{ backgroundColor: color }}
                                        onClick={(e) => filterProducts(e)}
                                        key={index}>
                                        {color === filterObject.color ? <TiTickOutline className={`${color === "#000" ? "white" : ""}`} /> : ""}
                                    </button>
                                }
                            })}
                        </div>
                        <div className="price">
                            <label htmlFor="price">Price</label>
                            <div>{filterObject.range}</div>
                            <input type="range" name="range" id="price" min="0" max={maxPrice} value={filterObject.range} onChange={(e) => filterProducts(e)} />
                        </div>
                    </div>
                    <button className="clear" onClick={() => { clearAll() }}>clear all</button>
                </form>
                <button className="closeBtn" onClick={() => { closeFilter() }}><FaTimes /></button>
            </div>
        </Wrapper>
    )
}
export default Filters;