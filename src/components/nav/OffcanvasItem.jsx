import { Fragment } from "react";
import "./styles/OffcanvasItem.css";

const OffcanvasItem = ({ children }) => (
	<Fragment>
		<div className="offcanvas-item offcanvas-content">{children}</div>
	</Fragment>
);
export default OffcanvasItem;
