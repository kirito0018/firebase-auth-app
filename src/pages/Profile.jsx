import { useContext, useEffect, useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { db } from '../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from 'firebase/auth';

export default function Profile() {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [originalName, setOriginalName] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [editPassword, setEditPassword] = useState(false);
    const navigate = useNavigate();

    const isPaswordEditable = user?.providerData[0]?.providerId === 'password';
    const isTestUser = user?.email === 'teste@gmail.com';
    const isPasswordChangeAllowed = isPaswordEditable && !isTestUser;

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const ref = doc(db, 'users', user.uid);
                const snap = await getDoc(ref);
                if (snap.exists()) {
                    const data = snap.data();
                    setName(data.name || '');
                    setOriginalName(data.name || '');
                }
            } catch (err) {
                setError('Failed to load user data.');
            }
        };

        if (user) {
            fetchUserName();
        }
    }, [user]);

    const handleSave = async () => {
        setError('');
        setSuccess('');

        try {
            if (!isTestUser && editPassword && password.trim() > 0) {
                if (password.length < 6) {
                    setError('Password must be at least 6 characters long.');
                    return;
                }
                await updatePassword(user, password.trim());
            }

            await setDoc(doc(db, 'users', user.uid), {
                name: name.trim(),
            });

            setOriginalName(name.trim());
            setSuccess('Name updated successfully!');

            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } catch (err) {
            setError('Error saving name.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={10} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5" gutterBottom>
                    Edit Profile
                </Typography>

                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {isPasswordChangeAllowed && (
                    <>
                        <TextField
                            label="New Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            disabled={!editPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            variant="text"
                            color="secondary"
                            sx={{ mb: 2 }}
                            onClick={() => setEditPassword(true)}
                        >
                            Change Password
                        </Button>
                    </>
                )}

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSave}
                    disabled={(
                        name.trim() === originalName.trim() &&
                        (!editPassword || password.trim() === '')
                    ) ||
                        (isPasswordChangeAllowed && editPassword && password.length < 6)
                    }
                >
                    Save Changes
                </Button>
            </Box>
        </Container>
    );
}
