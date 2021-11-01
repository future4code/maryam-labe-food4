import React from 'react'
import ArrowHeadToLeft from '../../img/ArrowHeadToLeft.png'
import {HeaderContainer} from './HeaderStyle'

const Header = () => {
    return (
        <HeaderContainer>
        <div>
            <img
            src={ArrowHeadToLeft}
            alt='Go Back'
            />
        </div>
        <h3>Busca</h3>
        </HeaderContainer>
    )
}

export default Header
