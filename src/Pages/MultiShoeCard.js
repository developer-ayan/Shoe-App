import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';

export default function MaltiShoeCard() {

    const history = useHistory()

    return (
        <div>


            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <h1>Categrories</h1>
                </Grid>
                <Grid item xs={4}>

                    <Card onClick={() => history.push('/boyshoe')} className='multi-shoe' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia/>
                            <img src="https://static.wixstatic.com/media/9e5a83_4399a14e09054b4eaf80aa0b306729cc~mv2.jpg/v1/fill/w_274,h_274,al_c,q_80,usm_0.66_1.00_0.01/H1540-214-46CO-AC_JPG.webp"
                                alt="green iguana"
                                className='Card-media-img'
                            />
                            <CardContent>
                                <Typography className='Title-shoe-categories' gutterBottom variant="h5" component="div">
                                    Boys Shoes
                                </Typography>
                                <Typography className='Title-shoe-Disc' variant="body2" color="text.secondary">
                                    White Sneakers Ankle boots For Men Winter
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card onClick={() => history.push('/Girlshoes')} className='multi-shoe' sx={{ maxWidth: 345 }}>
                        <CardActionArea className='Categories-shoe-card'>
                            <CardMedia/>
                            <img src='https://pictures-uganda.jijistatic.com/4452102_img-03112020-221249-600-x-600-pixel_600x600.jpg'
                                alt="green iguana"
                                className='Card-media-img'
                            />
                            <CardContent>
                                <Typography className='Title-shoe-categories' gutterBottom variant="h5" component="div">
                                    Girls Shoes
                                </Typography>
                                <Typography className='Title-shoe-Disc' variant="body2" color="text.secondary">
                                    White Sneakers Ankle boots For Men Winter
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card onClick={() => history.push('/BabyShoe')} className='multi-shoe' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia/>
                            <img src="https://theshopville.com/wp-content/uploads/2018/05/1gaot-510x600.png"
                                alt="green iguana"
                                className='Card-media-img'
                            />
                            <CardContent>
                                <Typography className='Title-shoe-categories' gutterBottom variant="h5" component="div">
                                    Baby Shoes
                                </Typography>
                                <Typography className='Title-shoe-Disc' variant="body2" color="text.secondary">
                                    White Sneakers Ankle boots For Men Winter
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>



            </Grid>
        </div >

    );
}
