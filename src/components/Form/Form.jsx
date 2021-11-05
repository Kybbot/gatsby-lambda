import React from "react";

import Button from "../Button/Button";
import CustomRadio from "../CustomRadio/CustomRadio";

const Form = () => {
	const outputEl = React.useRef(null);
	const inputText = React.useRef(null);

	const [form, setForm] = React.useState({
		backendDevs: null,
		frontendDevs: null,
		weeks: 4,
	});

	const [radioInpitsState, setRadioInputsState] = React.useState({
		backendDevs: null,
		frontendDevs: null,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const changeRadioInputsState = (event) => {
		const input = event.target;
		const { name } = input;

		if (radioInpitsState[name] === input) {
			input.checked = false;
			setRadioInputsState((state) => ({
				...state,
				[name]: null,
			}));
			setForm((state) => ({
				...state,
				[name]: null,
			}));
		} else {
			setRadioInputsState((state) => ({
				...state,
				[name]: input,
			}));
		}
	};

	const countPrice = React.useCallback(() => {
		const oneDevInWeek = 400;
		const locales = "ru-RU";
		let result;

		const backendDevsPrice = +form.backendDevs * oneDevInWeek;
		const frontendDevsPrice = +form.frontendDevs * oneDevInWeek;

		form.weeks === "1"
			? (inputText.current.textContent = "week")
			: (inputText.current.textContent = "weeks");

		if (form.weeks > 12) {
			result = new Intl.NumberFormat(locales).format((backendDevsPrice + frontendDevsPrice) * 12);

			outputEl.current.textContent = "$" + result + "+";
		} else {
			result = new Intl.NumberFormat(locales).format(
				(backendDevsPrice + frontendDevsPrice) * form.weeks
			);

			outputEl.current.textContent = "$" + result;
		}
	}, [form]);

	React.useEffect(() => {
		countPrice();
	}, [form, countPrice]);

	return (
		<form className="form" id="form">
			<fieldset className="form__fieldset">
				<legend className="form__legend">How many backend devs do you need?</legend>
				<CustomRadio
					name="backendDevs"
					value="1"
					text="1"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="backendDevs"
					value="2"
					text="2"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="backendDevs"
					value="3"
					text="3"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="backendDevs"
					value="4"
					text="4"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="backendDevs"
					value="5"
					text="5"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
			</fieldset>
			<fieldset className="form__fieldset">
				<legend className="form__legend">How many frontend devs do you need?</legend>
				<CustomRadio
					name="frontendDevs"
					value="1"
					text="1"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="frontendDevs"
					value="2"
					text="2"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="frontendDevs"
					value="3"
					text="3"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="frontendDevs"
					value="4"
					text="4"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
				<CustomRadio
					name="frontendDevs"
					value="5"
					text="5"
					onChangeRadio={handleInputChange}
					clickHandler={changeRadioInputsState}
				/>
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
					value={form.weeks}
					onChange={handleInputChange}
					className="form__input"
				/>
				<span ref={inputText}>weeks</span>
			</fieldset>
			<fieldset className="form__fieldset">
				<legend className="form__legend form__legend--max">Total price 🚀</legend>
				<output ref={outputEl} className="form__price" name="finalPrice">
					$14400
				</output>
				<div className="line"></div>
			</fieldset>
			<p className="form__text">Let’s create the future together!</p>
			<Button type="submit">Contact us</Button>
		</form>
	);
};

export default Form;
