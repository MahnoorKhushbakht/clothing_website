'use client';
import '@/app/css/style.css';
import { getCategories, getposts } from '@/lib/categories';
import { parseHTMLContent } from '@/lib/content';
import { Stack, Box } from '@chakra-ui/react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import CardData from '@/components/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function ReviewPage({ params: { slug } }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories(slug);
     
        console.log('Fetched data:', data); 
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [slug]); 



  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen flex flex-col justify-center items-center">
      <Stack
        spacing={10}
        justify="center"
        align="center"
        p={4}
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
      >
        {posts.map((post) => (
          <Box key={post.id} flex="1" minWidth="300px" maxWidth="400px" >
            {parseHTMLContent(post.content.rendered).map((content, index) => (
              <CardData key={index}>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </Typography>
                  <Typography variant="body2">
                    {content.summary}
                  </Typography>
                  {/* <Typography variant="body2">
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </Typography> */}
                  <Button style={{ color: '#d1d5db' }} href={`http://localhost:3000/details/${post.slug}`} size="small">Learn More</Button>
                </CardContent>
                <img
                  style={{ display: 'block', margin: 'auto',padding:"2%" }}
                  alt="green iguana"
                  height="35%"
                  width="35%"


                  src={content.imageUrl}
                />
              </CardData>
            ))}
          </Box>
        ))}
      </Stack>
    </div>
  );
}


{/* <Image
                src={content.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='3' spacing='3'>
                <Heading size='md'>
                  <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Heading>
                <Text py='2'>
                  {content.summary}
                </Text>
              </Stack> */}
