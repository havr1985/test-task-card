import { Box, Button, Card, Flex, Link, Strong, Text } from "@radix-ui/themes";
import cardIpad from "../../card1.json";
import { BackpackIcon, CodeSandboxLogoIcon } from "@radix-ui/react-icons";

export const CardIpadBuyBlock = () => {
  const { price, priceCurrent } = cardIpad;
  return (
    <Card size="4">
      <Flex gap="4">
        <Text size="7" weight="bold">
          ${priceCurrent}
        </Text>
        <Text size="7" weight="bold" color="gray">
          ${price}
        </Text>
      </Flex>
      <Box mt="4">
        <Flex gap="4" align="center">
          <BackpackIcon width={25} height={25} />
          <Box>
            <Text as="div" size="4" weight="bold">
              Delivery
            </Text>
            <Text as="div" size="2" color="gray">
              February 1, from $15
            </Text>
          </Box>
        </Flex>
        <Flex gap="4" align="center" mt="2">
          <CodeSandboxLogoIcon width={25} height={25} />
          <Box>
            <Text as="div" size="4" weight="bold">
              Pickup Point
            </Text>
            <Text as="div" size="2" color="gray">
              Today in 3 warehouses, free
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex direction="column" mt="8" gap="2">
        <Text color="gray" size="2">
          Delivery to:
          <Link href="#" color="blue">
            {" "}
            Miami FL
          </Link>
        </Text>
        <Text color="gray" size="2">
          Availability: <Strong>In Stock</Strong>
        </Text>
      </Flex>
      <Flex direction="column" mt="8"gap="4">
        <Button size="4">Buy Now</Button>
        <Button size="4" color="gray">Add to Cart</Button>
      </Flex>
    </Card>
  );
};
