import React from 'react';
import styled from 'styled-components';
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--color-text)',
            borderRadius: 'var(--radii)',
            padding: '.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: 50,
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--color-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)'

        })
    }
})`
    width: 200px;
	font-family: var(--family);
	border: none;
    
    & > * {
        box-shadow: var(--shadow);
    }
    
    & * {
        color: var(--colors-text) !important;
    }
    
    & input {
        padding-left: .25rem;
    }
    
    & > div[id] {
		background-color: var(--colors-ui-base);
    }
`

