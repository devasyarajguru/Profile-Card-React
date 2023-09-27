import twitter from "../images/twitter-x.svg";
import Github from "../images/github.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
export default function Footer()
{
    return(
        <>
            <div className="footer-container">
                <img src={twitter}></img>
                <img src={Github}></img>
                <img src={Instagram}></img>
                <img src={Facebook}></img>
            </div>
        </>
    )
}