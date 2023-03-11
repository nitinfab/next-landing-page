import { withAuthenticator } from '@aws-amplify/ui-react';


function Home({ signOut, user }) {
  return (
    <div style={{ padding: 50 }}>
      <h1>Hello, {user.username}.</h1>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default withAuthenticator(Home);
