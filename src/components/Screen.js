import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) =>{
    return(
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

<Screen value={calc.num ? calc.num : calc.res}/>

export default Screen;