import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme, View, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { awsExport } from './aws-exports';
Amplify.configure(awsExport);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign='center' padding={tokens.space.large}>
        <Image alt='logo' src='' />
      </View>
    );
  },
};

export default function App() {
  return (
    <Authenticator loginMechanisms={['email']} components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
