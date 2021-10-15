import React from 'react';
import VerticalCenteredLabel from "./UI/Label/VerticalCenteredLabel";
import ImgButton from "./UI/Button/ImgButton";
import '../styles/TaskShortViewStyle.css';

const TaskShortView = (props) => {
    return (
        <div className="taskShortView">
            <VerticalCenteredLabel
                style={{
                    width: "200px",
                    overflow: "hidden",
                    display: "flex",
                    textOverflow: "ellipses",
                }}>
                {props.task.title}
            </VerticalCenteredLabel>
            <ImgButton type="button" style={{
                backgroundColor: "#3E4447",
                left: "100%",
                top: "50%",
                transform: "translate(-100%, -50%)"
            }} onClick={() => props.remove(props.task)}>
                <i className="fas fa-trash-alt" style={{color: "#E62F4B"}}/>
            </ImgButton>
        </div>
    );
};

export default TaskShortView;