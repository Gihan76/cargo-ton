import { Box, Typography, Button, Divider } from '@mui/material';
import { useWelcomeStyles } from './useStyles'

export const WelcomeSection = () => {
    const styles = useWelcomeStyles();

    return (
        <Box component="section" sx={styles.container}>
            <Box sx={styles.contentWrapper}>

                {/* Image Section */}
                <Box sx={styles.imageSection}>
                    <Box
                        component="img"
                        src="welcome-images/welcome-1.webp"
                        alt="welcome-image-cargo-ton"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.03)',
                            },
                            filter: "brightness(0.7)",
                        }}
                    />
                </Box>

                {/* Text Section */}
                <Box sx={styles.textSection}>
                    <Typography variant="h1" sx={styles.title}>
                        TransMax Logistics<br />Around <span style={{ color: "#ff7c46"}}>the World</span>
                    </Typography>
                    <Divider sx={styles.divider} />
                    <Typography variant="body1" sx={{ ...styles.description, fontWeight: "bold" }}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                    </Typography>
                    <Typography variant="body1" sx={styles.description}>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </Typography>

                    <Box sx={styles.statsSection}>
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <Typography
                                variant="h3"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#ff7c46',
                                    mb: 1,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                    },
                                }}
                            >
                                15,350+
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Clients Worldwide
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            sx={styles.button}
                        >
                            MORE ABOUT US
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}