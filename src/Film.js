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



function Film(p) {
    /*function location() {
        window.location.href = "film"
    }*/

    console.log("ollan Filmessa")
    console.log("props: ", p)
    console.log("props leffa: ", p.leffa.name)

    function kuva(nimi) {
        console.log("nimi: ", nimi)
        let film = nimi.split(' ').join('_')
        let poster = '/img/' + film + '.jpg'
        console.log("poster: ", poster)
        return poster;
    }


    return (
        <div>
            <Box container sx={{ flexGrow: 1 }} marginTop='7vh' maxWidth='1300px' margin='auto' alignItems="center" justify="center">
                <ButtonAppBar />
                <br></br>
                <br></br>


                <Grid container spacing={2} style={{ marginLeft: '1vh' }} maxWidth='1300px'>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Item style={{
                                    fontWeight: 'bold', fontSize: '300% ', fontStyle: 'italic'
                                }}>{p.leffa}</Item>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img class='sponsor' src={kuva(p.leffa)}></img></Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
    return (



        <div>{p.leffa}</div>

    )
}


export default Film;
