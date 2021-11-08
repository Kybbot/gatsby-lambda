import React, { useState, useEffect } from "react";

import Button from "../Button/Button";
import CustomRadio from "../CustomRadio/CustomRadio";
import useInput from "../hooks/useInput";

const Form = () => {
	const [backDevs, setBackDevs] = useState(null);
	const [frontDevs, setFrontDevs] = useState(null);
	const [weeks, setWeeks] = useInput("4");
	const [price, setPrice] = useState(0);

	useEffect(() => {
		const oneDevInWeek = 400;

		const backendDevsPrice = backDevs * oneDevInWeek;
		const frontendDevsPrice = frontDevs * oneDevInWeek;

		if (weeks > 12) {
			setPrice((backendDevsPrice + frontendDevsPrice) * 12);
			return;
		}

		setPrice((backendDevsPrice + frontendDevsPrice) * Number(weeks));
	}, [backDevs, frontDevs, weeks]);

	const toggleRadio = (number, type) => {
		if (type === "front") {
			setFrontDevs(number === frontDevs ? null : number);
		}

		if (type === "back") {
			setBackDevs(number === backDevs ? null : number);
		}
	};

	const getRadioButtons = (number, type) => {
		const components = [];
		const currentValue = type === "front" ? frontDevs : backDevs;

		for (let i = 1; i <= number; i++) {
			components.push(
				<CustomRadio
					key={i}
					isChecked={i === currentValue}
					name={type}
					value={i}
					text={i}
					toggle={() => toggleRadio(i, type)}
				/>
			);
		}

		return components;
	};

	return (
		<form className="form" id="form">
			<fieldset className="form__fieldset">
				<legend className="form__legend">How many backend devs do you need?</legend>
				{getRadioButtons(5, "back")}
			</fieldset>
			<fieldset className="form__fieldset">
				<legend className="form__legend">How many frontend devs do you need?</legend>
				{getRadioButtons(5, "front")}
			</fieldset>
			<fieldset className="form__fieldset">
				<label className="form__label" htmlFor="numberInput">
					How many weeks do you plan to spend?
				</label>
				<input
					type="number"
					name="weeks"
					step="1"
					min="1"
					value={weeks}
					onChange={setWeeks}
					className="form__input"
					id="numberInput"
				/>
				<span>{weeks === "1" ? "week" : "weeks"}</span>
			</fieldset>
			<fieldset className="form__fieldset">
				<legend className="form__legend form__legend--max">Total price 🚀</legend>
				<output className="form__price" name="finalPrice">
					{`$${new Intl.NumberFormat("ru-RU").format(price)}${weeks > 12 ? "+" : ""}`}
				</output>
				<div className="line"></div>
			</fieldset>
			<p className="form__text">Let’s create the future together!</p>
			<Button type="submit">Contact us</Button>
		</form>
	);
};

export default Form;
