import { Box, useMediaQuery, useTheme } from '@mui/material'
import { CounterItem } from './CounterItem'
import { counterData } from '../../config/Constants';

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
