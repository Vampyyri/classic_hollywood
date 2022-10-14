import React, { useState, useEffect, Component } from 'react';
import ButtonAppBar from './Components/Bar.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function Film(p) {
    /*function location() {
        window.location.href = "film"
    }*/

    console.log("ollan Filmessa")
    console.log("props: ", p)
    console.log("props leffa: ", p.leffa.name)
    return (
        <div>
            <ButtonAppBar />
            <br></br>
            {p.leffa}

        </div>
    )
    return (



        <div>{p.leffa}</div>

    )
}


export default Film;
