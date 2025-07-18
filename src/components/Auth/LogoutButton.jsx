import { Button } from '@mui/material';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/login');
    };

    return (
        <Button color="secondary" variant="outlined" onClick={handleLogout}>
            Logout
        </Button>
    );
}
