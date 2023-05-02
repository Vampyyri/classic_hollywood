import React, { useState, useEffect, Component } from 'react';
import ButtonAppBar from './Components/Bar.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



function Persons() {

    const [dataNoudettu, setDataNoudettu] = useState(false);
    const [personal, setPersonal] = useState([])

    console.log("Oomme Persons:saa")
    let persons = []

    useEffect(() => {
        console.log(dataNoudettu)
        if (!dataNoudettu) {
            const henkilot = async () => {
                console.log("henkilot")
                try {
                    console.log("henkilot try")
                    let luettelo = await axios.get('http://localhost:443/films')
                    console.log(luettelo.data)
                    //let persons = []
                    for (let tiedot of luettelo.data) {
                        //persons.push(tiedot.director.split(','))
                        //persons.push(tiedot.writer.split(','))
                        //persons.push(tiedot.story.split(','))
                        console.log("tiedot: ", tiedot)
                        console.log("tiedot.data: ", tiedot.data)
                        console.log("tiedot.acters: ", tiedot.acters)
                        for (let henkilö of tiedot.acters.split(', ')) {
                            if (persons.indexOf(henkilö) == -1) {
                                persons.push(henkilö)
                            }

                        }
                        for (let dir of tiedot.director.split(', ')) {
                            if (persons.indexOf(dir) == -1)
                                persons.push(dir)
                        }
                        for (let wri of tiedot.writer.split(', ')) {
                            if (persons.indexOf(wri) == -1)
                                persons.push(wri)
                        }
                        if (tiedot.producer != null) {
                            for (let pro of tiedot.producer.split(', ')) {
                                if (persons.indexOf(pro) == -1)
                                    persons.push(pro)
                            }
                        }


                        //persons.push(tiedot.acters.split(','))
                        persons = persons.sort();
                        console.log("persons: ", persons)
                        setPersonal(persons)
                        console.log("personal: ", personal)
                        setDataNoudettu(true)
                    }
                    /*
                    luettelo.forEach(element => {
                        ihmiset(element)
                     */

                    // ehkä sitten forEachin kauttaa formuliin, mikä otta arvot avaimilla

                    /*
                    setLeffat(films_luettelo.data)
                    setDataNoudettu(true)
                    console.log("datanoudettu: ", dataNoudettu)
                    console.log("ValittuLeffa: ", valittuLeffa)
                    //console.log("i.name: ", i.name)
                    */
                } catch (err) {
                    console.log(err)
                }
            }
            henkilot()

            //const Acter_and_photo = 


        }


    })

    console.log("personal: ", personal)
    function portret(name) {
        console.log("Olemme portretissa ")
        const jpgname = name.split(' ').join('_')
        const way = '/img/AA/Acters/' + jpgname + '.jpg'
        if (way === null) {
            way = '/img/AA/Actress/' + jpgname + '.jpg'
        }
        console.log("way: ", way)
        return way;
    }


    return (

        <Box container sx={{ flexGrow: 1 }} marginTop='7vh' maxWidth='1300px' margin='auto' alignItems="center" justify="center">

            <ImageList sx={{ width: 1300, height: 900 }}>
                <div>{(dataNoudettu == true) && <div>{personal.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${portret(item)}?w=248&fit=crop&auto=format`}
                            srcSet={`${portret(item)}?w=248&fit=crop&auto=format&dpr=2 2x`}

                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item}
                            position="below"
                        />
                    </ImageListItem>
                ))}</div>}</div>
            </ImageList>
        </Box>
    )




}

export default Persons;
