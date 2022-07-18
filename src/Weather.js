import { Button, Container, Card, Typography, TextField, Grid } from '@mui/material'
import { Box, } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 

function Weather() {
    const [allData, setAllData] = useState([]);
    const [city, setCity] = useState("king")
    const [check, setCheck] = useState('')
    const InputHandler = (e) => {
        setCity(e.target.value);
    }
    
    const buttonHandle = (e) => {
        setCheck(city)
    }
    
    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${check}`)
        .then((res) => {setAllData(res.data)
        console.log(res.data)}
        )
        
        .catch((err) => console.log(err));
    },[check])
    
  return (
    <Container maxWidth= "lg">
        <Box sx = {{margin : 6 }} >
            <TextField fullWidth label="Enter your city" type='text' onChange = {InputHandler} />
            <Button sx = {{margin : 2 }} onClick={buttonHandle}>GO</Button>
        </Box>
        <Grid container spacing = {2} align = "center">
            <Grid item xs = {6}>
                <Box maxWidth={800} maxHeight = {600}>
                    <Card sx={{ backgroundColor: 'transparent' }} elevation={24}
                    >
                        <Box sx = {{margin : 5}}>  
                            {/* <Typography>Place Name :- {allData?.location?.name}</Typography> */}
                            {/* <Typography>State :- {allData.location.region}</Typography>
                            <Typography>Country :- {allData.location.country}</Typography>
                            <Typography>Time :- {allData.location.localtime}</Typography>
                            <Typography>{allData.location.tz_id}</Typography> */}
                            {/* <img src={allData?.current?.condition?.icon} /> */}
                        </Box>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs = {6}>
                <Box maxWidth={800} maxHeight = {700}>
                    <Card elevation={24}
                    // sx={{ maxWidth: 345 }}
                    >
                        <Box sx = {{margin : 5}}>
                            {/* <Typography>Cloud :- {allData.current.cloud}</Typography>
                            <Typography>Temprature :- {allData.current.temp_c}</Typography>
                            <Typography>Last Update :- {allData.current.last_updated}</Typography>
                            <Typography>{allData.current.tz_id}</Typography>
                            <Typography>Sunrise Time :- {allData.forecast.forecastday[0].astro.sunrise}</Typography>
                            <Typography>Sunset Time :- {allData.forecast.forecastday[0].astro.sunset}</Typography>
                            <Typography>Max Temprature :- {allData.forecast.forecastday[0].day.maxtemp_c}</Typography>
                            <Typography>Min Temprature :- {allData.forecast.forecastday[0].day.mintemp_c}</Typography> */}
                        </Box>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    </Container>
   )}

export default Weather