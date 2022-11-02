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
