import { Card, Typography, Box } from '@mui/material';

export const TestimonialCard = ({ testimonial }) => {
    return (
        <Card
            sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                mx: 1,
                backgroundColor: "#eeeeee"
            }}
        >
            <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                "{testimonial.quote}"
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: "right" }}>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}