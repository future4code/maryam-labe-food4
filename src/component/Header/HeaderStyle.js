import styled from "styled-components"


export const HeaderContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
height: 5%;
width: 100%;
padding: 4px 12px;
border-width: 0 0 1px 0;
border-color: #eae2e2;
border-style: solid;
div{
    display: flex;
    width: 40%;
    height: 100%;
}
img{
    cursor: pointer;
    display: flex;
    size: 5%;
    /* width: 20%; */
}
h3{
    display: flex;
    margin: 0;
    height: 100%;
    width: 60%;
    font-size: 80%;
}
`