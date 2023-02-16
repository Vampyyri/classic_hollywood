import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Unstable_Grid2';
import Grid from '@mui/material/Grid'; // Grid version 1
import Film from './Film';
import ButtonAppBar from './Components/Bar.js';
/*
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
*/


//import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function Films() {

    const [leffat, setLeffat] = useState();
    const [dataNoudettu, setDataNoudettu] = useState(false);
    const [valittuLeffa, setValittuLeffa] = useState();
    console.log("Films functiossa ollan")

    useEffect(() => {
        if (!dataNoudettu) {
            const elokuvat = async () => {
                try {
                    console.log("Ku-ku")
                    let films_luettelo = await axios.get('http://localhost:443/films')
                    console.log(films_luettelo.data)
                    setLeffat(films_luettelo.data)
                    setDataNoudettu(true)
                    console.log("datanoudettu: ", dataNoudettu)
                    console.log("ValittuLeffa: ", valittuLeffa)
                    //console.log("i.name: ", i.name)

                } catch (err) {
                    console.log(err)
                }
            }
            elokuvat()

            /*let kino = 'Bringing_Up_Baby'.split('_').join(' ')
            console.log(kino)*/
        }

    })

    function kuvan_etsiminen(nimi) {
        console.log("nimi: ", nimi)
        let film = nimi.split(' ').join('_')
        let poster = '/img/' + film + '.jpg'
        console.log("poster: ", poster)
        return poster;
    }

    //muokataan päivämäärä sopivaksi muodoksi
    function premiera(aika) {
        let päivä = aika.slice(8, 10)
        let kuukausi = aika.slice(5, 7)
        let vuosi = aika.slice(0, 4)
        let päivämäärä = päivä + '.' + kuukausi + '.' + vuosi
        console.log(päivämäärä)
        return päivämäärä;
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",


    }));

    function valinta(elokuva) {
        // setValittuLeffa(elokuva)
        console.log("ValittuLeffa: ", valittuLeffa)
        console.log("elokuva: ", elokuva)
        window.location.href = 'film=' + elokuva
        //return elokuva
    }

    //<img src={kuvan_etsiminen(i)} />



    return (

        <div>
            <Box container sx={{ flexGrow: 1 }} marginTop='7vh' maxWidth='1300px' margin='auto' alignItems="center" justify="center">
                <ButtonAppBar />
                <div>{(dataNoudettu == true) && (valittuLeffa === undefined) && <div style={{ marginTop: '3vh' }}>{leffat.map((i, index) =>



                    <Grid container spacing={4} marginTop='1vh'>
                        <Grid item xs={2}>
                            <Item><Button key="film" onClick={() => { valinta(i.name) }} ><img class='sponsor' src={kuvan_etsiminen(i.name)} /></Button></Item>
                        </Grid>
                        <Grid item xs={5} style={{ marginTop: '3vh', verticalAlign: 'middle' }}>
                            <Item style={{ fontSize: '3vh', fontWeight: 'bold', height: '10vh' }}>{i.name}</Item>
                        </Grid>
                        <Grid item xs={3} style={{ marginTop: '3vh' }}>
                            <Item style={{ fontSize: '3vh', height: '10vh', justifyContent: 'center' }}>{i.genre}</Item>
                        </Grid>
                        <Grid item xs={2} style={{ marginTop: '3vh' }}>
                            <Item style={{ fontSize: '3vh', height: '10vh' }}>{premiera(i.date)}</Item>
                        </Grid>
                    </Grid>






                )}</div>}</div>
            </Box>
            {(valittuLeffa !== undefined) && <Film leffa={valittuLeffa} />}
        </div >
    )

}

export default Films;

/*
<Button key={i.id} style={{
            borderRadius: "5px", maxWidth: '170px', maxHeight: '25px', minWidth: '100px', minHeight: '25px',
            backgroundColor: "white", color: "#12a086", fontWeight: "bold", marginLeft: "15px", marginTop: "15px"
        }}
            variant="contained" onClick={() => { }}>
            {i.Name}</Button>
            */
