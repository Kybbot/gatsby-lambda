import React from "react";
import PropTypes from "prop-types";

const CustomRadio = ({ name, value, text, onChangeRadio, clickHandler }) => {
	return (
		<label className="custom-radio">
			<input
				className="custom-radio__input"
				type="radio"
				name={name}
				value={value}
				onChange={onChangeRadio}
				onClick={clickHandler}
			/>
			<span className="custom-radio__text">{text}</span>
		</label>
	);
};

CustomRadio.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onChangeRadio: PropTypes.func.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default CustomRadio;
