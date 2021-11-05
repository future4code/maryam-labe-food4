import styled from "styled-components";

export const RestaurantDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  aside{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 2;
  }
  aside > div{
    position: relative;
    width: 90%;
    height: 40%;
    background-color: white;
    top: 30%;
    display: hidden;
    opacity: 1;
    z-index: 2;
  }
  aside > button{
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: 50%;
    height: 30%;
  }
  aside > select{
    width: 90%;
    height: 30%;
  }
  aside > p{
    width: 90%;
    height: 30%;
    text-align: center;
  }
  button {
    cursor: pointer;
    min-width: 50px;
    min-height: 50px;
  }
  h2 {
    width: 85%;
    height: 8%;
    padding-bottom: 2%;
    font-size: 80%;
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: #202124;
  }
`;

export const RestauranteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  width: 85%;
  min-height: auto;
  min-width: auto;
  font-size: 80%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: 5%;
  margin-bottom: 2%;
  h3 {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 10%;
    width: 100%;
    margin: 0;
    color: #e86e5a;
  }
  img {
    height: 50%;
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
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 10%;
    width: 100%;
    p {
    box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 100%;
      width: 18%;
      margin: 0;
      color: #b8b8b8;
      font-weight: 600;
      :nth-child(2) {
        width: 30%;
        padding: 0 5% 0 0;
        text-align: right;
      }
    }
  }
  p {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    margin: 0;
    color: #b8b8b8;
    font-weight: 600;
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
  div > span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 30%;
    min-width: initial;
    min-height: initial;
    top: 0;
    right: 0;
    color: #e02020;
    border-style: solid;
    border-color: #e02020;
    border-width: 1px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  div > span:nth-child(2) {
    width: 25%;
    height: 30%;
    min-height: initial;
    bottom: 0;
    right: 0;
    top: initial;
    color: black;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: initial;
    border-top-right-radius: initial;
  }
  div {
    width: 30%;
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      border-width: 1px;
      border-color: #d0cbcb;
      border-style: solid;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  div:nth-child(2) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    padding: 4% 4%;
    h3 {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 30%;
      margin: 0;
      color: #e86e5a;
    }
  }
  div:nth-child(2) > p {
    width: 100%;
    height: 50%;
    margin: 0;
    color: #b8b8b8;
    font-weight: 600;
  }
  div:nth-child(2) > p:nth-child(3) {
    height: 20%;
    color: #000000;
    font-weight: 600;
  }
  div:nth-child(3) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
