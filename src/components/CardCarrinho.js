import * as React       from 'react';
import CardContent      from '@mui/material/CardContent';
import CardMedia        from '@mui/material/CardMedia';
import Button           from '@mui/material/Button';
import Typography       from '@mui/material/Typography';
import Box              from '@mui/material/Box';
import { useContext }   from "react"
import {GlobalContext}  from "../contexts/GlobalContext";




const CardCarrinho = () => {

    const { carrinho, setCarrinho } = useContext(GlobalContext);
    const tamanhoCart   =   carrinho.length
    let contador = 0


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
                image={carrinho[contador].photoUrl}
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
                            {carrinho[contador].name}
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
                            {carrinho[contador].quantity}
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            {carrinho[contador].description}
                        </Typography>   
                    </Box>

                    <Box sx={{display:'flex', width:'230px', justifyContent:'space-between'}}>

                        <Typography variant="body1" >
                            R${carrinho[contador].price},00
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