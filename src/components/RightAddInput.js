import React, {useState} from 'react';
import DefaultInput from "./UI/Input/DefaultInput";
import ImgButton from "./UI/Button/ImgButton";
import '../styles/RightAddInputStyle.css';

const RightAddInput = (props) => {
    const [newDashboardTitle, setNewDashboardTitle] = useState(['']);

    return (
        <div className="rightAddInput">
            <ImgButton type="button" style={{
                backgroundColor: "#32383B",
                marginRight: "0px"
            }} onClick={() => {
                props.create(newDashboardTitle);
                // setNewDashboardTitle('');
            }}>
                <i className="fas fa-plus" style={{color: "#AFB1B3", fontSize: "15px"}}/>
            </ImgButton>
            <DefaultInput style={{
                backgroundColor: "#32383B",
                height: "30px",
                width: "180px",
                marginTop: "0px",
                marginRight: "0px",
                marginLeft: "5px",
                paddingLeft: "0px"
            }} onChange={(event) => setNewDashboardTitle(event.target.value)}/>
        </div>
    );
};

export default RightAddInput;