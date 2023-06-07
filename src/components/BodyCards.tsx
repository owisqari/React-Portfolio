import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardBtn from "./CardBtn";
import ExtraCard from "./ExtraCard";
interface IBodyCardsProps {
  name: string;
  text: string;
  image: string;
  AccordionCard: string;
  avatar: string;
}
const BodyCards = (props: IBodyCardsProps) => {
  const [extra, setExtra] = useState(false);
  const { id } = useParams();

  const handleClick = () => {
    setExtra(!extra);
  };
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={props.avatar} />

            <Box>
              <Heading size="sm">{props.name}</Heading>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{props.text}</Text>
      </CardBody>
      <Image
        objectFit="fill"
        w={"full"}
        h={"full"}
        src={props.image}
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Link to={`/home/${id}`} onClick={handleClick}>
          {extra ? <ExtraCard text="hello" /> : <CardBtn />}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BodyCards;
