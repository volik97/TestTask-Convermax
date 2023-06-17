import styled from "styled-components";

export const StyledInput = styled.input<{$valid?: boolean }>`
    transition: 200ms;
    border-color: ${({$valid}) => $valid === false ? "#ff3333" : "unset"};
    background-color: ${({$valid}) => $valid === false ? "#5f3333" : "unset"};
`;