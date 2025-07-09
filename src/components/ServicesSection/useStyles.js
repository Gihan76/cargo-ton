import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useServicesStyles = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return {
        header: {
            textAlign: 'center',
        },
        title: {
            fontWeight: 'bold',
            color: "#99b96a",
        },
        subtitle: {
            fontWeight: 'bold',
            fontSize: isMobile ? '1.5rem' : '2rem',
        },
        description: {
            color: theme.palette.text.secondary,
            mb: 2,
        },
        footerText: {
            textAlign: 'center',
            mt: 1,
        }
    };
};