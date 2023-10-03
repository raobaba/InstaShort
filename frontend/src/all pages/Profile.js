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
                       
                            <Typography gutterBottom variant="h5" p={1} pb={0} component="div">
                                Stories 
                            </Typography>
                            <Box className='stories-container' display={'flex'} flexDirection={'row'} padding={2}>
                            <CardMedia
                            sx={{ height: 150, width:150, borderRadius:'100%' , margin:'3px' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                         <CardMedia
                            sx={{ height: 150, width:150,    borderRadius:'100%' , margin:'3px' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                          <CardMedia
                            sx={{ height: 150, width:150,    borderRadius:'100%' , margin:'3px' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                          <CardMedia
                            sx={{ height: 150, width:150,    borderRadius:'100%' , margin:'3px' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                          <CardMedia
                            sx={{ height: 150, width:150,    borderRadius:'100%' , margin:'3px' }}
                            image="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
                            title="green iguana"
                        />
                       
                        </Box>
                        
                    </Card>

                    <Box mt={2} my={5}>
                        <Card>
                            <Box  p={1}>
                            <Typography gutterBottom variant="h5" p={1} pb={0} component="div">
                                Posts 
                            </Typography>
                            <Box gridTemplateColumns={5}>
                                <Card >
                                 hi
                                </Card>
                            </Box>
                            </Box>
                        </Card>
                    </Box>
                </Box>
               
            </Box>
        </div>


    )
}

export default Profile