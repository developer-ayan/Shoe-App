import React from 'react'
import Carousel from 'react-elastic-carousel';
import { Grid } from '@mui/material';
import BoyShoeCard from './BoyShoeCard'

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
            image: 'https://egypt.alnasser.net/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/6/2/6222029050451-01.jpg',
        },
        {
            id: 3,
            title: 'item #3',
            image: 'https://m.media-amazon.com/images/I/41MXmzTfP-L.jpg'
        },
        {
            id: 4,
            title: 'item #4',
            image: 'https://egypt.alnasser.net/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/6/2/6222029050512-04.jpg'
        },
        {
            id: 5,
            title: 'item #5',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLzqvLtvTSgehgDj7UffNER8Yo9OOTy3EWQ&usqp=CAU'

        }
    ]
    window.scrollTo(0, 0);
    return (
        <div>
            <Grid container spacing={2} className='jus-con'>
            <Grid item xs={12}>
                <h2>Boy Shoes</h2>
            </Grid>
            </Grid>
            <Carousel className='Carousel'>
                {items.map(item => <div className='main-card-con' key={item.id} >
                    <div ><img src={item.image} className='Slide-Image' /></div>
                </div>)}
            </Carousel>
            <BoyShoeCard />
        </div>
    )
}
