import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer()
{
    return(
        <>
            <div className="footer-container">
               <TwitterIcon   fontSize='large' className='footer-icons'/>
               <FacebookIcon   fontSize='large' className='footer-icons'/>
               <GitHubIcon  fontSize='large' className='footer-icons' />
               <InstagramIcon  fontSize='large'  className='footer-icons'/>
            </div>
        </>
    )
}