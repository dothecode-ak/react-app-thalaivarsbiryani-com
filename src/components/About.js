import React, { useEffect } from "react";
const About = (props) => {
    const title = props.title;
    const display = props.display;
    useEffect(() => {
        document.title = title;
    });
    return (<>
        <div id="about">
            <p className="menuTextHead" style={{ display: display }}>ABOUT US</p>
            <img className="aboutImg" src="assets/About.png" alt="" />
            <div className="aboutDownText">
                <p className="aboutText">Inspired by the tale of Chinnasami Selvam and being biryani lovers,
                    we sought to rediscover the legendary taste and bring it to you.</p>

                <p className="aboutText">Legend has it that Chinnasami Selvam was known as Thalaivar by his community
                    for his truly OUTSTANDING biryanis.  Born of a Tamil lineage that had migrated to Nellore for
                    opportunities, the ambitious young Chinnasami moved from
                    Nellore to work in the kitchens of the Nizam ruler of
                    Hyderabad nearly 100 years ago. His talents as a cook
                    quickly brought him acclaim and moved him through the
                    ranks as his culinary innovations delighted
                    the palettes of the court.</p>
                <p className="aboutText">After 17 glorious years, he returned to Nellore
                    to start his family. With him, he brought the recipes
                    he had created for the Nizams and perfected his
                    21 spice masala by incorporating the traditions
                    of Nellore and his Tamil roots.</p>

                <p className="shareHeadtext">Strong roots, flavourful biryanis.
                    Thalaivars</p>

            </div>
        </div>
    </>);
}

export default About;