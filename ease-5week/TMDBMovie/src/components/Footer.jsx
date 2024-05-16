import React from 'react'
import styled from 'styled-components'

const FooterSt = styled.div`
    background-color: rgb(3, 37, 65);
    position: fixed;
    bottom: 0;
    width: 100%;
    color: white;
    font-weight: bold;
    z-index: 100;
`;

function Footer() {
    return (
        <FooterSt>
            sihyeon
        </FooterSt>
    )
}
  
  export default Footer