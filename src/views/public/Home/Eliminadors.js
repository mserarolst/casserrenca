import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Page from "../../../components/layouts/Page";
import '../../../css/views/public/Home/Eliminadors.css';
import Eliminador from "./Eliminador";

function Eliminadors(props) {
	
    const [eliminadors, setEliminadors] = useState([
        {
            number: 1,
            title: 'Lorem ipsum dolor sit amet',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            number: 2,
            title: 'Lorem ipsum dolor sit amet',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            number: 3,
            title: 'Lorem ipsum dolor sit amet',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ]);
	
	return (
        <Box className='Eliminadors-container'>
            <Typography variant="h4" className="Eliminadors-title" color='#fff'>QUÈ SÓN ELS ELIMINADORS?</Typography>
            <Grid container spacing={2}>
                {eliminadors.map((eliminador, index) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Eliminador key={index} data={eliminador} />
                        </Grid>
                        
                    )
                })}
            </Grid>
        </Box>
	);
}

export default Eliminadors;
