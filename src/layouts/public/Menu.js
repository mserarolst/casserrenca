import { Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import React, { useEffect, useState } from "react";
import '../../css/views/public/Home.css';
import '../../css/layouts/public/Menu.css';
import { useNavigate } from 'react-router';
import LogoIcon from "../../components/elements/LogoIcon";
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import shopcar from '../../assets/shopcar.svg';
import logo from '../../assets/logo.png';


const Menu = (props) => {

	const [animation, setAnimation] = useState(true);

	function onClickMenu() {
		props.f_setOpen(!props.open);
	}


	return (
		<Box className={"Menu-container " + (props.open ? 'menu-opened' : 'menu-closed')}>
			<div className="Menu-header">
				<div className="Menu-Item" style={{justifyContent: 'flex-start', marginLeft: '10%'}}>
					<div className="Menu-Item-fons" style={{cursor: 'pointer'}} onClick={onClickMenu}>
						{props.open ? <img src={close} className=''/> : <img src={menu} className=''/>}
					</div>
				</div>
				<div className="Menu-Item" style={{justifyContent: 'center'}}>
					<img src={logo} className=''/>
					
				</div>
				<div className="Menu-Item" style={{justifyContent: 'flex-end', marginRight: '10%'}}>
					<div className="Menu-Item-fons" style={{marginRight: '20px', color:'#fff'}}>
						Inscripcions
					</div>
					<div className="Menu-Item-fons">
						<img src={shopcar} className=''/>
					</div>
				</div>
			</div>
			<div className={"Menu-content " + (props.open ? 'menu-open' : 'menu-close')}>
				{props.items.map((item, index) => {
					return (
						<div key={index} className="Menu-content-item">
							<Typography variant='menu' className="Menu-content-item-text">{item.title}</Typography>
						</div>
					)
				})}
				<div className="Menu-content-social">
					<Typography variant='menuSocial' className="Menu-content-social-text">{'Youtube'}</Typography>
					<Typography variant='menuSocial' className="Menu-content-social-text" style={{marginLeft: '20px'}}>{'Instagram'}</Typography>
				</div>
			</div>
		</Box>
	);
}

export default Menu;
