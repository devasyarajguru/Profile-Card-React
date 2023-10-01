import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
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

                {/* Buttons */}
                        <div className="btn-container">
                        <button className="btn-linkedin social-btn"><LinkedInIcon fontSize='large' className='linkedin'></LinkedInIcon><span><a href="https://www.linkedin.com/in/devasya-rajguru-1a38b0211/">Linkedin</a></span></button>
                        <button className="btn-email social-btn"><EmailIcon fontSize='large' className='email'/><span><a href="">Email</a></span></button>
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