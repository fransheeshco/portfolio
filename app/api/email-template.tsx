import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  message: string;
};

export function EmailTemplate({
  name,
  email,
  message,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>

      <Body style={{ backgroundColor: "#f6f6f6", fontFamily: "sans-serif" }}>
        <Container style={{ padding: "20px", backgroundColor: "#fff" }}>
          <Heading>New Contact Message</Heading>

          <Text>
            <strong>Name:</strong> {name}
          </Text>

          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Hr />

          <Text>
            <strong>Message:</strong>
          </Text>

          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}