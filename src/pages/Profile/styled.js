import styled from "styled-components"
import { DarkPeach } from "../../constants/colors"
import ImageEdit from "../../assets/edit.svg"

export const Body = styled.div`
width: 360px;
height: 640px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px 0px;
`

export const ProfileBox = styled.div`
width: 100%;
height: 44px;
`

export const MiddleBox = styled.div`
width: 100%;
height: 76px;
background-color: #eeeeee;
display: flex;
align-items: center;
`

export const MiddleContainer = styled.div`
width: 91.11%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`

export const EdditButton = styled.img`
width: 24px;
height: 24px;
cursor: pointer;
`

export const InfosPerson = styled.div`
width: 91.11%;
display: flex;
justify-content: space-between;
align-items: flex-start;
`

export const Infos = styled.div`
width: 328px;
display: flex;
flex-direction: column;
p {
    margin-top: -12px
}
`

export const InfosAdress = styled.div`
width: 91.11%;
margin: 0 auto;

p {
    font-size: 16px;
    margin-top: -15px
}
h4 {
    font-weight: 100;
    color: #b8b8b8;
}
`

export const InfosOrders = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`

export const History = styled.div`
text-align: left;
width: 90%;
`

export const EachHistoryCardProfile = styled.div`
width: 328px;
height: 102px;
margin: 7px 0 0;
padding: 16px;
border-radius: 8px;
border: solid 1px #b8b8b8;

h4 {
    margin-top: -18px;
}

h6 {
    margin-top: -10px;
    font-weight: 100;
}
p {
    color: ${DarkPeach};
    margin-top: -5px;
}
`