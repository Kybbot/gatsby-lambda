import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, additionalClass, ...props }) => {
	return (
		<button className={`button ${additionalClass ? additionalClass : ""}`} {...props}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	additionalClass: PropTypes.string,
};

Button.defaultProps = {
	additionalClass: "",
};

export default Button;
