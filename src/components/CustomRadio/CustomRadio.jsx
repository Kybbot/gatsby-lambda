import React from "react";
import PropTypes from "prop-types";

const CustomRadio = ({ value, text, toggle, isChecked, name }) => {
	return (
		<label className="custom-radio">
			<input
				name={name}
				className={`custom-radio__input ${isChecked ? "custom-radio__input-checked" : ""}`}
				type="radio"
				value={value}
				onClick={toggle}
			/>
			<span className="custom-radio__text">{text}</span>
		</label>
	);
};

CustomRadio.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.number.isRequired,
	toggle: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default CustomRadio;
