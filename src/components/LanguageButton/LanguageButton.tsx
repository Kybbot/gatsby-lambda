import React, { FC } from "react";

type LanguageButtonProps = {
	additionalClass?: string;
	[x: string]: any;
};

const LanguageButton: FC<LanguageButtonProps> = ({ children, additionalClass, ...props }) => {
	return (
		<button {...props} className={`languageButton ${additionalClass ? additionalClass : ""}`}>
			{children}
		</button>
	);
};

export default LanguageButton;
