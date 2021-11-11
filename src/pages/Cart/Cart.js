import React, { useEffect, useLayoutEffect }            from "react";
import { useContext }   from "react"
import {GlobalContext}  from "../../contexts/GlobalContext";

import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';
import Typography       from '@mui/material/Typography';
import Radio            from '@mui/material/Radio';
import RadioGroup       from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl      from '@mui/material/FormControl';

import CardCarrinho     from '../../components/CardCarrinho';
import Endereco         from '../../components/Endereco';
import useProtectedPage from "../../hooks/useProtectedPage";


const Cart = () => {
    useProtectedPage()
    const { setActiveOrder, getActiveOrder, postOrder, carrinho, onChange, form, setCarrinho, userAddress, getFullAddress } = useContext(GlobalContext);

    useLayoutEffect(() => {
        getActiveOrder()
        setTimeout(() => {
          setActiveOrder('')
        }, 3000);
      }, []);


    let temCarrinho 
    carrinho? temCarrinho = true : temCarrinho = false
    useEffect(() => {
        getFullAddress()
        // getProfile()
        // getOrdersHistory()
      }, [])




      const postMyOder = () => {
        const listOfItens = carrinho.map((itemOnCart) => {
            return {quantity: itemOnCart.quantity, id: itemOnCart.id}
        })

        const id = carrinho[0].restaurantId

        const objectOfTheOrder = {
            paymentMethod: form.paymentMethod,
            products: listOfItens
        }
        console.log('requisição', objectOfTheOrder, id)
        postOrder(objectOfTheOrder, id)
      }

      const sumOfItens = () => {
        let totalValue = carrinho[0] !== undefined ? (carrinho[0].shipping) : (0)
        carrinho.map((itemOnCart) => {
           totalValue = (itemOnCart.quantity * itemOnCart.price) + totalValue
        })
     return totalValue.toFixed(2).replace(".", ",")
   }

    const renderItems = () =>{
        const mapItens = carrinho.map((itemOnCart) =>{
            return (
            <CardCarrinho 
            item={itemOnCart}
            /> 
            )
        })
        return mapItens
    }

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
                <Typography  color = "textPrimary" variant="h6"> 
                    Meu carrinho 
                </Typography> 
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
                <Typography color='fundoCinza.contrastText'>
                    Endereço de entrega
                </Typography>

                <Typography variant='bold'>
                    {userAddress? 
                    (userAddress.street? `${userAddress.street}, ${userAddress.number} - ${userAddress.neighbourhood}`: 'Carregando...')
                    : 'Carregando...'}   
                </Typography>
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
                (<Box> <Endereco /> {renderItems()}
                  </Box> ):
                <Typography  color = "textPrimary" variant="body1"> 
                    Carrinho vazio 
                </Typography>
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
                <Typography  color = "textPrimary" variant="body1"> 
                    Frete R$ {carrinho[0] !== undefined ? (carrinho[0].shipping.toFixed(2).replace(".", ",")) : ('0,00')}
                </Typography>
            </Box>


            <Box
            sx={{
                justifyContent:     'space-between',
                width:          '100%',
                height:         '18px',
                display:        'flex',
            }}>
                <Box sx={{     marginLeft: '8px'}}>                
                    <Typography  color = "textPrimary" variant="body1"> 
                        SUBTOTAL 
                    </Typography>
                </Box>

                <Box sx={{       marginRight: '8px'}}>                
                    {carrinho ? (
                        <Typography  color = "primary" variant="body1">
                            R$ {sumOfItens()}
                        </Typography>
                        ) : (
                        <Typography  color = "primary" variant="body1"> 
                            R$0,00
                        </Typography>)
                    }
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

                
                <Typography  color = "textPrimary" variant="body1"> 
                    Forma de pagamento: 
                </Typography>

                <Box sx={{ 
                    marginBottom:'3px', 
                    width: 'inherit',  
                    height: '1px', 
                    border: '1px solid black'}}
                    >

                </Box>
                
                <FormControl component="fieldset">
                    <RadioGroup
                    name="paymentMethod"
                    onChange={onChange}
                    >
                        <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                        <FormControlLabel value="creditcard" control={<Radio />} label="Cartão" />
                    </RadioGroup>
                </FormControl>

            </Box>
            
            <Button style={{minWidth: '323px'}} variant='contained' color='primary'>
                <Typography 
                variant='button'
                onClick={() => postMyOder()}
                >    
                    Confirmar
                </Typography>
            </Button>
        <Box sx={{height:'10vh'}} />
            

        </Box>
    );
};
    

export default Cart;
