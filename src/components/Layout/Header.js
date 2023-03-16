import React from 'react';
import {Typography} from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
const Header=()=>{
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="colorSecondary" noWrap>
                    Simple blog example
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;