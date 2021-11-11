import styled from 'styled-components';

export const  ActiveOrderComponentStyle = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 19vh;
width: 100vw;
background-color: #e86e5a;
img{
    height: 32px;
    width: 32px;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70%;
    padding: 5% 0; 
    :first-child{
        width: 30%;
        height: 100%;
    }
    h5{
        width: 100%;
        height: 30%;
        color: #ffffff;
        margin: 0;
    }
    p{
        width: 100%;
        height: 30%;
        color: #000000;
        margin: 0;
        :nth-child(3){
            font-weight: 800;
        }
    }
}
`