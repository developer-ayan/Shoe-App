import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import '../Boyshoe/BoyShoe.css'
import BabyShoeData from './Babyshoe.json'
import { Link } from 'react-router-dom';




export default function BabyShoeCard() {



    return (
        <>

            <Grid container spacing={2} className='jus-con'>



            {Object.keys(BabyShoeData).map(keyname => {
                const shoe = BabyShoeData[keyname]
                return (
                        <Grid item xs={4}>
                            <Link key={keyname} to={`/BabyShoe/${keyname}`}>
                                <Card className='card' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={shoe.Image}
                                            alt="green iguana"
                                            className='Card-media'
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {shoe.Shoetitle}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {shoe.shoedisc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Price : {shoe.shoePrice}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                    </Grid>
                )
            })}
            </Grid>




        </>

    );
}
