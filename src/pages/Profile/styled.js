import styled from "styled-components"
import { DarkPeach } from "../../constants/colors"

export const Body = styled.div`
width: 360px;
min-height: 110vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px 0px;
`

export const ProfileBox = styled.div`
width: 100%;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid lightgray;
margin-bottom: 20px;
`

export const MiddleBox = styled.div`
width: 100%;
height: 76px;
background-color: #eee;
display: flex;
align-items: center;
margin-bottom:16px;
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
margin-bottom: 16px;
`

export const Infos = styled.div`
width: 328px;
display: flex;
flex-direction: column;
Typography: {
    margin-top: -12px
}
`

export const InfosAdress = styled.div`
width: 91.11%;
margin: 0 auto;
padding-top:16px;


Typography: {
    font-size: 16px;
    margin-top: -15px
}
h4 {
    font-weight: 100;
    color: #b8b8b8;
}
`

export const InfosOrders = styled.div`
width: 91.5%;
display: flex;
margin: 0 auto;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`

export const History = styled.div`
text-align: left;
width: 90%;

p {
    margin-bottom: 0px;
}
hr {
    color: black;
}
`

export const EachHistoryCardProfile = styled.div`
width: 100%;
height: 102px;
margin-top: 0px;
margin-bottom: 10px;
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