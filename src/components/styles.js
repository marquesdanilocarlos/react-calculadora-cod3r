import styled from "styled-components";

export const StyledButton = styled.button`
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;

    font-size: 1.4rem;
    background: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
    border-radius: 0px;

    &:active {
        background: #ccc;
    }

    &.double {
        grid-column: span 2;
    }

    &.triple {
        grid-column: span 3;
    }

    &.operation {
        background: #fa8231;
        color: #fff;
    }

    &.operation:active {
        background: #fa8231cc;
    }
`;

export const StyledDisplay = styled.div`
      grid-column: span 4;
      background: #0004;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding:20px;
      font-size: 2.1rem
      overflow:hidden;
`;
