import React from 'react'
import Header from "../../component/Header/Header";
import {SearchContainerStyle} from './SearchContainerStyle'
import MagnifyingGlass from '../../img/magnifyingGlass.png'


const SearchPage = () => {
    return (
        <SearchContainerStyle>
            <Header/>
            <input
            background={MagnifyingGlass}
            />
            <img 
            src={MagnifyingGlass}/>
        </SearchContainerStyle>
    )
}

export default SearchPage
