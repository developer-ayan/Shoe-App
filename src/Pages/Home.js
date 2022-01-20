import React from 'react'
import Carousel from 'react-elastic-carousel';
import MaltiShoeCard from './MultiShoeCard';
import { Grid } from '@mui/material';

export default function Home() {
    const items = [
        {
            id: 1,
            title: 'item #1',
            image: 'https://i.pinimg.com/736x/01/61/42/016142b91e3de6ee5f5d93f75a26e1ac.jpg'
        },
        {
            id: 2,
            title: 'item #2',
            image: 'https://images.agoramedia.com/wte3.0/gcms//Pediped-Boys-Dani-First-Walker-Shoe.jpg',
        },
        {
            id: 4,
            title: 'item #4',
            image: 'https://5.imimg.com/data5/HR/YP/YD/SELLER-90058063/men-stylish-shoes-500x500.jpg'
        },
        {
            id: 5,
            title: 'item #5',
            image: 'https://www.looksgud.in/upload/item-image/2371/1etrx/1etrx-dekkin-high-heel-ladies-girls-sports-running-shoes-sneakers_500x500_3.jpg'

        }
    ]
    return (
        <div>
            <Grid container spacing={2} className='jus-con'>
            <Grid item xs={12}>
                <h2>Shoes</h2>
            </Grid>
            </Grid>
            <Carousel className='Carousel'>
                {items.map(item => <div className='main-card-con' key={item.id} >
                    <div ><img src={item.image} className='Slide-Image' /></div>
                </div>)}
            </Carousel>
            <MaltiShoeCard/>
        </div>
    )
}
