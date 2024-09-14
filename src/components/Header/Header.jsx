import img from "../image/Foody Zone.svg"
import './header.css'
import { animated, useSpring } from '@react-spring/web'

export default function Header() {

    const logo = useSpring({
        from: { y: -1000 },
        to: { y: 20 }
    })

    const input = useSpring({
        from: { x: 900 },
        to: { x: -10 }
    })

    return (
        <div>
            <header>
                <nav className="header-navbar">
                    <animated.div style={{ ...logo }}>
                        <a href="#!">
                            <img src={img} alt="" />
                        </a>
                    </animated.div>
                    <animated.div style={{...input}}>
                        <input type="text" placeholder="Search Food" />
                    </animated.div>
                </nav>
                <div className="lunches">
                    <button>All</button>
                    <button>Breakfast</button>
                    <button>Lunch</button>
                    <button>Dinnbuttton</button>
                </div>
            </header>
        </div>
    )
}