import { useState } from 'react';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    setError('');
    try {
      if (isLogin) {
        // Log in existing user
        await auth.signInWithEmailAndPassword(email, password);
      } else {
        // Sign up new user
        await auth.createUserWithEmailAndPassword(email, password);
      }
      router.push('/'); // Redirect to the home page after login/signup
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button onClick={handleAuth}>
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
      <button onClick={toggleAuthMode}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
}
