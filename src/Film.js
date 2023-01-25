import React, { useState, useEffect, Component } from 'react';
import ButtonAppBar from './Components/Bar.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import axios from 'axios';



function Film(p) {
    /*function location() {
        window.location.href = "film"
    }*/

    console.log("ollan Filmessa")
    console.log("props: ", p)
    console.log("props leffa: ", p.leffa)


    const [leffa, setLeffa] = useState();
    const [dataNoudettu, setDataNoudettu] = useState(false);

    const name = p.leffa

    useEffect(() => {
        if (!dataNoudettu) {
            const elokuva = async () => {
                try {
                    console.log("name: ", name)
                    let film_tiedot = await axios.get('http://localhost:443/film', {
                        headers: {
                            nimikke: name
                        }
                    })
                    console.log(film_tiedot.data)
                    let film_tiedot_ = film_tiedot.data[0]
                    setLeffa(film_tiedot_)
                    setDataNoudettu(true)
                    console.log(film_tiedot_)
                    //console.log("i.name: ", i.name)

                } catch (err) {
                    console.log(err)
                }
            }
            elokuva()
            console.log(elokuva())
            console.log("leffa: ", leffa)
            console.log("dataNoudettu: ", dataNoudettu)
        }
    })





    function kuva(nimi) {
        console.log("nimi: ", nimi)
        let film = nimi.split(' ').join('_')
        let poster = '/img/' + film + '.jpg'
        console.log("poster: ", poster)
        return poster;
    }

    console.log("name: ", name)





    function premiera(aika) {
        let päivä = aika.slice(8, 10)
        let kuukausi = aika.slice(5, 7)
        let vuosi = aika.slice(0, 4)
        let päivämäärä = päivä + '.' + kuukausi + '.' + vuosi
        console.log(päivämäärä)
        return päivämäärä;
    }

    return (
        <div>{(leffa) &&
            <div>

                <Box container sx={{ flexGrow: 1 }} marginTop='7vh' maxWidth='1300px' margin='auto' alignItems="center" justify="center">
                    <ButtonAppBar />
                    <br></br>
                    <br></br>


                    <Grid container spacing={2} style={{ marginLeft: '1vh' }} maxWidth='1300px'>
                        <Grid item xs={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={9}>
                                    <Item style={{
                                        fontWeight: 'bold', fontSize: '300% ', fontStyle: 'italic'
                                    }}>{name}</Item>
                                </Grid>
                                {(leffa.date) &&
                                    <Grid item xs={4}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Date: </Item>
                                    </Grid>
                                }
                                {(leffa.date) &&
                                    <Grid item xs={4}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{premiera(leffa.date)}</Item>
                                    </Grid>
                                }

                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><img class='sponsor' src={kuva(p.leffa)}></img></Item>
                        </Grid>

                    </Grid>
                </Box>
            </div>
        }</div>
    )

}


export default Film;
