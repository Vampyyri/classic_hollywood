import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
//import blueGrey from '@mui/core/colors/blueGrey';

export default function ButtonAppBar() {
    console.log("ButtonAppBar")
    return (
        <Box sx={{ flexGrow: 1 }} maxWidth='1300px' alignItems="center" justify="center">
            <AppBar position="static" color='grey'>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Classic Hollywood
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
