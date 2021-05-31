import styled from "styled-components";

export const Square = styled.div`
    background-color: ${({ red, green, blue }) => `rgb(${red},${green},${blue})`};
    height: 500px;
    width: 500px;
    margin 20px;
`

export const Square2 = ({ red, green, blue }) =>
    <div
        style={{
            backgroundColor: `rgb(${red}, ${green}${blue})`,
            height: 100,
            width: 100
        }}>
    </div>