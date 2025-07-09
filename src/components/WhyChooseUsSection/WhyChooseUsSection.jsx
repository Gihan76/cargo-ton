import { Box, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { AccordionItem } from './AccordionItem';

const accordionItems = [
    {
        title: "Nam libero tempore, cum soluta nobis est eligendi",
        description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        title: "optio cumque nihil impedit quo minus id quod maxime",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
    },
];

export const WhyChooseUsSection = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Box
            sx={{
                height: '100%',
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
                    WHY CHOOSE US
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
                    Ut enim ad minima veniam
                </Typography>

                <Box 
                >
                    {accordionItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}