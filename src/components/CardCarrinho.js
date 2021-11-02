import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';




const CardCarrinho = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            },
        }));



    return (

    <Box sx={{ 
        marginTop:      '4px',
        marginBottom:   '4px',
        display:        'flex', 
        height:         '112px', 
        width:          '343px', 
        border:         '1px solid black',
        borderRadius:   '8px',
        borderColor:    'fundoCinza.contrastText'
    }}>

        <Box sx={{ 
            height: '112px', 
            width:'97px', 
        }}>

            <CardMedia
                border-radius= '8px'
                component="img"
                height="110px"
                width="97px"
                image="data:image/jpeg;base64,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"
                alt="comida"
            />

        </Box>

        <Box sx={{ 
            height: '112px',
            width:  '240px',
        }}>



            <CardContent>
                <Box>
                    <Box sx={{
                        marginRight: '0px',
                        display:'flex',
                        width:'230px', 
                        justifyContent:'space-between'}}
                    >

                        <Typography gutterBottom variant="body1" component="div" color='primary.main'>
                            Nome do lanche
                        </Typography>

                        <Box sx={{
                            marginTop: '-16px',
                            width: '33px',
                            height: '33px',
                            border: '1px solid', 
                            borderRadius: '8px',
                            borderColor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        
                            }}> 

                            <Typography gutterBottom variant="body1" component="div" color='primary.main'>
                                1
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            Ingredientes, e o que mais o lanche tiver e duas    linhas
                        </Typography>   
                    </Box>

                    <Box sx={{display:'flex', width:'230px', justifyContent:'space-between'}}>

                        <Typography variant="body1" >
                            R$ 45,00
                        </Typography> 

                        
                        <Button variant = 'outlined' sx={{
                            marginBottom:   '0px', 
                            marginRight:    '0px', 
                            borderRadius:   '8px', 
                            width:          '90px', 
                            height:         '30px'
                        }} > 

                            <Typography variant='body1'>
                                remover
                            </Typography>
                        </Button>                           
                    </Box>

                </Box>







            </CardContent>



        </Box>
        




    </Box>

    )
}

export default CardCarrinho