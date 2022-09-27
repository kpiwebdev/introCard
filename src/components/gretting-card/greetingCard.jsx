import React from 'react';
import CountUp from 'react-countup';

const GreetingCard = () => {
    return (
        <div className="wrapper">
            <h1 style={{margin: "0"}}>Hi, my name is Maksym Khomenko</h1>
            <CountUp style={{fontSize: "40px"}} start={0} end={20} duration={2.75} decimal="," suffix=" y.o"/>

            <p style={{marginTop: "15vh"}}>
                <div>
                    <strong className="counter"><CountUp start={2016} end={2020} duration={2.75} /> - <CountUp start={2020} end={2024} duration={2.75} /></strong>
                </div>
                I am a student of <i>“Igor Sikorsky Kyiv Polytechnic Institute” </i>
                which currently obtains a degree&#127891; <br/>
                at  <strong>Faculty of Applied Mathematics&#127922;</strong><br/>
                ["КП-03" group]
            </p>

            <br/>


            <ul style={{display:"flex", flexDirection: "row", alignSelf: "center", listStyle:"none", gap: "16px"}}>
                <li><strong>Hobbies: </strong></li>
                <li><u> Movie watching</u></li>
                <li>Essay Writing</li>
                <li>Playing guitar</li>
                <li>Chess</li>
                <li>Bike riding</li>
            </ul>

        </div>
    );
};

export default GreetingCard;