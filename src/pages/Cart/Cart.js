import React            from "react";
import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';
import Typography       from '@mui/material/Typography';
import Radio            from '@mui/material/Radio';
import RadioGroup       from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl      from '@mui/material/FormControl';

import CardCarrinho     from '../../components/CardCarrinho';
import Endereco         from '../../components/Endereco';
import useProtectedPage from "../../hooks/useProtectedPage"


import {useState}       from 'react'


const Cart = () => {
    useProtectedPage()
    const [temCarrinho,setCarrinho] = useState(true)



    return (

        <Box 
        sx={{
            display:        'flex',
            marginRight:    '0px',
            marginBottom:   '16px',
            flexDirection:  'column',
            alignItems:     'center',
            bgcolor:        'primary.lighter',
            maxWidth:       '98.5vw',
            minHeight:      '110vh'
        }}>
    

            <Box
            sx={{
                marginTop:      '-2vh',
                flexDirection:  'column',
                alignItems:     'center',
                justifyContent: 'center',
                width:          '100vw',
                height:         '64px',
                display:        'flex',
            }}>

                <Typography  color = "textPrimary" variant="h6"> Meu carrinho </Typography>
            
            </Box>


            <Box
            sx={{
                display:        'flex',
                flexDirection:  'column',
                alignItems:     'flex-start',
                justifyContent: 'center',
                bgcolor:        "fundoCinza.main",
                width:          '100%',
                height:         '76px',
                paddingLeft:    '4.5vw',
            }}>

                <Typography color='fundoCinza.contrastText'>Endereço de entrega</Typography>
                <Typography variant='bold'>Rua Alessandra Vieira, 34</Typography>

            </Box>

            <Box
            sx={{
                flexDirection:  'column',
                alignItems:     'center',
                width:          '100%',
                minHeight:      '42px',
                display:        'flex',
                marginTop:      '8px',
            }}>

                {temCarrinho?             
                (<Box> <Endereco /><CardCarrinho />  </Box> ):
                <Typography  color = "textPrimary" variant="body1"> Carrinho vazio </Typography>
                }





            </Box>

            <Box
            sx={{
                flexDirection:  'column',
                alignItems:     'flex-end',
                width:          '100%',
                height:         '18px',
                display:        'flex',
                marginRight:    '16px',
                marginBottom:   '18px',
                marginTop:      '33px',

            }}>
                <Typography  color = "textPrimary" variant="body1"> Frete R$0,00</Typography>
            </Box>


            <Box
            sx={{
                justifyContent:     'space-between',
                width:          '100%',
                height:         '18px',
                display:        'flex',
            }}>
                <Box sx={{     marginLeft: '8px'}}>                
                    <Typography  color = "textPrimary" variant="body1"> SUBTOTAL </Typography>
                </Box>

                <Box sx={{       marginRight: '8px'}}>                
                    <Typography  color = "primary" variant="body1"> R$0,00 </Typography>
                </Box>
            </Box>


            

            <Box
            sx={{
                flexDirection:  'column',
                alignItems:     'flex-start',
                width:          '92vw',
                height:         '20vh',
                display:        'flex',
                marginTop:      '24px',
            }}>

                
                <Typography  color = "textPrimary" variant="body1"> Forma de pagamento: </Typography>
                <Box sx={{ marginBottom:'3px', width: 'inherit',  height: '1px', border: '1px solid black'}}></Box>
                
                <FormControl component="fieldset">
                    <RadioGroup>
                        <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
                        <FormControlLabel value="Cartão" control={<Radio />} label="Cartão" />
                    </RadioGroup>
                </FormControl>

            </Box>
            
            <Button style={{minWidth: '323px'}} variant='contained' color='primary'>
            <Typography variant='button'>    
                Confirmar
            </Typography>
            </Button>

        </Box>
    );
};
    

export default Cart;
