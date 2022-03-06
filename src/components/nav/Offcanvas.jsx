import React, { Fragment, PureComponent } from "react";
import OffcanvasItem from "./OffcanvasItem";
import "./styles/Offcanvas.css";

class Offcanvas extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, expanded } = this.props;
		const offcanvasClassname = `offcanvas-container ${
			expanded ? "expanded" : "collapsed"
		}`;

		return (
			<Fragment>
				<div className={offcanvasClassname}>
					{children}
				</div>
			</Fragment>
		);
	}
}

export default Offcanvas;
