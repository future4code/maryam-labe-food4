import * as React   from 'react';
import Typography   from '@mui/material/Typography';
import Box          from '@mui/material/Box';





const Endereco = () => {


    return (

    <Box sx={{ 
        marginTop:      '8px',
        marginBottom:   '8px',
        display:        'flex', 
        flexDirection:  'column',
        height:         '78px', 
        width:          '343px', 
    }}>
        <Typography color='primary.main'> 
            Bullguer Vila Madalena
        </Typography>

        <Typography color='primary.cinza'> 
            R. Fraldique Coutinho, 1135 - Vila Madalena
        </Typography>

        <Typography color='primary.cinza'> 
            30 - 45 min
        </Typography>





    </Box>

    )
}

export default Endereco