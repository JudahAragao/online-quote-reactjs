import styled from "styled-components";

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

export const HeaderBadget = styled.div`
    width: 100%;
    height: 130px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background-color: red;

    &:nth-child(1) {
        flex: .8;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:nth-child(2), &:nth-child(3) {
        flex: 2;
    }
`

export const LogoCompany = styled.div`
    width: 90px;
    height: 90px;
    background-color: #AAA;
    border-radius: 45px;
`