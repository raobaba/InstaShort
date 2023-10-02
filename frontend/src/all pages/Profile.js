import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './profile.css'
import { flexbox } from '@mui/system';
const Profile = () => {
    return (

        <div className="content">
            <Box p={1} mt={2} display={'flex'}>
                <Box>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Dipika Padukon
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                Actor, Mumbai
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Box
                                sx={{
                                    bgcolor: 'gray',
                                    borderRadius: 'sm',
                                    color: 'white',
                                    p: 1.5,

                                    display: 'flex',
                                    gap: 2,
                                    '& > div': { flex: 1 },
                                }}
                            >
                                <div>
                                    <Typography level="body-xs" fontWeight="lg">
                                        Posts
                                    </Typography>
                                    <Typography fontWeight="lg">34</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg">
                                        Followers
                                    </Typography>
                                    <Typography fontWeight="lg">980</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg">
                                        Following
                                    </Typography>
                                    <Typography fontWeight="lg">378</Typography>
                                </div>
                            </Box>
                        </CardContent>
                        <CardActions  >
                            <Button className='profile-Button' size="small">Follow</Button>
                            <Button variant="contained" size="small">Message</Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box ml={5} width={'100%'}>
                    <Card >
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div">
                                Stories Component
                            </Typography>
                            <Box className='stories-container' display={'inline'}>
                            <CardMedia
                            sx={{ height: 200, width:200, borderRadius:'100%' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                         <CardMedia
                            sx={{ height: 200,width:200, borderRadius:'100%' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                        </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </div>


    )
}

export default Profile