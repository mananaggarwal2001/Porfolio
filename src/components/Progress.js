import React from 'react'
import '../CSS/Resume.css'
const Progress = (props) => {
    const { name, percentage } = props;
    return (
        <div class="progressclass">
            <div class="progresspercentage d-flex">
                <p>{name}</p>
                <span class="progresspecentage">{percentage}</span>
            </div>
            <div id="myProgress">
                <div id="myBar" class="fortypercent" style={{
                    width: percentage
                }}></div>
            </div>
        </div>
    )
}

export default Progress