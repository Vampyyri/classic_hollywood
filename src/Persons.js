import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';



function Persons() {

    const [dataNoudettu, setDataNoudettu] = useState(false);

    console.log("Oomme Persons:saa")

    useEffect(() => {
        console.log(dataNoudettu)
        if (!dataNoudettu) {
            const henkilot = async () => {
                console.log("henkilot")
                try {
                    console.log("henkilot try")
                    let luettelo = await axios.get('http://localhost:443/films')
                    console.log(luettelo.data)
                    let persons = []
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


        }

    })

    return (

        <div>A</div>

    )




}

export default Persons;
