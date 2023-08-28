import {
  Stack,
  HStack,
  VStack,
  Image,
  Box,
  Grid,
  GridItem,
  Select,
  FormLabel,
  Checkbox,
  CheckboxGroup,
  Divider,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import InvestmentCard from "./Investment.Card";
import { useEffect, useState } from "react";
const getUrl = (url, filterByReating, filterByInvestment) => {
  if (filterByReating) {
    url = url + `?Volatility_rating=${filterByReating}`;
  }
  if (filterByInvestment) {
    let quaryParams = filterByReating
      ? `&Minimum_Investment=${filterByInvestment}`
      : `?Minimum_Investment=${filterByInvestment}`;
    url = url + quaryParams;
  }
  return url;
};

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return { data: data };
  } catch (error) {
    console.log(error);
  }
};
function Investment() {
  const [InvestMentData, setInvestmentData] = useState([]);
  const [filterByReating, setFilterByReating] = useState("");
  const [filterByInvestment, setInvestment] = useState("");

  const FetchAndUpdate = async (url) => {
    try {
      let res = await getData(url);
      const { data } = res;

      setInvestmentData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let url = getUrl(
      `http://localhost:8080/data`,
      filterByReating,
      filterByInvestment
    );
    FetchAndUpdate(url);
  }, [filterByReating, filterByInvestment]);
  return (
    <>
      <Box>
        <Heading as="h2" size="xl" color="gray">
          Invest In Popular Categories
        </Heading>
      </Box>
      <Grid
        // border="3px solid blue"
        templateColumns="repeat(5,1fr)"
        gap={4}
        columns={{ sm: "1", md: "1", lg: "1", xl: "1", "2xl": "1" }}
      >
        <GridItem
          // border="2px solid red"
          m="5px"
          colSpan={2}
          columns={{ sm: "1", md: "1", lg: "1", xl: "1", "2xl": "1" }}
          boxShadow="xs"
        >
          <GridItem bg="lightgray">Mutual Fund</GridItem>
          <br />

          <FormLabel>Raiting:</FormLabel>
          <Select
            placeholder="Raiting.."
            value={filterByReating}
            onChange={(e) => setFilterByReating(e.target.value)}
            w="50%"
          >
            <option value="High">High</option>
            <option value="Low to Moderate">Low to Moderate</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </Select>
          <br />
          <FormLabel>min investment:</FormLabel>

          <Select
            placeholder="---"
            value={filterByInvestment}
            onChange={(e) => setInvestment(e.target.value)}
            w="50%"
          >
            <option value="800">800</option>
            <option value="1,000">1000</option>
            <option value="2,500">2,500</option>
          </Select>
          <br />
          <FormLabel>Search by AMC: </FormLabel>
          <Box>
            <Divider />
          </Box>
          <Stack>
            <Checkbox gap={2}>SBI Mutual Fund</Checkbox>

            <Checkbox gap={2}>HDFC Mutual Fund </Checkbox>

            <Checkbox gap={2}>TATA Mutual Fund</Checkbox>

            <Checkbox gap={2}>AXIS Mutual Fund</Checkbox>
          </Stack>
          <br />
          <FormLabel>Fund Type</FormLabel>
          <Stack>
            <Checkbox>Equity</Checkbox>

            <Checkbox>Debt</Checkbox>

            <Checkbox>Hybrid</Checkbox>

            <Checkbox>Other</Checkbox>
          </Stack>
        </GridItem>

        <GridItem colSpan={3} colEnd={6} p="2rem" >
          {InvestMentData?.map((el) => (
            <InvestmentCard  key={el.id} {...el} />
          ))}
        </GridItem>
      </Grid>
    </>
  );
}
export default Investment;
