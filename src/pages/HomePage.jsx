import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {useNavigate} from "react-router-dom";


const HomePage = ({ countries, setCountries }) => {
    const [filteredCountry, setFilteredCountry] = React.useState(countries);

    const navigate = useNavigate()

    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountry(data)
    }

    // console.log(countries)
    React.useEffect(() => {
        // загрузка стран с проверкой при переходе с других страниц SPA
        if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, []);
    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {
                    filteredCountry.map(c => {
                        const countryInfo = {
                            img:  c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title:       'Population',
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title:       'Region',
                                    description: c.region
                                },
                                {
                                    title:       'Capital',
                                    description: c.capital
                                },

                            ]
                        }

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo} />
                        )
                    })
                }
            </List>
        </>
    )
}

export default HomePage;
