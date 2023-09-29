import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import styled from 'styled-components';

// const StyledLinkedin = styled(LinkedInIcon)
// {
//     ` 
//         font-size: 2rem;
//         color:red;
//     `
// }
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
                   <a>Website Link</a> 
                </span>

                {/* Buttons */}
                <div className="btn-container">
                <button className="btn-linkedin social-btn"><LinkedInIcon fontSize='large' className='linkedin'></LinkedInIcon><span>Linkedin</span></button>
                <button className="btn-email social-btn"></button>
                </div>

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