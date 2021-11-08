import React, { FC } from "react";
import { CustomRadioProps } from "../../types/CustomRadio";

const CustomRadio: FC<CustomRadioProps> = ({ value, text, toggle, isChecked, name }) => {
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

export default CustomRadio;
