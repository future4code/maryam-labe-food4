import styled from "styled-components";
import DropDownArrow from "../../img/DropDownArrow.png";

export const RestaurantDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: black;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  aside > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    width: 90%;
    height: 30%;
    background-color: white;
    opacity: 1;
    z-index: 3;
  }

  aside > div > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
    background-color: white;
    opacity: 1;
    z-index: 3;
  }

  aside > div > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    button {
      width: 60%;
      height: 30%;
      padding: 0 4%;
      font-size: 80%;
      font-weight: 500;
      color: #4a90e2;
    }
  }

  aside > div > div > button {
    display: flex;
    justify-content: right;
    align-items: flex-end;
    cursor: pointer;
    background: none;
    border: none;
    width: 50%;
    height: 30%;
    color: blue;
  }

  /* aside > div > div:before {
    appearance: inherit;
    border: 1px solid black;
    display: inline;
    left: 50%; 
     top: 50%; 
    position: relative;
    z-index: 40;
    content: "";
    width: 20%;
    height: 50%;
    background-color: black;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    opacity: 1;
    color: black;
   } */

  aside > div > div > img {
    display: none;
    display: flex;
    position: absolute;
    right: 10%;
    top: 30%;
    visibility: visible;
    width: 8%;
    height: 40%;
    z-index: 0;
  }

  aside > div > div > select {
    /* appearance: none; */
    -webkit-appearance: none;
    position: relative;
    background: none;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    width: 90%;
    height: 100%;
    padding: 0 4%;
    font-size: 100%;
    font-weight: 500;
    background-image: url("../../img/DropDownArrow.png");
  }

  aside > div > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 30%;
    text-align: center;
    z-index: 2;
  }
`;

export const CategoryTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  h2 {
    width: 85%;
    height: 8%;
    padding-bottom: 2%;
    font-size: 80%;
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: #202124;
  }
  span {
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
  div > button {
    position: absolute;
    background: white;
    cursor: pointer;
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
    z-index: 20;
  }
  div {
    width: 30%;
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
    z-index: 1;
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
    overflow: scroll;
    h3 {
  overflow: scroll;

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
  overflow: scroll;
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
