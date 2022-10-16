//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import backphoto from './BG.png';
import ImageList from '@mui/material/Box';
import Container from '@mui/material/Container';
import Films from './Films';
import Film from './Film';
import axios from 'axios'


function App() {

    const [alkutila, setAlkutila] = useState(0)

    function klikattu(variant) {
        console.log("klikattu: ", variant)
        setAlkutila(variant)
        console.log("alkutila: ", alkutila)
    }

    const pages = {
        films: 'films',
        persons: 'persons',
        game: 'game',

    }
    /*
        useEffect(() => {
            if (alkutila != 1) {
                pages.films
            }
            
            switch (match.params.type) {
                case pages.films:
                    return (
                        <div> < Films /></div >
                    )
                //break
                case pages.persons:
                    //getDailyData()
                    break
                case pages.game:
                    //getDailyData()
                    break
                default:
                    break
            }
            
        })
    */
    const buttons = [
        <Button key="one" href="films" /*onClick={() => { klikattu(1) }}*/>Films</Button>,
        <Button key="two" onClick={() => { klikattu(2) }}>Persons</Button>,
        <Button key="three">Game</Button>,
    ];

    function leffan_nimi() {
        let film_osoitteessa = window.location.pathname.split("=")[1]
        //window.location.pathname.searchParams.get('film')
        console.log(film_osoitteessa)




        let elokuvan_nimi = 0
        while (film_osoitteessa.indexOf('%20') != -1) {
            console.log("while")
            let turha = /%20/
            film_osoitteessa = film_osoitteessa.replace(turha, ' ')
            console.log(film_osoitteessa)

        }
        elokuvan_nimi = film_osoitteessa
        console.log(elokuvan_nimi)
        return elokuvan_nimi
    }

    useEffect(() => {
        console.log("window.location.pathname: ", window.location.pathname)
        console.log((window.location.pathname.startsWith('/film=')))
        if (window.location.pathname == '/films') {
            console.log("films")
            setAlkutila(1)
            console.log("alkutila: ", alkutila)
            // console.log("valittuLeffa: ", Films.valittuLeffa)
        } else if (window.location.pathname.startsWith('/film=')) {
            console.log("film")
            //console.log("valittuLeffa: ", Films.valittuLeffa)
            //console.log("valinta: ", Films.valinta)
            setAlkutila(4)
            console.log(window.location.pathname)
            console.log("alkutila: ", alkutila)
        }
        console.log("alkutila: ", alkutila)
    })
    /*
    useEffect(() => {
        if (window.location.pathname.startsWith('film')) {
            console.log("Se onnistui!")
            leffan_nimi()
        }
    }
    */


    if (alkutila === 0) {
        return (<div>
            <React.Fragment>
                <Container class='backphoto'>
                    <Box sx={{ height: '900px' }} />
                    <div /*style={{ minHeight: `100%`, backgroundImage: `url(${backphoto})` }}*/ >
                        <Box
                            sx={{
                                display: 'flex',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <ButtonGroup style={{ margin: '1%' }}
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="text"

                            >
                                {buttons}
                            </ButtonGroup>
                        </Box>


                    </div >
                </Container>

            </React.Fragment></div>

        )
    } else if (alkutila === 1) {
        // else if (alkutila === 1) {
        return (
            <Films />
        )
    } else if (alkutila === 4) {
        return (
            <Film leffa={leffan_nimi()} />
        )
    }
}
export default App;

/*
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        */

/*
<div>
    <Box
        sx={{
            margin: '25px',
            display: 'flex',
            '& > *': {
                m: 1,
            },
        }}
    >

        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
        >
            {buttons}
        </ButtonGroup>
    </Box>
</div>
*/
