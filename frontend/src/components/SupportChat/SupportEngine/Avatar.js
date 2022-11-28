import React, { useState } from "react";
import { styles } from "./styles";
import denrlogo from "../../../images/denrlogo.png"

const Avatar = props => {

    const [hovered, setHovered] = useState(false)


    return (
        <div style={props.style}>
            <div
                className="transition-3"
                style={{
                    ...styles.avatarHello,
                    ...{
                        opacity: hovered ? '0' : '1',

                    }
                }}>
                How can we help you?
            </div>
            <div
                className='transition-3'
                onMouseEnter={() => setHovered(false)}
                onMouseLeave={() => setHovered(true)}
                onClick={() => props.onClick && props.onClick()}
                style={{
                    ...styles.chatWithMeButton,
                    ...{
                        border: hovered ? '1px solid #f9f0ff' : '4px solid green',
                        backgroundImage: `url(${denrlogo})`
                    }
                }}>

            </div>
        </div>
    )
}

export default Avatar;