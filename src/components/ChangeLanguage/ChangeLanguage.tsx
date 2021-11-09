import React, { FC } from "react";
import { Link, PageRendererProps } from "gatsby";

const ChangeLanguage: FC<PageRendererProps> = ({ location }) => {
	const { pathname } = location;
	const disabled = pathname === "/";

	return (
		<div>
			<Link className={`header__link ${disabled ? "header__link--disabled" : ""}`} to="/">
				Eng
			</Link>{" "}
			|{" "}
			<Link className={`header__link ${disabled ? "" : "header__link--disabled"}`} to="/ru">
				Rus
			</Link>
		</div>
	);
};

export default ChangeLanguage;
