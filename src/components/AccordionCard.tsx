import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
interface IAccordionCardProps {
  text: string;
}
const AccordionCard = (props: IAccordionCardProps) => {
  return (
    <>
      <Accordion allowToggle w={"full"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                More about it
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{props.text}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionCard;
