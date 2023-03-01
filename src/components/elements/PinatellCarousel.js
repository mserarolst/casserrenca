import React, { useEffect, useState } from "react";
import { SvgIcon, Typography } from "@mui/material";
import '../../css/views/public/PinatellCarousel.css';
import { useNavigate } from 'react-router';
import StraightIcon from '@mui/icons-material/Straight';
import { ReactComponent as Fletxa } from '../../assets/icon-fletxa.svg';

const PinatellCarousel = (props) => {

    const [selected, setSelected] = useState(0);
    const [pixels, setPixels] = useState(0);
    const [expand, setExpand] = useState(false);
    const [background, setBackground] = useState('');
    const [clear, setClear] = useState('');
    const imageSize = 230;

    useEffect(() => {
		if (expand) {
            props.setHideMenu(true);
		}
        
    }, []);

    useEffect(() => {
		if (expand) {
            setBackground('clear-background');
                setClear('clear');

            props.setHideMenu(true);
		}
        else {
            setBackground('');
                setClear('');
        }
        
    }, [expand]);

    function onClickImage(index) {
        setSelected(index);
        setPixels(index * imageSize * (-1));
        if (index == selected) setExpand(true);
    }

    function onClickImageBig() {
        if (expand) {
            setExpand(false);
            props.setHideMenu(false);
        }
    }

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

    function onClickLeft() {
        setPixels(pixels - (imageSize * (-1)));
    }

    function onClickRight() {
        setPixels(pixels + (imageSize * (-1)));
    }

	return (
		<div className={"PinatellCarousel-container"}>
            <div className={"PinatellCarousel-content "}>
                <div className="PinatellCarousel-carousel">
                    {props.images.map((image, index) => {
                        return (
                            <div key={index} className={"PinatellCarousel-image " + (selected == index ? 'big-selected ' : ' ') + (expand ? 'image-big' : '')} >
                                <img src={image} className={'PinatellCarousel-img ' + (expand ? 'image-auto' : '')}/>
                            </div>
                        )
                    })}
                </div>
                <div className={"PinatellCarousel-background " + background} onClick={()=> {onClickImageBig()}} style={{cursor: (expand ? 'pointer' : 'unset')}}></div>
                <div className={"MiniCarousel-container " + clear}>
                    <div className="MiniCarousel-arrows">
                            <StraightIcon htmlColor="#fff" className='MiniCarousel-arrow-left' onClick={() => {onClickLeft()}}/>
                            <StraightIcon htmlColor="#fff" className='MiniCarousel-arrow-right' onClick={() => {onClickRight()}}/>
                    </div>
                    <div className="MiniCarousel-overflow">
                        <div className="MiniCarousel-carousel" style={{transform: 'translateX('+pixels+'px)', transition: 'transform 0.5s ease-in-out'}}>
                            {props.images.map((image, index) => {
                                return (
                                    <div key={index} className="MiniCarousel-image">
                                        <img src={image} className={'MiniCarousel-img '}/>
                                        <div className={"MiniCarousel-background " + (selected == index ? 'selected' : 'not-selected')} onClick={() => {onClickImage(index)}}></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {expand ? <SvgIcon component={Fletxa} htmlColor="#fff" className='PinatellCarousel-arrow-left' inheritViewBox  onClick={() => {onClickLeftBig()}}/> : null}
                {expand ? <SvgIcon component={Fletxa} htmlColor="#fff" className='PinatellCarousel-arrow-right' inheritViewBox  onClick={() => {onClickRightBig()}}/> : null}
                
            </div>
		</div>
	)
}

export default PinatellCarousel;