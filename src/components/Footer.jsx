import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://d29fhpw069ctt2.cloudfront.net/icon/image/37746/preview.svg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"44"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} color={"goldenrod"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            color={"goldenrod"}
          >
            CRYPTA is derived from the word "crypt," which means hidden or secret.CRYPTA is a platform that helps users uncover the hidden value of their investments and stay on top of the latest trends in the cryptocurrency market.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "5"]} src={avatarSrc} />
          <Text color={"goldenrod"}>@shreshthasuri</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;