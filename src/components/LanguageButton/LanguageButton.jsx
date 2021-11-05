import React from "react";
import PropTypes from "prop-types";

const LanguageButton = ({ children, additionalClass, ...props }) => {
	return (
		<button {...props} className={`languageButton ${additionalClass ? additionalClass : ""}`}>
			{children}
		</button>
	);
};

LanguageButton.propTypes = {
	children: PropTypes.node.isRequired,
	additionalClass: PropTypes.string,
};

LanguageButton.defaultProps = {
	additionalClass: "",
};

export default LanguageButton;
