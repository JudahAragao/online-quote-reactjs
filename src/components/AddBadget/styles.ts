import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PropsContentBudget = {
    openProductField?: Boolean,
    openServiceField?: Boolean
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Badget = styled.div`
    width: 900px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeaderBudget = styled.div`
    width: 100%;
    height: 130px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`

    &:nth-child(1) {
        flex: .6;
        display: flex;
        margin: 0 0 0 25px;
    }

    &:nth-child(2), &:nth-child(3) {
        flex: 2;
        display: flex;
        flex-direction: column;

        p {
            margin: 0;
        }
    }

    &:nth-child(3) {
        align-items: flex-end;
        margin: 0 25px 0 0;
    }
`

export const LogoCompany = styled.div`
    width: 90px;
    height: 90px;
    background-color: #AAA;
    border-radius: 45px;
`

export const BodyBudget = styled.div`
    width: 100%;
    margin: 6px 0 0 0;
`

export const ContentBudget = styled.div<PropsContentBudget>`
    width: 100%;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    align-items: center;

    &:nth-child(1) { // for the budget number and issue date field
        height: 40px;
    }

    &:nth-child(2) { // to the proposal text field
        height: 130px;
        margin: 6px 0 0 0;
        background-color: #DBDBDB;
        justify-content: center;
        position: relative;

        span {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
        }

        textarea {
            width: 100%;
            height: 126px;
            margin: 0;
            padding: 10px;
            border-radius: 10px;
            background-color: #DBDBDB;
        }
    }

    &:nth-child(3) { // to the delivery forecast field
        margin: 6px 0 0 0;
        height: 40px;
        justify-content: flex-start;

        span {
            margin: 0 0 0 25px;
        }

        input {
            background-color: #DBDBDB;
            border-radius: 5px;
            padding: 3px 5px;
        }
    }

    &:nth-child(4) { // to customer data field
        margin: 6px 0 0 0;
        height: 170px;
        display: flex;
        flex-direction: column;
    }

    &:nth-child(5) { // to the add products field
        margin: 6px 0 0 0;
        height: ${props => props.openProductField === false ? '40px' : ''};
        background-color: ${props => props.openProductField === false ? '#DBDBDB' : '#FFF'};
        display: flex;
        flex-direction: ${props => props.openProductField === false ? 'row' : 'column'};
        justify-content:  ${props => props.openProductField === false ? 'center' : '' };
        align-items: ${props => props.openProductField === false ? ' center' : '' };

        span {
            color: #999999;
        }

        p {
            margin: 0;
        }
    }

    &:nth-child(6) { // to the add services field
        margin: 6px 0 0 0;
        height: ${props => props.openServiceField === false ? '40px' : ''};
        background-color: ${props => props.openServiceField === false ? '#DBDBDB' : '#FFF'};
        display: flex;
        flex-direction: ${props => props.openServiceField === false ? 'row' : 'column'};
        justify-content:  ${props => props.openServiceField === false ? 'center' : '' };
        align-items: ${props => props.openServiceField === false ? ' center' : '' };

        span {
            color: #999999;
        }
    }

    &:nth-child(7) { // for the payment data field
        margin: 6px 0 0 0;
        height: 120px;
        display: flex;
        flex-direction: column;

        input {
            height: 30px;
            background-color: #DBDBDB;
            border-radius: 5px;
            margin: 0;
            padding: 0 10px;
        }
    }

    input, textarea {
        margin: 0 0 0 10px;
        border: none;
        outline: 0;
    }

    p {
        margin: 0;
    }
`

// for the budget number and issue date field
export const NumBudget = styled.div`
    flex: auto;
    display: flex;
    justify-content: flex-start;
    margin: 0 0 0 25px;
`

export const DateOfIssue = styled.div`
    flex: auto; 
    display: flex;
    justify-content: flex-end;
    margin: 0 25px 0 0;
`

// to the proposal text field
export const TextInfo = styled.div`
    flex: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    h3 {
        margin: 0;
        font-size: 18px;
        color: #999999;
    }

    p {
        margin: 0;
        font-size: 14px;
        color: #999999;
    }
`

export const IconPlus = styled.div`
    flex: auto;
    display: flex;
    justify-content: center;
`

export const IconForText = styled(FontAwesomeIcon)`
    font-size: 60px;
    color: #999999;
`

// to customer data field
export const TitleAndCorporateName = styled.div`
    width: 100%;
    height: 40px;
    margin: 0;
    border-bottom: 2px solid black;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
`

export const TextTitle = styled.div`
    flex: auto;
    margin: 0 0 0 25px;

    p {
        margin: 0;
    }
`

export const CorporateName = styled.div`
    flex: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 25px 0 0;

    input {
        width: 350px;
        background-color: #DBDBDB;
        border-radius: 5px;
        padding: 3px 5px;
    }
`

export const ContentClient = styled.div`
    width: 100%;
    display: flex;
`

export const GroupForm = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    &:nth-child(1)  {
        margin: 10px 5px 0 25px;
    }

    &:nth-child(2)  {
        margin: 10px 25px 0 5px;
    }
`

export const GroupInput = styled.div`
    flex: auto;
    display: flex;
    margin: 2px 0 0 0;

    input {
        flex: auto;
        background-color: #DBDBDB;
        border-radius: 5px;
    }
`

// to the add products field
export const IconForProduct = styled(FontAwesomeIcon)`
    font-size: 25px;
    color: #999999;
    margin: 0 0 0 10px;
`

export const HeaderProduct = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid black;

    div {
        width: 100%;
        display: flex;
    }

    div:nth-child(1) {
        justify-content: flex-start;
        margin: 0 0 0 25px;
    }

    div:nth-child(2) {
        justify-content: flex-end;
        margin: 0 25px 0 0;
    }
`

export const BodyProduct = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    table {
        width: 100%;
        border-radius: 25px;
    }

    tr {
        height: 40px;
    }

    th {
        background-color: #ECECEC;
    }

    tr, th, td {
        text-align: center;
    }

    th:nth-child(1), td:nth-child(8) {
        padding: 0 25px;
    }

    td:nth-child(8) {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin: 5px;
        }
    }

    input {
        width: 85%;
        height: 30px;
        border-radius: 5px;
        margin: 0;
    }
