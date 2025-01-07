import PropTypes from "prop-types";

const SubGreet = (props) => {
    return <div>Hello {props.name} !</div>
}
SubGreet.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default SubGreet;