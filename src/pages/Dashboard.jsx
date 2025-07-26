import { useContext, useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
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

    return (
        <Container>
            <Box mt={5}>
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
