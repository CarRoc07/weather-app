import { FaGithub, FaLinkedin, FaSearch } from 'react-icons/fa';
import { WiRain, WiDaySunny, WiCloudy, WiSnow, WiHumidity, WiWindy, WiShowers, WiThunderstorm, WiFog, WiSmoke, WiDust, WiSandstorm, WiVolcano, WiStrongWind, WiTornado } from 'react-icons/wi';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import {
    Container,
    GeneralTitle,
    ContainerWeather,
    ContainerSearch,
    InputStyled,
    ButtonStyled,
    ErrorMessage,
    ResultsContainer,
    TextTemp,
    TextCity,
    TextCountry,
    ContainerDetails,
    ColDetails,
    TextDetails,
    ContainerFooter,
    FooterText,
    ContainerIcons,
} from './home.styles';

export const Home = () => {
    const [data, setData] = useState({
        celcius: 10,
        name: "London",
        humidity: 20,
        speed: 2,
        icon: "Clouds",
        country: "GB"
    })
    const [error, setError] = useState(false)
    const refInput = useRef(null)

    const getData = async (city) => {
        if(city === "") return;
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02f91e5ad811802984345244dd1ceb48&units=metric`
            const res = await axios.get(url)
            console.log(res.data)
            const data = await res.data;
            console.log(data)
            setData({
                celcius: data.main.temp,
                name: data.name,
                humidity: data.main.humidity,
                speed: data.wind.speed,
                icon: data.weather[0].main,
                country: data.sys.country
            })
            setError(false)
            refInput.current.value = ""
        } catch (error) {
            setError(true)
        }
    }

    const checkIconToRender = () => {
        switch (data.icon) {
            case 'Clear':
                return <WiDaySunny size={190} />;
            case 'Clouds':
                return <WiCloudy size={190} />;
            case 'Rain':
                return <WiRain size={190} />;
            case 'Drizzle':
                return <WiShowers size={190} />;
            case 'Thunderstorm':
                return <WiThunderstorm size={190} />;
            case 'Snow':
                return <WiSnow size={190} />;
            case 'Mist':
                return <WiFog size={190} />;
            case 'Fog':
                return <WiFog size={190} />;
            case 'Haze':
                return <WiFog size={190} />;
            case 'Smoke':
                return <WiSmoke size={190} />;
            case 'Dust':
                return <WiDust size={190} />;
            case 'Sand':
                return <WiSandstorm size={190} />;
            case 'Ash':
                return <WiVolcano size={190} />;
            case 'Squall':
                return <WiStrongWind size={190} />;
            case 'Tornado':
                return <WiTornado size={190} />;
            default:
                return <WiTornado size={190} />;
        }
    }

    useEffect(() => {
        getData('london')
    }, [])
    
    return (
        <Container>
            <GeneralTitle>
                Live Weather
            </GeneralTitle>
            <ContainerWeather>
                <ContainerSearch>
                    <InputStyled type='text' placeholder='Search for a city' ref={refInput} error={error} autoFocus/>
                    <ButtonStyled onClick={() => getData(refInput.current.value)}><FaSearch size={18}/></ButtonStyled>
                </ContainerSearch>
                {
                    error ? <ErrorMessage>City not found</ErrorMessage> : null
                }
                <ResultsContainer>
                    {
                        checkIconToRender()
                    }
                    <TextTemp>
                        {Math.round(data.celcius)} °C
                    </TextTemp>
                    <TextCity>
                        {data.name}
                    </TextCity>
                    <TextCountry>
                        {data.country}
                    </TextCountry>
                    <ContainerDetails>
                        <ColDetails>
                            <WiWindy size={120} />
                            <div>
                                <TextDetails>{Math.round(data.speed)} km/h</TextDetails>
                                <TextDetails>Wind</TextDetails>
                            </div>
                        </ColDetails>
                        <ColDetails>
                            <WiHumidity size={120} />
                            <div>
                                <TextDetails>{Math.round(data.humidity)} %</TextDetails>
                                <TextDetails>Humidity</TextDetails>
                            </div>
                        </ColDetails>
                    </ContainerDetails>
                </ResultsContainer> 
            </ContainerWeather>
            <ContainerFooter>
                <FooterText>
                    Desarollado por Carlos Stoll
                </FooterText>
                <ContainerIcons>
                    <a href="https://github.com/CarRoc07" target='_blank' rel='noreferrer noopener'><FaGithub size={30} color='#ccc'/></a>
                    <a href="https://www.linkedin.com/in/carlos-stoll-54242b221/" target='_blank' rel='noreferrer noopener'><FaLinkedin size={30} color='#ccc'/></a>
                </ContainerIcons>
            </ContainerFooter>
        </Container>
    )
}
