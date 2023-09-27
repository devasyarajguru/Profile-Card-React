import linkedln from "../images/linkedin.svg";
import envelope from "../images/envelope.svg";
export default function Main()
{
    return(
        <>
        {/* Main Container */}
            <div className="container-main">
                {/* Name */}    
                <h3 className="h3-main">
                    Devasya Rajguru
                </h3>

                {/* Position */}    
                <span className="span-one content-main">
                    Frontend Developer
                </span>

                {/* Link */}    
                <span className="span-two content-main">
                    Website Link
                </span>

                {/* Buttons */}    
                <button className="btn-main social-btn"><img src={linkedln} alt="mySVG" className="svgs svg-linkedin"/></button>
                <button className="btn-main social-btn"><img src={envelope} alt="mySVG" className="svgs svg-email"/></button>

                {/* About & Interest */}    
                <div className="about-interest-main">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium et magni saepe id repudiandae aspernatur consectetur rerum? Asperiores fugiat accusamus eius error hic repellat quas facilis facere, culpa eum?</p>
                    <h3>Interest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium et magni saepe id repudiandae aspernatur consectetur rerum? Asperiores fugiat accusamus eius error hic repellat quas facilis facere, culpa eum?</p>
                </div>
            </div>
        </>
    )
}