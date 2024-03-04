import color from "common/GlobalColers";
import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${color.dimmedBackground};    
    overflow: auto;
    z-index:5;

    transform: scale(0);
    &.active {
        transform: scale(1);
    }
`;