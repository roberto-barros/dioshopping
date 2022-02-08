import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core/';
import Cart from './Cart';
import logoDioShopping from '../assets/images/dioshopping-removebg2.png'
import './components.css'

const Header = () => {
    return(
        <Grid container direction="row" justify="space-around" alignItems="center" xs={12}>
            <Link to="/">
                <img className='logoDioShopping' src={logoDioShopping} alt='Logo Dio Shopping'/>
            </Link>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/contato">
                <Button>Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
