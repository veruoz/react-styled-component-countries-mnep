import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
`

const Container = (props) => {
    return (
        <StyledContainer {...props} />
    )
}

export default Container;
