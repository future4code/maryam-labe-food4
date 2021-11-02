import styled from "styled-components";

export const RestaurantDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  button {
    cursor: pointer;
    min-width: 50px;
    min-height: 50px;
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
  margin-bottom: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: 5%;
  h3 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 10%;
    width: 100%;
    margin: 0;
    color: #ff7f50;
  }
  img {
    height: 30%;
    width: 100%;
    object-fit: initial;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-width: 1px;
    border-color: #d0cbcb;
    border-style: solid;
  }
  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 30%;
    width: 100%;
    p {
      height: 100%;
      width: 18%;
      margin: 0;
      color: #aba6a6;
      font-weight: 600;
      :nth-child(2) {
        width: 30%;
        padding: 0 5% 0 0;
        text-align: right;
      }
    }
  }
  p {
      /* height: 10%; */
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      color: #aba6a6;
      font-weight: 600;
      /* :nth-child(2) {
        width: 30%;
        padding: 0 5% 0 0;
        text-align: right;
      } */
      :last-child{
    padding-bottom: 3%;

      }
    }
`;

export const ElementContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15vh;
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
  div {
    width: 30%;
    height: 100%;
    flex-shrink: 0;
    img {
    height: 100%;
    width: 100%;
    border-width: 1px;
    border-color: #d0cbcb;
    border-style: solid;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

    :nth-child(2){
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* height: 30%; */
    width: 70%;
    padding: 2% 4%;
    h3 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    color: #ff7f50;
    }
    p {
      width: 100%;
      margin: 0;
      color: #aba6a6;
      font-weight: 600;
    }
  }
  }
`;
