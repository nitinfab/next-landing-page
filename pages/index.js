import { withAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Profile from './Profile';

function Home({ user }) {
  if (user) {
    return <Profile user={user} />;
  } else {
    return (
      <div>
        <h1>Welcome to my app!</h1>
        <AmplifySignIn />
      </div>
    );
  }
}

export default withAuthenticator(Home);