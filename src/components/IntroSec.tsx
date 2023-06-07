import { Container, Stack, Heading, Text, HStack } from "@chakra-ui/react";

const IntroSec = () => {
  return (
    <Container maxW="7xl" p={["4", "8", "12"]}>
      <Stack as="main" mx="auto" marginTop="3rem">
        <Stack spacing={2} marginBottom={8}>
          <Heading display="flex">Hi, I'm Owis </Heading>
          <HStack alignItems="center">
            <Text>I am a Full Stack developer.</Text>
          </HStack>
          <Text>
            Software engineer graduate from University of Jeddah. I hold a B.S
            in Software engineering.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default IntroSec;
