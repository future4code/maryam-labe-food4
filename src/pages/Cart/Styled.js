import styled from "styled-components";
import { StyledButton } from "../SignUpPage/styled";
import { defaultColor, grayScale, darkColor } from "../../constants/colors";

export const PackageContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  margin-bottom: 70px;
`;

export const AddressContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: ${defaultColor};
`;

export const AddressTitle = styled.p`
  size: 16px;
  color: ${grayScale};
  margin-bottom: 8px;
`;

export const Title = styled.p`
  width: 100vw;
  max-width: 420px;
  height: 42px;
  margin: 18px 0 33px;
  padding: 12px 32px;
  font-size: 16px;
  text-align: center;
`;

export const Shipping = styled.p`
  font-size: 16px;
  text-align: right;
  margin-right: 16px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 16px 0 16px;
`;

export const TotalPrice = styled.p`
  color: ${defaultColor};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.43px;
`;

export const CheckBox = styled.div`
  margin: 10px 16px 0 16px;
  border-top: 0.5px solid ${darkColor};
`;

export const PaymentMethod = styled.p`
  margin: 24px 0 0 16px;
`;

export const Button = styled(StyledButton)`
  margin: 0 auto;
  width: 90vw;
  max-width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 42px;
  margin: 16px 0 16px;
  padding: 0 16px;
`;