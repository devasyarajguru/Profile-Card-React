import profile from "../images/a.jpeg";
export default function Header()

{
    return(
        <>
            <div className="header-container">
                <img src={profile} alt="image" width="500px" height="400px"></img>
            </div>
        </>
    )
}