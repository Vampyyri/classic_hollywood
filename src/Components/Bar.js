import * as React from 'react';
import ReactDOM from "react-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

//import blueGrey from '@mui/core/colors/blueGrey';

export default function ButtonAppBar() {
    console.log("ButtonAppBar")
    const [anchorEl, setAnchorEl] = React.useState < null | HTMLElement > (null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={window.location.assign('../films')}>Films</MenuItem>
                            <MenuItem onClick={handleClose}>Persons</MenuItem>
                            <MenuItem onClick={handleClose}>Game</MenuItem>
                        </Menu>

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Classic Hollywood
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
