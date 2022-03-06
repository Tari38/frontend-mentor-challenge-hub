import React, { Fragment } from "react";
import "./styles/OffcanvasItem.css";

const OffcanvasContent = ({ children }) => (
	<Fragment>
		{ React.Children.map(children, child =>
				React.cloneElement(child, {
					...child.props,
					...{ className: "offcanvas-content" }
				})
			)}
	</Fragment>
);

export default OffcanvasContent;
