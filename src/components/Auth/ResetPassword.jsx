import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
} from '@mui/material';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async () => {
        setSuccess('');
        setError('');
        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess('Password reset email sent. Check your inbox.');
        } catch (err) {
            setError('Error sending reset email. Make sure the email is valid.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={10}>
                <Typography variant="h5" gutterBottom>
                    Reset Password
                </Typography>
                {success && <Alert severity="success">{success}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleResetPassword}>
                    Send Reset Link
                </Button>
            </Box>
        </Container>
    );
}
