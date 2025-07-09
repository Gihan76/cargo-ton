import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import { newsItems } from '../../config/Constants';

export const LatestNewsSection = () => {
    return (
        <Box
            sx={{
                px: 4,
                pt: 2,
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h4"
                align="center"
                sx={{
                    mb: 2,
                    mt: 2,
                    fontWeight: 'bold',
                    position: 'relative',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                }}
            >
                Latest News
            </Typography>

            <Grid container size={12} spacing={2}>
                {newsItems?.map((news, index) => (
                    <Grid key={index} size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                backgroundColor: news.isLatest ? "#00c0e4" : "white",
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                },
                                position: 'relative',
                            }}
                        >
                            {/* Date Chip */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    textAlign: 'center',
                                    backgroundColor: news.isLatest ? "#00c0e4" : "#3f4d5b",
                                    color: "white",
                                    p: 1,
                                    minWidth: 50,
                                    boxShadow: 2
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold">
                                    {news.date}
                                </Typography>
                                <Typography variant="caption">
                                    {news.month}
                                </Typography>
                            </Box>

                            {/* News Image */}
                            <CardMedia
                                component="img"
                                height="200"
                                image={news.image}
                                alt={news.title}
                            />

                            <CardContent sx={{ position: 'relative' }}>
                                {/* Title */}
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: news.isLatest ? "white" : '#3f4d5b',
                                        textTransform: "uppercase"
                                    }}
                                >
                                    {news.title}
                                </Typography>

                                {/* Author Info */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        marginY: 1,
                                        color: news.isLatest ? "white" : '#3f4d5b'
                                    }}
                                >
                                    {news.author} <ForumIcon sx={{ fontSize: "15px", marginBottom: "-3px", color: news.isLatest ? "white" : "#00c0e4" }} /> {news.comments}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: news.isLatest ? "white" : '#3f4d5b'
                                    }}
                                >
                                    {news.description}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
