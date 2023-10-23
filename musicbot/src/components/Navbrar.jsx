import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <img src="https://image.freepik.com/free-vector/purple-3d-music-icon-violet-isolated-button-vector-illustration_541075-149.jpg" className="nav--icon" />
            <h3 className="nav--logo_text">MusicBot</h3>
            <h4 className="nav--title">About us</h4>
            <h4 className="nav--title">Our goals</h4>
            <h4 className="nav--title">Contacts</h4>
            <div><button>Learn More</button></div>
        </nav>
    )
}