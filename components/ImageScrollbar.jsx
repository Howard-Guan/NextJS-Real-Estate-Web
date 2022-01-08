import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


const ImageScrollbar = ({data}) => (
    <ScrollMenu style={{overflow: 'hidden'}}>
        {data.map((item)=>(
            <Box width="910px" itemID={item.id} overflow="hidden" p="1" key={item.id}>
                <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" alt="property-details" />
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollbar;