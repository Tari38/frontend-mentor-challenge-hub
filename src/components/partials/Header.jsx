import { Container } from "reactstrap";
import Nav from "../nav/Nav";

import "./Header.css";

export default function Header() {

	return(
		<>
		<header className="App-header">
			<Container className="title">
				<h1>My Frontend Mentor Challenge Hub</h1>
			</Container>
		</header>

		<Nav />
	  </>
  )
}
