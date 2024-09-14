import img from "../image/Rectangle 4.png"
import food1 from "../image/food-1.png"
import food2 from "../image/food-2.png"
import food3 from "../image/food-3.png"
import food4 from "../image/food-4.png"
import food5 from "../image/food-5.png"
import food6 from "../image/food-6.png"
import './main.css'
import { animated,useSpring } from '@react-spring/web'


export default function Main() {

    const spring = useSpring({
        from: { x: -2000 },
        to: { x: 50 },
    })

    

    return (
        <div>
            <main>
                <img className="imgMain" src={img} alt="" />
                <animated.div style={{...spring}}>
                    <div className="foods">
                        <div className="boiled-egg">
                            <div className="boiled-egg-img">
                                <img src={food1} alt="error" />
                            </div>
                            <div className="boiled-egg-texts">
                                <h4>Boiled Eggs</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
                                <b>$10.00</b>
                            </div>
                        </div>
                        <div className="boiled-egg">
                            <div className="boiled-egg-img">
                                <img src={food2} alt="error" />
                            </div>
                            <div className="boiled-egg-texts">
                                <h4>RAMEN</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
                                <b>$25.00</b>
                            </div>
                        </div>
                        <div className="boiled-egg">
                            <div className="boiled-egg-img">
                                <img src={food3} alt="error" />
                            </div>
                            <div className="boiled-egg-texts">
                                <h4>GRILLED CHICKEN</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
                                <b>$45.00</b>
                            </div>
                        </div>
                        <div className="boiled-egg">
                            <div className="boiled-egg-img">
                                <img src={food4} alt="error" />
                            </div>
                            <div className="boiled-egg-texts">
                                <h4>CAKE</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
                                <b>$18.00</b>
                            </div>
                        </div>
                        <div className="boiled-egg">
                            <div className="boiled-egg-img">
                                <img src={food5} alt="error" />
                            </div>
                            <div className="boiled-egg-texts">
                                <h4>BURGER</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
                                <b>$23.00</b>
                            </div>
                        </div>
                        <div className="boiled-egg">
                            <div className="boiled-egg-img">
                                <img src={food6} alt="error" />
                            </div>
                            <div className="boiled-egg-texts">
                                <h4>PANCAKE</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. </p>
                                <b>$25.00</b>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </main>
        </div>
    )
}