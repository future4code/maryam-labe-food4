import Box          from '@mui/material/Box';
import Typography   from '@mui/material/Typography';

import styled from 'styled-components';

const Img = styled.img`
    max-width: 328px;
    max-height: 120px;

`

const Restaurante = (props) => {


    return (
    <Box sx={{
        borderRadius: '8px',
        border: '1px solid #b8b8b8',
        margin: '0',
        marginBottom:   '1.5vh',
        marginLeft:     '4.4vw',
        paddingBottom:  '1.5vh',
        width:          '91vw',
        height:         '30vh',
    }}>

        <Box sx={{
        maxWidth:  '91vw',
        maxHeight: '19vh',
        }}>

            <Img src={props.img} alt="Imagem do restaurante" />

        </Box>

        <Box sx={{
            display:'flex', 
            flexDirection:'column',
            marginTop:  '8px',
            marginLeft: '16px',
            marginRight:    '16px',
            marginBottom:   '8px'
        }}>

            <Typography gutterBottom variant="body1" component="div" color='primary.main'>
                {props.nome}
            </Typography>

            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant="body2" color="text.secondary">
                    {props.tempo} min
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Frete: R${props.entrega},00
                </Typography>
            </Box>

        </Box>



    </Box>
    )
};

export default Restaurante;