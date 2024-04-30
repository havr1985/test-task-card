import { Box, Flex, Heading, Link, RadioCards, Text } from "@radix-ui/themes";
import cardIpad from "../../card1.json";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export const CardMemoryRadio = () => {
  const { memory } = cardIpad;
  const [size, setSize] = useState("64");

  const handleMemoryChange = (item) => {
    setSize(item);
  };

  useEffect(() => {
    localStorage.setItem("size", size);
  }, [size]);

  return (
    <Box maxWidth="600px" mt="4">
      <Heading as="h2">Select Memory</Heading>

      <RadioCards.Root
        mt="3"
        defaultValue="64"
        columns={{ initial: "1", sm: `${memory.length}` }}
      >
        {memory.map((item, idx) => (
          <RadioCards.Item
            key={idx}
            value={item}
            onClick={() => handleMemoryChange(item)}
          >
            <Text>{item}</Text>
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
      <Flex gap="2" align="baseline">
        <FilePlusIcon color="gray" />
        <Link href="#" color="gray" size="2" mt="2">
          {" "}
          What memory is better?
        </Link>
      </Flex>
    </Box>
  );
};
