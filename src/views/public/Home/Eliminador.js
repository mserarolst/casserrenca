import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Page from "../../../components/layouts/Page";
import '../../../css/views/public/Home/Eliminador.css';

function Eliminador(props) {
	
    
	
	return (
        <Box className='Eliminador-container'>
            <div className="Eliminador-round">
                <div className="Eliminador-number">{props.data.number}</div>
            </div>
            <Typography variant="h3" color='#fff' className="Eliminador-title">{props.data.title}</Typography>
            <Typography variant="body1" color='#fff' className="Eliminador-text">{props.data.text}</Typography>
            
        </Box>
	);
}

export default Eliminador;
