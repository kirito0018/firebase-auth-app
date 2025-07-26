import { useContext, useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';
import LogoutButton from '../components/Auth/LogoutButton';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setName(docSnap.data().name);
                } else {
                    setName('User');
                }
            }
        };
        fetchUserData();
    }, [user]);

    const avatarSrc = user?.photoURL ?? '';
    const avatarFallback = name ? name.charAt(0).toUpperCase() : '?';

    return (
        <Container>
            <Box mt={5}>
                <Avatar
                    src={avatarSrc}
                    alt={name}
                    sx={{ width: 72, height: 72, mb: 2 }}
                >
                    {!avatarSrc && avatarFallback}
                </Avatar>

                <Typography variant="h4" gutterBottom>
                    Welcome{name ? `, ${name}` : ''}!
                </Typography>

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate('/profile')}
                    sx={{ mr: 2 }}
                >
                    Edit Profile
                </Button>

                <LogoutButton />
            </Box>
        </Container>
    );
}
