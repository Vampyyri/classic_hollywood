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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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
    const [kuvat, setKuvat] = useState();

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
                    setKuvat(film_tiedot_.acters)
                    setDataNoudettu(true)
                    console.log(film_tiedot_)
                    console.log("kuvat: ", kuvat)

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

    function acter_kuva(nimi) {
        console.log("nimi: ", nimi)
        let acter = nimi.split(' ').join('_')
        let portret = '/img/AA/Acters' + acter + '.jpg'
        if (portret === null) {
            let poster = '/img/AA/Actress' + acter + '.jpg'
        }
        console.log("portret: ", portret)
        return portret;
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

    const itemData = []
    function acters_lista() {
        kuvat.forEach(element => {

            let img = acter_kuva(element);
            let title = element;
            setItemData.push()

        })
    }




    return (
        <div>{(leffa) &&
            <div>

                <Box container sx={{ flexGrow: 1 }} marginTop='7vh' maxWidth='1300px' margin='auto' alignItems="center" justify="center">
                    <ButtonAppBar />
                    <br></br>
                    <br></br>


                    <Grid container spacing={2} style={{ marginLeft: '4vh' }} maxWidth='1300px'>
                        <Grid item xs={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Item style={{
                                        fontWeight: 'bold', fontSize: '300% ', fontStyle: 'italic', marginBottom: '3vh'
                                    }}>{name}</Item>
                                </Grid>
                                {(leffa.date) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Date: </Item>
                                    </Grid>
                                }
                                {(leffa.date) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{premiera(leffa.date)}</Item>
                                    </Grid>
                                }
                                {(leffa.genre) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Genre: </Item>
                                    </Grid>
                                }
                                {(leffa.genre) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.genre}</Item>
                                    </Grid>
                                }

                                {(leffa.director) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Director: </Item>
                                    </Grid>
                                }
                                {(leffa.director) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.director}</Item>
                                    </Grid>
                                }
                                {(leffa.writer) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Writer: </Item>
                                    </Grid>
                                }
                                {(leffa.writer) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.writer}</Item>
                                    </Grid>
                                }
                                {(leffa.story) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Story: </Item>
                                    </Grid>
                                }
                                {(leffa.story) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.story}</Item>
                                    </Grid>
                                }
                                {(leffa.based) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Based: </Item>
                                    </Grid>
                                }
                                {(leffa.based) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.based}</Item>
                                    </Grid>
                                }
                                {(leffa.producer) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Producer: </Item>
                                    </Grid>
                                }
                                {(leffa.producer) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.producer}</Item>
                                    </Grid>
                                }
                                {(leffa.music) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Music: </Item>
                                    </Grid>
                                }
                                {(leffa.music) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.music}</Item>
                                    </Grid>
                                }
                                {(leffa.running_time) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Running time: </Item>
                                    </Grid>
                                }
                                {(leffa.running_time) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.running_time}</Item>
                                    </Grid>
                                }
                                {(leffa.cinematography) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Cinematography: </Item>
                                    </Grid>
                                }
                                {(leffa.cinematography) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.cinematography}</Item>
                                    </Grid>
                                }
                                {(leffa.editor) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Editor: </Item>
                                    </Grid>
                                }
                                {(leffa.editor) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.editor}</Item>
                                    </Grid>
                                }
                                {(leffa.company) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Company: </Item>
                                    </Grid>
                                }
                                {(leffa.company) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.company}</Item>
                                    </Grid>
                                }
                                {(leffa.distributor) &&
                                    <Grid item xs={3}>
                                        <Item style={{
                                            fontWeight: 'bold'
                                        }}>Distributor: </Item>
                                    </Grid>
                                }
                                {(leffa.distributor) &&
                                    <Grid item xs={9}>
                                        <Item style={{
                                            fontWeight: 'normal'
                                        }}>{leffa.distributor}</Item>
                                    </Grid>
                                }

                            </Grid>
                        </Grid>
                        <Grid item xs={4} marginTop='9vh'>
                            <Item><img class='sponsor' src={kuva(p.leffa)}></img></Item>
                        </Grid>

                    </Grid>
                    <br></br>
                    <ImageList sx={{ width: 500, height: 450 }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        }</div>
    )

}


export default Film;
