import React from "react";
import {MessageDataType} from "./HW1";
import s from "./Message.module.css"

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <div className={s.wrapperLogo}>
                <div className={s.logo}><img src={props.avatar} alt=""/></div>
            </div>

            <div className={s.wrapper}>
                <div className={s.wrapperName}>
                    <div className={s.name}>{props.name}</div>
                </div>


                <div className={s.wrapperMessage}>
                    <div className={s.messages}>{props.message}</div>
                </div>


                <div className={s.wrapperTime}>
                    <div className={s.time}>{props.time}</div>
                </div>


            </div>
        </div>
    );
}

export default Message;
