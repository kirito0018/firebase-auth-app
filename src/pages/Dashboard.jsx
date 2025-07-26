import { useContext, useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import LogoutButton from '../components/Auth/LogoutButton';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState('');

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
                    Welcome{ name ? `, ${name}` : ''}!
                </Typography>
                <LogoutButton />
            </Box>
        </Container>
    );
}
