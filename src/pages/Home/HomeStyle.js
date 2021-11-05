import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

export const SearchWrapper = styled.div`
 div > input {
    
    box-sizing: border-box;
    flex-shrink: 0;
    width: 90%;
    height: 100%;
    padding-left: 30px;
    border-width: 1px;
    border-color: #d0cbcb;
    border-style: solid;
  }
  div > img{
    position: absolute;
    left: 0;
    bottom: 10%;
    width: 20%;
    height: 80%;
  }
  div{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5%;
    width: 100%;
    margin: 12px 0;
  }

`

export const SearchContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CategroysStyle = styled.div`
margin-top: 1vh;
margin-bottom: 2vh;
cursor: grab;
display: flex;
flex-direction: row;
height: 10%;
width: 90%;
overflow: auto;
scrollbar-width: none;
-ms-overflow-style: none;
-webkit-overflow-scrolling: touch;
p{
  cursor: pointer;
  margin: 0 2%;
  text-align: center;
  p:hover{
    color: #e86e5a;
  }
  }
`

export const RestauranteContainer = styled.div`
box-sizing: border-box;
cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  width: 90%;
  min-height: auto;
  min-width: auto;
  font-size: 80%;
  border-width: 1px;
  border-color: #d0cbcb;
  border-style: solid;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  img {
    height: 60%;
    width: 100%;
    object-fit: fill;
    border-width: 1px;
    border-color: #d0cbcb;
    border-style: solid;
  }
  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    width: 100%;
    padding-bottom: 3%;
    }
  }
`;
