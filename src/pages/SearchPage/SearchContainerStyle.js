import styled from "styled-components";

export const SearchContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  input {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 90%;
    height: 5%;
    margin: 12px 0;
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
box-sizing: border-box;
cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;
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
  h3 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 20%;
    width: 100%;
    margin: 0;
    color: #e86e5a;
    padding: 3% 0 0 5%;
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
    height: 20%;
    width: 100%;
    padding-bottom: 3%;
    p {
      height: 100%;
      width: 20%;
      margin: 0;
      padding: 0 0 0 5%;
      color: #b8b8b8;
      font-weight: 600;
      :nth-child(2){
            width: 30%;
            padding: 0 5% 0 0 ;
            text-align: right;
      }
    }
  }
`;
