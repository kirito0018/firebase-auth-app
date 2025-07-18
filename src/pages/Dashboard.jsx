import { Container, Typography, Box } from '@mui/material';
import LogoutButton from '../components/Auth/LogoutButton';

export default function Dashboard() {
    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Welcome to your Dashboard!
                </Typography>
                <LogoutButton />
            </Box>
        </Container>
    );
}
