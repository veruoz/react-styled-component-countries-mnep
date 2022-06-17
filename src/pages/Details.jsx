import React from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";

const StyledDetails = styled.div`
	
`

const Details = () => {
    const { name } = useParams();
    return (
        <div>
            Details {name}
        </div>
    )
}

export default Details;
