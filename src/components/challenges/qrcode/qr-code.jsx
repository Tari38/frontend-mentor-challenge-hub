import "./styles.css";
import { Button, Container, Card } from "reactstrap";
import qrcode from "./images/image-qr-code.png";

export default function QrCode() {
  return (
    <>
      <Card className="qrcode">
        <Container className="container">
          <img src={qrcode} alt="qr code" id="qr"></img>
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </Container>
				</Card>
				<div>
					<Button href="https://github.com/Tari38/frontend-mentor-qr-code-challenge">View my Code</Button>
				</div>
    </>
  );
}
