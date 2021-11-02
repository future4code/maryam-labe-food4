import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';




const Endereco = () => {

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