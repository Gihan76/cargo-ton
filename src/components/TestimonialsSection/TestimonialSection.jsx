import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../../config/Constants';

export const TestimonialSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                height: "100%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start'
            }}
        >
            <Container>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        mt: 1,
                        textTransform: 'uppercase',
                        letterSpacing: 2
                    }}
                >
                    TRUSTED CLIENTS
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    sx={{ 
                        mb: 1,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                    }}
                >
                    quis nostrum exercitationem ullam corporis suscipit
                </Typography>

                <Box
                    sx={{
                        '.carousel': {
                            userSelect: 'none',
                        },
                    }}

                >
                    <Carousel
                        showArrows={!isMobile}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={3000}
                        centerSlidePercentage={isMobile ? 90 : 100}
                        swipeable={true}
                        emulateTouch={true}
                        showIndicators={false}
                    >
                        {testimonials?.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </Carousel>
                </Box>
            </Container>
        </Box>
    )
}