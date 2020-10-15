import React from 'react'
import styled from 'styled-components'
import gameImage from '../assets/ow.jpg'

const Games = styled.div`
    margin: 25px;
    box-shadow: black;
    box-shadow: 10px 10px 20px black;
    border-radius: 10px;
`

const Images = styled.div`
    width: 320px;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0 0;
    transition: .5s ease;
    &:hover{
    opacity: 0.5;
    }
`

const Details = styled.div`
    width: 320px;
    height: 110px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0 0 10px 10px;
    p {
    color: black;
    padding: 5px 10px;
    color: gray;
    }
    h3 {
    width: fit-content;
    margin: 0;
    padding: 5px 10px;
    color: #4678B0;
    &:hover {
    text-decoration: underline;

    }
    }
    h2 {
    margin: 0;
    padding: 5px 0;
    }
`

const DetailsLeft = styled.div`
    width: 200px;
    p {
        font-size: 15px;
    }
`

const DetailsRight = styled.div`
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h2 {
    color: black;
    }
    & button {
    border: none;
    color: white;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #57A4CC;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    z-index: 99;
    &:hover {
    background-color: #1E3859;

    }
    }
`

function Content() {
    return (
            <Games>
                <Images src={gameImage}></Images>
                <Details>
                    <DetailsLeft>
                        <h3>Overwatch</h3>
                        <p>Arm Supatat</p>
                        <p>โพสต์เมื่อ 5 นาทีที่แล้ว</p>
                    </DetailsLeft>
                    <DetailsRight>
                        <h2>0/5</h2>
                        <button>JOIN</button>
                    </DetailsRight>
                </Details>
            </Games>
    )
}

export default Content
