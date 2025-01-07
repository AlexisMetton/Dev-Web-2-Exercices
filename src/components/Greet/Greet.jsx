import PropTypes from "prop-types";
import SubGreet from "../SubGreet/SubGreet";

const Greet = (props) => {
    return (
        <>
            <SubGreet 
                name={props.name}
            />
            <div>{props.children}</div>
        </>
    )
}
Greet.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default Greet;