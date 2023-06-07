import NavBar from "../components/NavBar";
import IntroSec from "../components/IntroSec";
import BodyCards from "../components/BodyCards";
import Footer from "../components/Footer";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        mt={"10"}
        mb={"10"}
      >
        <NavBar />
        <IntroSec />
        <Heading display="flex">My Work</Heading>
        <Box w={"full"} mt={"10"}>
          <Flex justify={"space-evenly"} align={"center"} direction={"row"}>
            <BodyCards
              name={"BrainBoxAI"}
              text={
                "BrainboxAI is a web application that uses the Bard API to answer questions. It is written in Nodejs."
              }
              image={
                "https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1076345054.jpg"
              }
              AccordionCard={
                "It Can answer a wide range of questions, including factual, open-ended, and creative questions. Uses the Bard API to access a large dataset of text and code. Can be used to generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way."
              }
              avatar={
                "https://img.freepik.com/premium-vector/artificial-intelligence-concept-circuit-board-background-with-ai-logo-illustration_257312-1368.jpg?w=2000"
              }
            />
            <BodyCards
              name={"TalentDesire"}
              text={
                "Talent Desire is a freelancing mobile application for talented developers. It is written in React native."
              }
              image={
                "https://appetiser.com.au/wp-content/uploads/2020/03/Top-5-Mobile-App-Development-Trends-Set-to-Rule-2020.png"
              }
              AccordionCard={
                "TalentDesire is a mobile app that connects University of Jeddah students with freelance work opportunities. To get started, students create a profile on the app and list their skills and experience. Once they have created a profile, students can start browsing for freelance work opportunities. Opportunities are listed by category, so students can easily find work that is a good fit for their skills. When a student finds a freelance work opportunity that they are interested in, they can apply for the job. Once they have applied, the employer will review their application and decide if they are a good fit for the job. If the employer decides to hire the student, they will be able to negotiate a price for the work."
              }
              avatar={
                "https://img.freepik.com/premium-vector/letter-b-logo-design_150234-1.jpg"
              }
            />
          </Flex>
        </Box>
        <Button
          colorScheme={"blue"}
          bg={"blue.500"}
          color={"white"}
          rounded={"full"}
          px={6}
          as={"a"}
          mt={"10"}
          href={"/about"}
          _hover={{
            bg: "blue.600",
          }}
        >
          About Me
        </Button>
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
