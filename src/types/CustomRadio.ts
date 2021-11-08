import { MouseEventHandler } from "react";

export type CustomRadioProps = {
	name: string;
	value: number;
	text: number;
	isChecked: boolean;
	toggle: MouseEventHandler<HTMLInputElement>;
};
