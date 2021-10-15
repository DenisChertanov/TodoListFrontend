import React, {useState} from 'react';
import '../styles/LeftAddInputStyle.css';
import ImgButton from "./UI/Button/ImgButton";
import DefaultInput from "./UI/Input/DefaultInput";

const LeftAddInput = (props) => {
    const [newTaskTitle, setNewTaskTitle] = useState(['']);

    return (
        <div className="leftAddInput">
            <DefaultInput style={{
                backgroundColor: "#32383B",
                height: "40px",
                width: "200px",
                marginTop: "0px",
                marginRight: "0px"
            }} onChange={(event) => setNewTaskTitle(event.target.value)}/>
            <ImgButton type="button" style={{
                backgroundColor: "#32383B",
                position: "absolute",
                left: "100%",
                top: "50%",
                transform: "translate(-100%, -50%)",
                paddingRight: "10px"
            }} onClick={() => props.create(newTaskTitle)}>
                <i className="fas fa-plus" style={{color: "#AFB1B3"}}/>
            </ImgButton>
        </div>
    );
};

export default LeftAddInput;