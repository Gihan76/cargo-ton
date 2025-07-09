import { Grid } from '@mui/material';
import { TestimonialSection } from './TestimonialsSection/TestimonialSection';
import { WhyChooseUsSection } from './WhyChooseUsSection/WhyChooseUsSection';

export const TestimoniolCombinedSection = () => {
    return (
        <Grid container size={12}>
            <Grid size={{xl: 6, lg: 6, md: 6, sm: 12, xs: 12}}>
                <TestimonialSection />
            </Grid>
            <Grid size={{xl: 6, lg: 6, md: 6, sm: 12, xs: 12}}>
                <WhyChooseUsSection />
            </Grid>
        </Grid>
    )
}