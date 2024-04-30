import { Box, Heading, RadioCards } from "@radix-ui/themes";
import cardIpad from "../../card1.json";
import { CircleIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export const CardIpadColor = () => {
  const { color } = cardIpad;
  const [colored, setColored] = useState("gray");

  const handleColorChange = (item) => {
    setColored(item);
  };

  useEffect(() => {
    localStorage.setItem("color", colored);
  }, [colored]);

  return (
    <Box maxWidth="600px" mt="4" mb="5">
      <Heading as="h2" weight="bold">
        Choose color
      </Heading>

      <RadioCards.Root
        mt="3"
        defaultValue="gray"
        columns={{ sm: `${color.length}` }}
      >
        {color.map((item, idx) => (
          <RadioCards.Item
            key={idx}
            value={item}
            onClick={() => handleColorChange(item)}
            className="round-radio"
          >
            <CircleIcon color={item} fill={item} width={32} height={32} />
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
    </Box>
  );
};
