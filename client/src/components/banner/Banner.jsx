
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://cdn.techjockey.com/blog/wp-content/uploads/2022/08/18120819/How-Does-Electronic-Medical-Records-Improve-Patient-Care-feature-image.jpg?d=830) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 50px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 40px;
    background: #FFFFFF;
    
`;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>YOUR  HEALTH  RECORDS</Heading> */}
            {/* <SubHeading>AidBull</SubHeading> */}
        </Image>
    )
}

export default Banner;