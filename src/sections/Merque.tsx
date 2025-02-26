import Marquee from "react-marquee-slider";
import { skills } from '../constants/index'
import MarqueeText from "../components/MarqueeText";

const Merque = () => {
    const handleInit = () => {
        console.log("Marquee initialized");
    };

    const handleFinish = () => {
        console.log("Marquee finished");
    };

    return (
        <div className="border border-[#292929] py-5 mb-22">
            <Marquee
                direction={"rtl"}
                velocity={20}
                scatterRandomly={false}
                resetAfterTries={0}
                onInit={handleInit}
                onFinish={handleFinish}
            >
                {
                    skills.map(item => (
                        <MarqueeText key={item.id} text={item.title} />
                    ))
                }
            </Marquee>
        </div>
    )
}

export default Merque
