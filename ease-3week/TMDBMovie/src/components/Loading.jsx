import React from 'react'
import styled from 'styled-components'
import { SyncLoader } from 'react-spinners'

const Loadingst = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

function Loading(){
    return(
        <Loadingst>
            <SyncLoader/>
        </Loadingst>
    )
}

export default Loading