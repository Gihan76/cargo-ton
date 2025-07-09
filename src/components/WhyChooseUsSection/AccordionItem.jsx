import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const AccordionItem = ({ title, description, expanded, onChange }) => {
    return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
            sx={{
                boxShadow: 'none',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider',
                mb: 2,
                '&:before': {
                    display: 'none'
                }
            }}
        >
            <AccordionSummary
                expandIcon={
                    expanded ?
                        <RemoveCircleIcon sx={{ color: "black"}}/>
                        :
                        <AddBoxIcon sx={{ color: "black"}}/>
                }
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 2 }}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="text.secondary">
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}