import React from "react";
import '../../css/views/public/Home.css';
import '../../css/layouts/public/Menu.css';
import { useNavigate } from 'react-router';

const HomeButton = (props) => {

    let navigate = useNavigate();

    function onClickButton() {
        if (props.link == 'contacte' || props.link == 'reserves' || props.link == 'com-arribar') {
            props.f_clickMenu(false);
        } else {
            props.f_clickMenu(true);
        }
        navigate(props.link);
    }

	return (
		<div className={"HomeButton-container " + props.extraClass} onClick={onClickButton}>
			<div className="HomeButton-text">{props.text}</div>
		</div>
	)
}

export default HomeButton;