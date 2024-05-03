import { Providers } from "@/lib/provider";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react'
export default function ImageShow(props) {
    return(
        <Providers>
            <Popover>
  <PopoverTrigger>
    
  <img
        className='shadow-lg rounded-lg overflow-hidden '
  src={props.feature} 
      width= '100px'
      height= '100px' 
      style={{
        display: 'flex',
        alignItems:'left'
      }}

/>  
      
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>
    <img
        className='shadow-lg rounded-lg overflow-hidden '
  src={props.feature} 
      width= '400px'
      height= '400px' 
      style={{
        display: 'flex',
        alignItems:'left'
      }}

/>  
    
    </PopoverBody>
  </PopoverContent>
</Popover>
        </Providers>
    )
}