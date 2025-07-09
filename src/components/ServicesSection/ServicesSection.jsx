import { Box, Typography, Container, Card, CardMedia, CardContent, Button, useTheme, useMediaQuery } from '@mui/material';
import { useServicesStyles } from './useStyles'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const servicesData = [
    {
        title: 'Air Freight Services',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        image: 'service-images/air-freight.webp',
    },
    {
        title: 'Drone Services',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        image: 'service-images/drone-services.webp',
    },
    {
        title: 'Maritime Shipping',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        image: 'service-images/maritime-shipping.webp',
    },
    {
        title: 'Ground Transport',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        image: 'service-images/ground-transport.webp',
    }
];

export const ServicesSection = () => {
    const styles = useServicesStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Container>
                <Box sx={styles.header}>
                    <Typography variant="h6" sx={styles.title}>
                        Real Solution, Real Fast!
                    </Typography>
                    <Typography variant="h3" sx={styles.subtitle}>
                        Best Global Logistics Solutions
                    </Typography>
                    <Typography variant="body1" sx={styles.description}>
                        We provide comprehensive logistics solutions tailored to your specific business needs.
                    </Typography>
                </Box>

                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={isMobile ? 90 : 33.33}
                    swipeable={true}
                    emulateTouch={true}
                    autoPlay={true}
                    renderIndicator={(onClickHandler, isSelected, index, label) => (
                        <Box
                            component="span"
                            onClick={onClickHandler}
                            key={index}
                            sx={{
                                width: isMobile ? 8 : 10,
                                height: isMobile ? 8 : 10,
                                borderRadius: "50%",
                                bgcolor: isSelected ? "#99b96a" : 'lightGrey',
                                display: "inline-block",
                                mx: 0.5,
                                cursor: "pointer",
                            }}
                            aria-label={label}
                        />
                    )}
                >
                    {servicesData.map((service, index) => (
                        <Box key={index} sx={{ p: 1, height: '100%' }}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 6,
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={service.image}
                                    alt={service.title}
                                    style={{
                                        filter: "brightness(0.7)"
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {service.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            startIcon={<ArrowForwardIcon sx={{ color: "white", backgroundColor: "black", borderRadius: "50%", height: "15px", width: "15px" }} />}
                                            sx={{
                                                textTransform: 'none',
                                                fontWeight: 'bold',
                                                p: 0,
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                },
                                                color: "black"
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Carousel>

                <Typography variant="body2" sx={styles.footerText}>
                    Logistic & Transport Solutions Saves Your Time.
                    <a href='#' style={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>
                        Finds Your Solutions&nbsp;
                        <ArrowForwardIcon sx={{ color: "white", backgroundColor: "black", borderRadius: "50%", height: "15px", width: "15px", marginBottom: "-2px" }} />
                    </a>
                </Typography>
            </Container>
        </>
    )
}
