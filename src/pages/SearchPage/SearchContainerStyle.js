import styled from "styled-components";

export const SearchContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  input {
    width: 85%;
    height: 5vh;
    /* min-height: 50px; */
    margin: 12px 0;
    /* background: url('magnifyingGlass.png') no-repeat; */
    padding-left: 30px;
    border-width: 1px;
    border-color: #d0cbcb;
    border-style: solid;
    :focus{
        outline: none;
    }
  }
`;
export const RestauranteContainer = styled.div`
cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  width: 85%;
  min-height: auto;
  min-width: auto;
  font-size: 80%;
  border-width: 1px;
  border-color: #d0cbcb;
  border-style: solid;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  h3 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 10%;
    width: 100%;
    margin: 0;
    color: #FF7F50;
    padding: 0 0 0 5%;
  }
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
    height: 30%;
    width: 100%;
    padding-bottom: 3%;
    p {
      height: 100%;
      width: 30%;
      margin: 0;
      padding: 0 0 0 5%;
      color: #aba6a6;
      font-weight: 600;
      :nth-child(2){
            width: 30%;
            padding: 0 5% 0 0 ;
            text-align: right;
      }
    }
  }
`;
