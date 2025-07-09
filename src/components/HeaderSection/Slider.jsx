import { Box, Button, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slides } from '../../config/Constants';

export const Slider = () => {
    return (
        <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
        >
            {slides?.map((slide, index) => (
                <Box key={index} sx={{ position: "relative", height: "80vh" }}>
                    {/* Slider Image */}
                    <Box
                        component="img"
                        src={slide.image}
                        alt={slide.title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(0.5)",
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "10%",
                            transform: "translateY(-50%)",
                            color: "white",
                            textAlign: "left",
                            maxWidth: "600px",
                        }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                            {slide.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            {slide.description}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#f9bf04",
                                color: "white",
                                px: 4,
                                py: 1.5,
                                fontWeight: "bold",
                            }}
                        >
                            {slide.btnLabel}
                        </Button>
                    </Box>

                    <Typography
                        variant="caption"
                        sx={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                            color: "white",
                            bgcolor: "#f9bf04",
                            px: 2,
                            py: 1,
                            borderRadius: 1,
                            fontWeight: "bold"
                        }}
                    >
                        {index + 1} / {slides.length}
                    </Typography>
                </Box>
            ))}
        </Carousel>
    )
}
