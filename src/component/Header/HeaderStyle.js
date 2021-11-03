import styled from "styled-components";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 5%;
  width: 100%;
  padding: 4px 12px;
  border-width: 0 0 1px 0;
  border-color: #eae2e2;
  border-style: solid;
  overflow: hidden;
  img {
    cursor: pointer;
    height: 60%;
    width: 5%;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100%;
    width: 80%;
    font-size: 80%;
    text-align: center;
    font-weight: 600;
  }
`;
