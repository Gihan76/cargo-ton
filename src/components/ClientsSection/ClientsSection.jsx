import { Box, Typography, Container, Grid } from '@mui/material';

const clients = [
    { name: 'Apple', logo: 'client-images/apple.png' },
    { name: 'Google', logo: 'client-images/google.png' },
    { name: 'Microsoft', logo: 'client-images/microsoft.png' },
    { name: 'Samsung', logo: 'client-images/samsung.png' },
    { name: 'Tesla', logo: 'client-images/tesla.png' },
    { name: 'Twitter', logo: 'client-images/twitter.png' },
];

export const ClientsSection = () => {
    return (
        <Box 
            sx={{
                px: 4,
                pt: 2,
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{
                    mb: 2,
                    mt: 2,
                    fontWeight: "bold",
                    textTransform: 'uppercase',
                    letterSpacing: 1
                }}
            >
                Featured Clients
            </Typography>

            <Grid container size={12} sx={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
                {clients.map((client, index) => (
                    <Grid key={index} size={{ xl: 1, lg: 1, md: 4, sm: 6, xs: 6 }}>
                        <Box
                            component="img"
                            src={client.logo}
                            alt={client.name}
                            sx={{
                                height: 80,
                                width: 'auto',
                                filter: 'grayscale(100%)',
                                opacity: 0.5,
                                mb: 1,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.20)',
                                },
                            }}
                            title={client.name}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}