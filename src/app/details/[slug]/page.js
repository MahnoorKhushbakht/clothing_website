'use client'
import { Box } from '@chakra-ui/react';
import { getPosts } from '@/lib/categories';
import { parseHTMLContent } from '@/lib/content';
import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
import ImageShow from '@/components/ImageShow';
import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Stack,StackDivider } from '@chakra-ui/react'
import Form from '@/views/new';
import { Image } from '@chakra-ui/react'
import Show from '@/views/show';
import { Providers } from '@/lib/provider';




export default function Details({ params: { slug } }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts(slug);
        console.log('Fetched data:', data);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen' >
    <div  className=' flex flex-col p-8 '>
    <Providers>
    {posts.map((post) => (
      <Box key={post.id}>
        {parseHTMLContent(post.content.rendered).map((content, index) => (
          <Box className=' justify-center items-center' display='flex' flexDirection={{ base:'column',md:'row'}}>     
<Image
boxSize={{ base:'80%',md:'40%'}}
marginTop={{ base:'10px',md:'0px'}}
src={content.imageUrl} 
alt='Dan Abramov'
className='drop-shadow-2xl '
/>  
<Card maxH='60%'  backgroundColor='transparent'  boxShadow='none' className='text-white' >
  <CardBody>
    <Stack divider={<StackDivider />} spacing='1'>
    <Box >
        <Heading size='xs' textTransform='uppercase'>
          Product title
        </Heading>
        <Text pt='2' fontSize='sm'>
        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </Text>
      </Box>
      <Box >
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
        {content.summary}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
        <figure className="wp-block-table is-style-stripes">
                      <div dangerouslySetInnerHTML={{ __html: content.table }} />
                    </figure>
        </Text>
      </Box>
     
      <Heading size='xs' textTransform='uppercase'>
                    Product Image
                    </Heading>
                  <ImageShow feature={content.feature} />
 <Box>
        <Heading size='xs' textTransform='uppercase'>
          leave a review
        </Heading>
        <Text pt='2' fontSize='sm'>
        <Box className='place-self-start max-w-full mt-6'>
{/* <Heading size='md' className='text-white' textTransform='uppercase'>
         Leave a review
        </Heading> */}
<Form/>
</Box>
        </Text>
      </Box> 
    </Stack>
  </CardBody>
</Card>
</Box>    ))}
          </Box>
  ))}
{/* <Box className='place-self-start max-w-full mt-6'>
<Heading size='md' className='text-white' textTransform='uppercase'>
         Leave a review
        </Heading>
<Form/>
</Box> */}
</Providers>
</div>

</div>

  );
}




// export default function Details({ params: { slug } }) {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getPosts(slug);
//         console.log('Fetched data:', data);
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   return (
//     <div className='bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen  '>
//       {posts.map((post) => (
//         <Box key={post.id} flex="1" maxWidth="90%" className='flex justify-center items-center'>
//           {parseHTMLContent(post.content.rendered).map((content, index) => (
//             <div key={index} className='d-flex flex-column flex-md-row ' style={{ flex: 1 }} >
//                            <img
//         className='shadow-lg rounded-lg overflow-hidden '
//   src={content.imageUrl} 
//       width= '400px'
//       height= '400px' 
//       style={{
//         display: 'flex',
//         alignItems:'center'
//       }}
      

// />         
//               <Card style={{ marginTop:'10px',border:'none',backgroundColor:'transparent',color:'#d1d5db' }}  >

   

//                 <Card.Body  style={{ width: '60%', padding: '1rem' }}>
                  
//                   <Card.Title>
//                     <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
//                   </Card.Title>
//                   <Card.Text>{content.summary}</Card.Text>
//                   <Card.Title>
//                     Overview
//                   </Card.Title>
//                   <Box>
//                     <figure className="wp-block-table is-style-stripes">
//                       <div dangerouslySetInnerHTML={{ __html: content.table }} />
//                     </figure>
//                   </Box>
//                   <Card.Title>
//                     Product Image
//                   </Card.Title>
//                   <ImageShow feature={content.feature} />
//           </Card.Body>
//           {/* <Show/> */}
//           <Form/>
//               </Card>
             
//             </div>
//           ))}
//         </Box>
//       ))}
//     </div>
//   );
// }