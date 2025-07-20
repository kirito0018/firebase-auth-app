import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Container, Typography, Button, Box } from '@mui/material';

export default function Home() {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user) {
            navigate('/dashboard');
        }
    }, [user, loading, navigate]);

    return (
        <Container>
            <Box mt={10} textAlign="center">
                <Typography variant="h4" gutterBottom>
                    Welcome to the App
                </Typography>

                {!user && !loading && (
                    <>
                        <Typography variant="body1" gutterBottom>
                            Please login to access your dashboard.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/login"
                        >
                            Go to Login
                        </Button>
                    </>
                )}
            </Box>
        </Container>
    );
}
