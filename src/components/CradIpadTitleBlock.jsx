import { HeartIcon, PlusCircledIcon, Share1Icon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Separator, Text } from "@radix-ui/themes";

import { CardIpadColor } from "./CardIpadColor";
import cardIpad from "../../card1.json";
import { RatingStars } from "./RatingStars";
import { CardMemoryRadio } from "./CardMemoryRadio";

export const CradIpadTitleBlock = () => {
  const { title, reviews } = cardIpad;
  return (
    <Box>
      <Heading as="h1" size="7">
        {title}
      </Heading>
      <Flex gap="2" align="center" mb="4">
        <RatingStars />
        <Text color="gray" weight="light" size="2">
          {reviews} reviews
        </Text>
      </Flex>
      <Separator orientation="horizontal" size="4" />
      <CardMemoryRadio />
      <CardIpadColor />
      <Separator orientation="horizontal" size="4" />
      <Box mt="4" mb="4">
        <Heading as="h2">Specification</Heading>
      </Box>
      <Separator orientation="horizontal" size="4" />
      <Flex gap="5" mt="5">
        <Flex gap="2" align="center">
          <HeartIcon color="gray" />
          <Text color="gray" weight="bold">
            Wishist
          </Text>
        </Flex>
        <Flex gap="2" align="center">
          <PlusCircledIcon color="gray" />
          <Text color="gray" weight="bold">
            Compare
          </Text>
        </Flex>
        <Flex gap="2" align="center">
          <Share1Icon color="grey" />
          <Text color="gray" weight="bold">
            Share
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
