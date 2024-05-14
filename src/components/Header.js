import icon1 from '../images/icon1.png'
import headerImage from '../images/header.png'
import { Grid } from '@mui/material';
import React from 'react';

function Header() {
    return (
        <Grid container>
            <Grid item xs={2.5}>
                <img src={icon1} alt='アイコン' style={{ width: '90%', height:'80%'}}></img>
            </Grid>
            <Grid item xs={9.5}>
                <img src={headerImage} alt='アイコン' style={{ width: '100%', height:'80%'}}></img>
            </Grid>

        </Grid>
      );
}

export default Header;