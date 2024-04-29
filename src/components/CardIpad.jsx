import { Box, Card, Flex } from "@radix-ui/themes";
import cardIpad from "../../card1.json";

import { CradIpadTitleBlock } from "./CradIpadTitleBlock";
import { CardIpadBuyBlock } from "./CardIpadBuyBlock";

export const CardIpad = () => {
  const { imageUrl, title } = cardIpad;

  return (
    <Box maxWidth="1440px" mx="auto">
      <Card>
        <Flex justify="between">
          <Box>
            <img src={imageUrl} alt={title} width={600} height={500} />
          </Box>
          <CradIpadTitleBlock />
          <CardIpadBuyBlock />
        </Flex>
      </Card>
    </Box>
  );
};