`

export const FooterProduct = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FinalValueItemsProduct = styled.div`
    width: 100%;
    height: 40px;
    border-top: 2px solid black;
`

export const AddNewItem = styled.div`
    width: 100%;
    height: 40px;
    border-top: 2px solid black;
    border-radius:  0 0 10px 10px;
    background-color: #DBDBDB;
    display: flex;
    justify-content: center;
    align-items: center;
`

// to the add services field
export const IconForServices = styled(FontAwesomeIcon)`
    font-size: 25px;
    color: #999999;
    margin: 0 0 0 10px;
`

export const HeaderService = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid black;

    div {
        width: 100%;
        display: flex;
    }

    div:nth-child(1) {
        justify-content: flex-start;
        margin: 0 0 0 25px;
    }

    div:nth-child(2) {
        justify-content: flex-end;
        margin: 0 25px 0 0;
    }
`

export const BodyService = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    table {
        width: 100%;
        border-radius: 25px;
    }

    tr {
        height: 40px;
    }

    th {
        background-color: #ECECEC;
    }

    tr, th, td {
        text-align: center;
    }

    th:nth-child(1), td:nth-child(8) {
        padding: 0 25px;
    }

    td:nth-child(8) {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin: 5px;
        }
    }

    input {
        width: 85%;
        height: 30px;
        border-radius: 5px;
        margin: 0;
    }
`

// for customer data field
export const TitlePayment = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 2px solid black;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;

    span {
        margin: 0 0 0 25px;
    }
`

export const FormGroupTable = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    table {
        width: 100%;
        border-radius: 25px;
    }

    tr {
        height: 40px;
    }

    th {
        border-bottom: 2px solid black;
    }

    tr, th, td {
        text-align: center;
    }

    input {
        width: 80%;
    }
`