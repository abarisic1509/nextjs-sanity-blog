import {
	Body,
	Container,
	Column,
	Head,
	Heading,
	Html,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const Message = ({ name, email, message }) => {
	return (
		<Html>
			<Head />
			<Body style={main}>
				<Container>
					<Section style={logo}>Logo</Section>

					<Section style={content}>
						<Row style={{ ...boxInfos, paddingBottom: "0" }}>
							<Column>
								<Heading
									style={{
										fontSize: 26,
										fontWeight: "bold",
										textAlign: "center",
									}}
								>
									New message from {name},
								</Heading>

								<Text style={paragraph}>
									<b>Email: </b>
									{email}
								</Text>
								<Text style={{ ...paragraph, marginTop: -5 }}>
									<b>Message: </b>
									{message}
								</Text>
							</Column>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default Message;

const main = {
	backgroundColor: "#fff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
	fontSize: 16,
};

const logo = {
	padding: "30px 20px",
	color: "#f8f8f8",
};

const containerButton = {
	display: "flex",
	justifyContent: "center",
	width: "100%",
};

const button = {
	backgroundColor: "#e00707",
	padding: "12px 30px",
	borderRadius: 3,
	color: "#FFF",
	fontWeight: "bold",
	border: "1px solid rgb(0,0,0, 0.1)",
	cursor: "pointer",
};

const content = {
	border: "1px solid rgb(0,0,0, 0.1)",
	borderRadius: "3px",
	overflow: "hidden",
};

const boxInfos = {
	padding: "20px 40px",
};

const containerImageFooter = {
	padding: "45px 0 0 0",
};
