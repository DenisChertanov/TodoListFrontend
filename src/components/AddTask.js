import React from 'react';
import '../styles/AddTaskStyle.css';
import ImgButton from "./UI/Button/ImgButton";
import DefaultInput from "./UI/Input/DefaultInput";

const AddTask = () => {
    return (
        <div className="addTask">
            <DefaultInput style={{
                backgroundColor: "#32383B",
                height: "40px",
                width: "200px",
                marginTop: "0px",
                marginRight: "0px"
            }}/>
            <ImgButton type="button" style={{
                backgroundColor: "#32383B",
                position: "absolute",
                left: "100%",
                top: "50%",
                transform: "translate(-100%, -50%)",
                paddingRight: "10px"
            }}>
                <i className="fas fa-plus" style={{color: "#AFB1B3"}}/>
            </ImgButton>
        </div>
    );
};

export default AddTask;