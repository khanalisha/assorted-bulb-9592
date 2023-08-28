import { Badge, Divider, Box } from "@chakra-ui/react";

function InvestmentCard({
  Volatility_rating,
  Category_Return,
  Bank_name,
  name,
  Minimum_Investment,
}) {
  return (
    <Box>
      <h3>
        {name} of {Bank_name}
      </h3>
      <Badge borderRadius="full" px="2" colorScheme="teal">
        {Volatility_rating}
      </Badge>
      <h4>Min Investment{Minimum_Investment}</h4>
      <h4>Category-Return {Category_Return}</h4>
      <Divider />
    </Box>
  );
}
export default InvestmentCard;
