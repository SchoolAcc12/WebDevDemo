import './styles/HomePage.css'
import hotelImg from './assets/hotel.jpg'

function NavBar(){
    return(
        <nav className='navbar'>

            <div className='logo'>
                <strong><p id="logo">WorldHotels.</p></strong>
            </div>

            <div className='links'>
                <a>Home</a>
                <a>About</a>
                <a>FAQ</a>
            </div>

            <div className='signupbut'>
                <button id="signupbut">Sign Up</button>
            </div>

        </nav>
    );
}

function MainPage(){
    return(
        <div className='main-page'>

            <div className='left-section'>
                <strong><h1 id="title">Build a trip you trust</h1></strong>
                <strong><p id="titlep">World Hotel saves you time and money on expenses,
                    invoices and makes booking a trip as easy as clicking
                    a few buttons.
                </p>
                </strong>
                
                <div className='get-started'>
                    <input id="emailinput"
                    placeholder=' Your e-mail' type='email'></input>

                    <button id="get-started-but">Get Started</button>
                </div>

                <div className='destinations-info'>
                    <div className='destinations'>
                        <h3>100+</h3>
                        <h4 className='under-text'>Destinations</h4>
                    </div>

                    <div className='hotels'>
                        <h3>500+</h3>
                        <h4 className='under-text'>Hotels</h4>
                    </div>
                </div>
            </div>

            <div className='right-section'>
                <img src={hotelImg} id='home-page-img'></img>
            </div>

        </div>
    );
}


export default function HomePage(){

    return(
        <div className='home-page'>
            <NavBar />
            <MainPage />
        </div>
    );
}