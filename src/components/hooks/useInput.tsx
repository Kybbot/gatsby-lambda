import { useState, ChangeEvent } from "react";

type dataType = string | ChangeEvent<HTMLInputElement>;

type useInputType = (defaultValue: string) => [string, (data: dataType) => void];

const useInput: useInputType = (defaultValue = "") => {
	const [value, setValue] = useState(defaultValue);

	const onChange = (data: dataType) => {
		const valueInput = typeof data === "string" ? data : data.target.value;

		setValue(valueInput);
	};

	return [value, onChange];
};

export default useInput;
