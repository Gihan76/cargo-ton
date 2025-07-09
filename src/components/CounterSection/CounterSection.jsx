import { Box, useMediaQuery, useTheme } from '@mui/material'
import { CounterItem } from './CounterItem'

const counterData = [
    {
        target: 890,
        suffix: "+",
        label: "Delivered packages",
    },
    {
        target: 137,
        suffix: "+",
        label: "Countries Covered",
    },
    {
        target: 740,
        suffix: "+",
        label: "Tons of Goods",
    },
    {
        target: 600,
        suffix: "+",
        label: "Satisfied Clients",
    },
];

export const CounterSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-around',
            }}
        >
            {counterData.map((item, index) => (
                <CounterItem
                    key={index}
                    target={item.target}
                    suffix={item.suffix}
                    label={item.label}
                />
            ))}
        </Box>
    )
}
