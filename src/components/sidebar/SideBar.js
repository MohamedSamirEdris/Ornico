import './sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt="" />
                <p>My grandma was talkin' in her sleep last night, and her rhymes were smoother than yours.
                    LOL, Kidding.
                    I'm not much of a lyricist or anythin'... But I "think" raps should have unity and revolve around some topic instead of throwin' some random lines out there.
                    Nice rap though, just refine it a bit.
                    And again, I don't have to be taken seriously, I'm not one who hangs out in the Freestyle forum.</p>
            </div>
            <div className="sidebarTitle">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
            </div>

            </div>
        </div>
    )
}
