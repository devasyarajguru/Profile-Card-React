import profile from "../images/img1.jpg";
export default function Header()

{
    return(
        <>
            <div className="header-container">
                <img src={profile} alt="image" width="500px" height="300px"></img>
            </div>
        </>
    )
}