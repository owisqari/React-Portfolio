import { Avatar, Box, Stack, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        w={"full"}
      >
        OwisBukhari. I'm a 23-year-old software engineer and web developer. I
        graduated from the University of Jeddah in 2023 and am currently an
        intern at Tuwaiq Academy. I've overcome a lot of challenges in my life,
        including obesity, diabetes, and academic struggles.
      </Text>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        w={"full"}
      >
        I was overweight for most of my life. I struggled with my weight from a
        young age, and by the time I was in high school, I was obese. My weight
        caused me a number of health problems, including diabetes. I was
        determined to lose weight and improve my health. I started eating
        healthier and exercising regularly. After a few months, I had lost a
        significant amount of weight and my diabetes was under control.
      </Text>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        w={"full"}
      >
        My hard work and determination paid off. I was accepted to the
        University of Jeddah, where I studied software engineering. I excelled
        in my studies and graduated with a degree in software engineering. I'm
        now an intern at Tuwaiq Academy, where I'm working on developing new
        software applications.
      </Text>

      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        w={"full"}
      >
        I'm passionate about my work and I'm always looking for new challenges.
        I'm a valuable asset to any team and I'm sure to make a significant
        contribution to the tech industry.
      </Text>

      <Box textAlign={"center"}>
        <Avatar
          src={
            "https://media.licdn.com/dms/image/C5603AQErlHd6ECaH_w/profile-displayphoto-shrink_400_400/0/1615968006687?e=1691625600&v=beta&t=7p6XqGjPKYQ82rfcJL3A8KqUDxp1kw3yirm8b5ik_ZU"
          }
          mb={2}
        />

        <Text fontWeight={600}>Owis Bukhari</Text>
      </Box>
    </Stack>
  );
};
export default AboutMe;
