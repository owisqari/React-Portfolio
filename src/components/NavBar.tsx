import {
  Box,
  Heading,
  Flex,
  Avatar,
  IconButton,
  useColorMode,
  Container,
  HStack,
  chakra,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FiSun, FiMenu } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const NavBar = (props: any) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="7xl" p={"12"} mt={"0"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        px={[0, "1.5rem", "1.5rem"]}
        marginLeft="auto"
        marginRight="auto"
        maxWidth="55rem"
        paddingTop="3rem"
      >
        <Flex
          align="center"
          mr={{ md: "5" }}
          width={["100%", "100", "auto"]}
          justifyContent={["space-between", "space-between", "flex-start"]}
        >
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            <Avatar
              size="lg"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            />
          </Heading>

          <HStack spacing={2}>
            <Box display={{ sm: "block", md: "none" }}>
              <IconButton
                aria-label="Color Mode"
                icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
                onClick={toggleColorMode}
                size="lg"
                isRound={true}
                {...iconProps}
              />
            </Box>
            <Box
              cursor="pointer"
              display={{ sm: "block", md: "none" }}
              onClick={handleToggle}
            >
              <FiMenu
                fontSize="2.5rem"
                color={colorMode === "light" ? "#000" : "#fff"}
              />
            </Box>
          </HStack>
        </Flex>

        <Box
          display={[show ? "flex" : "none", show ? "flex" : "none", "flex"]}
          width={["100%", "100%", "auto"]}
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          flexGrow={1}
        >
          <chakra.a
            href={"/home"}
            w={["100%", "100%", "auto"]}
            borderRadius={["5px", "5px", "5px"]}
            mr={["0", "0", "3"]}
            mt={["2", "2", "0"]}
            padding={["0.7rem", "0.7rem", "0.4rem"]}
            display={["block", "block", "auto"]}
            _visited={{ outline: "none" }}
            _hover={{
              background:
                colorMode === "light" ? "rgba(0, 0, 0, 0.7)" : "#463d3de0",
              color: "#fff",
            }}
            onClick={() => setShow(false)}
          >
            Home
          </chakra.a>
        </Box>

        <Box
          mt={[3, 3, 0]}
          display={["none", "none", "block"]}
          position={{ sm: "absolute", md: "unset" }}
          top="3.5rem"
          right="5.5rem"
        >
          <IconButton
            aria-label="Color Mode"
            icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
            onClick={toggleColorMode}
            size="lg"
            isRound={true}
            {...iconProps}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;
