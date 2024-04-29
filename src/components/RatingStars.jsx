import { StarFilledIcon } from "@radix-ui/react-icons";
import cardIpad from "../../card1.json";
import { Flex } from "@radix-ui/themes";

export const RatingStars = () => {
  const { raiting } = cardIpad;
  return (
    <Flex>
      {Array.from({ length: raiting }).map((_, idx) => (
        <StarFilledIcon key={idx} color="orange" />
      ))}
    </Flex>
  );
};
