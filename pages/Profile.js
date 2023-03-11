import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function Profile({ user }) {
    const handleSignOut = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('Error signing out:', error);
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome, {user.username}!</p>
            <AmplifySignOut onSignOut={handleSignOut} />
        </div>
    );
}

export default withAuthenticator(Profile);
