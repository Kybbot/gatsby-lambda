import React from "react";
import PropTypes from "prop-types";

const CustomRadio = ({ value, text, toggle, isChecked }) => {
	return (
		<label className="custom-radio">
			<input
				className={`custom-radio__input ${isChecked ? 'custom-radio__input-checked' : ''}`}
				type="radio"
				value={value}
				onClick={toggle}
			/>
			<span className="custom-radio__text">{text}</span>
		</label>
	);
};

CustomRadio.propTypes = {
	value: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	toggle: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default CustomRadio;
