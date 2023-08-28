import { Stack, HStack, VStack, Image, Box } from "@chakra-ui/react";

function Dashboard() {
  return (
    <>
      <Box>
        <Box
          display="flex"
          position="fixed"
          minW="100%"
          minH="100%"
          bgSize="cover"
          bgPosition="center"
        >
          <Image
            // h="40rem"
            position="fixed"
            src="https://www.tatamutualfund.com/images/default-source/careers/photo-gallery/tbcf-tmf-banner-newfinal.jpg?sfvrsn=65e20918_3"
            minW="100%"
            minH="100%"
            bgSize="cover"
            bgPosition="center"
          />
        </Box>
      </Box>
    </>
  );
}
export default Dashboard;
