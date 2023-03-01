import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Page from "../../../components/layouts/Page";
import '../../../css/views/public/Home/ItemCursa.css';

function ItemCursa(props) {
	
    
	
	return (
        <Box className='ItemCursa-portada' marginTop='40px'>
            <Typography variant="h4">{props.data.distancia + 'Km + ' + props.data.desnivell + 'm'}</Typography>
            <Typography variant="body1" marginTop='15px'>{'Hora sortida: ' + props.data.hora_sortida}</Typography>
            <Typography variant="body1">{'Arribada primer class: ' + props.data.hora_arribada}</Typography>
            <img src={props.data.imatge} className='Home-img'/>
            <div className="ItemCursa-items">
                <Typography variant="body1" color='#FF0090' className="ItemCursa-link">Inscripcions</Typography>
                <Typography variant="body1" color='#FF0090' className="ItemCursa-link">Recorregut</Typography>
                <Typography variant="body1" color='#FF0090' className="ItemCursa-link">Reglament</Typography>
            </div>
            <div className="ItemCursa-message">
                <Typography variant="body1">Aquest any tots els participants tindreu l'obsequi d'un bidó de la Casserrenca, apart els trofeus/medalles pels guanyadors/es de <span className="ItemCursa-link">{" l'eliminador."}</span> També sortejarem diferents regals dels col·laboradors.</Typography>
            </div>
        </Box>
	);
}

export default ItemCursa;
