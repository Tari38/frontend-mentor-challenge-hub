import React, { Fragment } from "react";
import "./styles/OffcanvasGroup.css";

const OffcanvasGroup = ({ title, children }) => (
	<Fragment>
		<div className="offcanvas-group">
			{title && <p className="offcanvas-group-title">{title}</p>}
			{children}
		</div>
	</Fragment>
);

export default OffcanvasGroup;
