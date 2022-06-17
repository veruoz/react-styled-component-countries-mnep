import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Search} from "./Search";
import {CustomSelect} from "./CustomSelect";

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
]

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`

const Controls = ({onSearch}) => {
    const [search, setSearch] = React.useState('');
    const [region, setRegion] = React.useState('');

    useEffect(() => {
        console.log(region)
        const regionValue = region?.value || ''
        onSearch(search, regionValue)
    }, [search, region])

    return (
        <div>
            <Wrapper>
                <Search search={search} setSearch={setSearch}/>
                <CustomSelect
                    options={options}
                    placeholder="Filter by Region"
                    isClearable
                    isSearchable={false}
                    value={region}
                    onChange={setRegion}
                />
            </Wrapper>
        </div>
    )
}

export default Controls;
