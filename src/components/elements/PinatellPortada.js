import React, { useEffect, useState } from "react";
import { SvgIcon, Typography } from "@mui/material";
import '../../css/views/public/PinatellPortada.css';
import { useNavigate } from 'react-router';
import StraightIcon from '@mui/icons-material/Straight';
import { ReactComponent as Fletxa } from '../../assets/icon-fletxa.svg';

const PinatellPortada = (props) => {

    const [selected, setSelected] = useState(0);
    const [expand, setExpand] = useState(false);
    const imageSize = 230;

    useEffect(() => {
		setTimeout(() => {
            if (selected == props.images.length-1) setSelected(0);
            else setSelected(selected+1);
        }, 6000);
        
    }, [selected]);

    function onClickLeftBig() {
        if (selected <= 0) {
            setSelected(props.images.length-1)
        }
        else {
            setSelected(selected-1);
        }
    }

    function onClickRightBig(index) {
        if (selected >= props.images.length-1) {
            setSelected(0)
        }
        else {
            setSelected(selected+1);
        }
    }

	return (
		<div className={"PinatellPortada-container"}>
            <div className={"PinatellPortada-content "}>
                <div className="PinatellPortada-carousel">
                    {props.images.map((image, index) => {
                        return (
                            <div key={index} className={"PinatellPortada-image " + (selected == index ? 'image-selected-portada ' : 'image-not-selected-portada')} >
                                <img src={image} className={'PinatellPortada-img ' + (expand ? 'image-auto' : '')}/>
                            </div>
                        )
                    })}
                </div>
                <div className={"PinatellPortada-background "}></div>
                {expand ? <SvgIcon component={Fletxa} htmlColor="#fff" className='PinatellPortada-arrow-left' inheritViewBox  onClick={() => {onClickLeftBig()}}/> : null}
                {expand ? <SvgIcon component={Fletxa} htmlColor="#fff" className='PinatellPortada-arrow-right' inheritViewBox  onClick={() => {onClickRightBig()}}/> : null}
                
            </div>
		</div>
	)
}

export default PinatellPortada;