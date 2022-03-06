import React, { Fragment, PureComponent } from "react";
import { Offcanvas, OffcanvasGroup, OffcanvasItem } from "./index";
import { Button } from "reactstrap";

import "./styles/Nav.css";

class Nav extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			offcanvasExpanded: true
		};
	}

	render() {
		const { offcanvasExpanded } = this.state;

		return (
			<Fragment>
				<div>

					<Button
						className="offcanvas-button"
    				onClick={this.toggleNavOpen || this.toggleNavClose}
  					>
						Open
  				</Button>

  				<Offcanvas
    				direction="top"
						scrollable
						expanded={offcanvasExpanded}
						toggle={this.toggleNav}

						>

							<OffcanvasGroup title="Newbie Challenges">
								<OffcanvasItem> NFT preview card </OffcanvasItem>
								<OffcanvasItem> QR code </OffcanvasItem>
								<OffcanvasItem> Base Apparel coming soon page </OffcanvasItem>
								<OffcanvasItem> Single price grid </OffcanvasItem>
								<OffcanvasItem> Intro component with sign-up form </OffcanvasItem>
							</OffcanvasGroup>
							<OffcanvasGroup title="Junior Challenges">
								<OffcanvasItem> Huddle landing page with alternating feature blocks </OffcanvasItem>
								<OffcanvasItem> Advice generator app </OffcanvasItem>
								<OffcanvasItem> Fylo data storage </OffcanvasItem>
								<OffcanvasItem> Coding bootcamp testimonials slider </OffcanvasItem>
								<OffcanvasItem> Fylo data storage </OffcanvasItem>
							</OffcanvasGroup>
							<OffcanvasGroup title="Intermediate Challenges">
								<OffcanvasItem> Interactive comments section </OffcanvasItem>
							</OffcanvasGroup>
						</Offcanvas>
				</div>
			</Fragment>
		);
	}

	toggleNavOpen = () => {
		this.setState({
			offcanvasExpanded: !this.state.offcanvasExpanded
		});
	};

	toggleNavClose = () => {
		this.setState({
			offcanvasExpanded: this.state.offcanvasExpanded
		});
	};
}

export default Nav;
