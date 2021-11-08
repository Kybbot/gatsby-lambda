import React, { FC } from "react";

type ButtonProps = {
	additionalClass?: string;
	[x: string]: any;
};

const Button: FC<ButtonProps> = ({ children, additionalClass, ...props }) => {
	return (
		<button className={`button ${additionalClass ? additionalClass : ""}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
