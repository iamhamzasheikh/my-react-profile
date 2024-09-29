import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div className='myWork' id='work'>

            <div className="work-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>

            <div className="work-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>

            <div className="work-btn">
                <p>Show More </p>
                <img src={arrow_icon} alt="" srcset="" />
            </div>

        </div>
    )
}

export default MyWork
