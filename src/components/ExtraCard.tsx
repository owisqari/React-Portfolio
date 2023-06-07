import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

interface IExtraCardProps {
  text: string;
}
const ExtraCard = (props: IExtraCardProps) => {
  return (
    <>
      <Card w={"80"}>
        <CardHeader>
          <Heading size="md">Extra Info</Heading>
        </CardHeader>
        <CardBody>
          <Text>{props.text}</Text>
        </CardBody>
        <CardFooter>
          <Button>Hide</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ExtraCard;
