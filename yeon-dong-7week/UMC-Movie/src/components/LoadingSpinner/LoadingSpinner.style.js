import styled from "styled-components";

export const StyledLoddingSpinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #8b9200; 
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: auto;
    margin-top: 10%;
    @keyframes spin {
        to {
          transform: rotate(360deg);
        }
    }
`;