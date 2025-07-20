import { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
} from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        setError('');
        setSuccess('');

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Account created successfully!');
            navigate('/dashboard');
        } catch (err) {
            setError('Registration failed. Email may already be in use.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={10}>
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}

                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleRegister}
                    sx={{ mt: 2 }}
                >
                    Register
                </Button>

                <Box mt={2} textAlign="center">
                    <Typography variant="body2">
                        Already have an account?{' '}
                        <Button component={Link} to="/login">Login</Button>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
