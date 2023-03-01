import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Page from "../../components/layouts/Page";
import '../../css/views/public/Home.css';
import image from '../../assets/img/portada.png';
import line from '../../assets/img/line.png';
import anteriors from '../../assets/img/anteriors.png';
import mask from '../../assets/img/mask.png';
import maskportada from '../../assets/img/mask_portada.png';
import ItemCursa from "./Home/ItemCursa";
import Eliminadors from "./Home/Eliminadors";
import arrow from '../../assets/arrow.svg';

function Home() {
	const [value, setValue] = useState(1);

	const [selected, setSelected] = useState([{
		id: 1,
		nom: 'BTT LLARGA',
		imatge: line,
		distancia: 21,
		desnivell: 800,
		hora_sortida: '08:00h',
		hora_arribada: '09:30h'

	}]);

	const [data, setData] = useState([
		{
			id: 1,
			nom: 'BTT LLARGA',
			imatge: line,
			distancia: 21,
			desnivell: 800,
			hora_sortida: '08:00h',
			hora_arribada: '09:30h'

		},
		{
			id: 2,
			nom: 'BTT CURTA',
			imatge: line,
			distancia: 15,
			desnivell: 300,
			hora_sortida: '08:00h',
			hora_arribada: '09:30h'

		}
	])

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setSelected(data.filter(item => 
			item.id == newValue
		));
	};
	
	return (
		<Page title="La Casserrenca">
			<Box className='Home-portada' sx={{height: (window.innerHeight - 104 + 'px')}}>
				<div className="Home-portada-mask">
					<img src={maskportada} className='Home-img'/>
				</div>
				<div className="Home-portada-title">
					<div className="Home-portada-top">
						<Typography variant="h2" color='#fff'>Pròxima edició</Typography>
						<Typography variant='h2' color='#fff'>18 maig 2023</Typography>
						<div className="Home-portada-separator"></div>
						<Typography variant='h3' color='#fff'>244 dies 04h 23m 07s</Typography>
					</div>
					<div className="Home-portada-bottom">
						<Typography variant="h4" color='#fff' marginBottom='50px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. 
						</Typography>
						<img src={arrow} className=''/>
					</div>
				</div>
				<img src={image} className='Home-img'/>
			</Box>
			<Box className='Home-cursa'>
				<Typography variant='h2' className="Home-cursa-title">La Casserrenca 2023</Typography>
				<Typography variant='h3' className="Home-cursa-title" marginTop='10px'>Estàs preparat?</Typography>
				<Typography variant='body1' className="Home-cursa-subtitle" marginTop='40px'>165Km marcats, +4500m de desnivell, 95% corriols </Typography>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons
					aria-label="visible arrows tabs example"
				>
					{data?.map((item) => (
						<Tab
							label={
								item.nom
							}
							value={item.id}
						/>
					))}
				</Tabs>
				<ItemCursa data={selected[0]}/>
			</Box>
			<Eliminadors />
			<div className="Home-anteriors">
				<div className="Home-anteriors-content">
					<Typography variant="h3" color='#fff'>Edicions anteriors</Typography>
					<div className="Home-button">
						<Typography variant="body1" className="Home-button-text">Veure més</Typography>
					</div>
				</div>
				<div className="Home-mask">
					<img src={mask} className='Home-img'/>
				</div>
				<div className="Home-anteriors-img">
					<img src={anteriors} className='Home-img-anteriors'/>
				</div>
			</div>
		</Page>
	);
}

export default Home;
