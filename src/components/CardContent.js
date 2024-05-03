// import { Card, Divider, CardBody, CardFooter, Button, ChakraProvider } from '@chakra-ui/react';

// function CardContent({ children }) {
//   return (
//     <ChakraProvider>
//       <Card maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
//         <CardBody>
//           {children}
//         </CardBody>
//         <Divider />
//         <CardFooter>
//           <Button variant='solid' colorScheme='blue'>
//             Buy Latte
//           </Button>
//         </CardFooter>
//       </Card>
//     </ChakraProvider>
//   );
// }

// export default CardContent;


// import { Card, SimpleGrid, ChakraProvider } from '@chakra-ui/react';

// function CardContent({ children }) {
//   return (
//     <ChakraProvider>
//     <div>
//       <SimpleGrid spacing={4} justifyItems="center">
//         <Card class="hover:bg-#B44730-700 shadow-lg shadow-#B44730-500/500 backdrop-blur-xl bg-white/30" maxW="500px" maxH="400px" p="1" borderRadius="lg" boxShadow="md">
//           {children}
//         </Card>
//       </SimpleGrid>
//       </div>
//     </ChakraProvider>
//   );
// }

// export default CardContent;


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardData({children}) {
  return (
  <React.Fragment>
      <Card className="flex flex-row shadow-2xl backdrop-blur-xl bg-gray-800 text-gray-300" maxW="90%" maxH="90%" padding="20%" borderRadius="md" boxShadow="xl"
      variant="outlined">{children}
    </Card>
  </React.Fragment>
);




}

