import { useState, useCallback } from 'react';
import Effect from '../../asset/login/effect.svg';
import FmyLogo from '../../asset/sidebar/FmyLogo.svg';
import Analysis from '../../asset/login/login_analysis.svg';
import './Login.css';

export interface LoginProps {
  onSubmit: () => void;
}

function Login({ onSubmit }: LoginProps) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = useCallback(() => {
    if (!email || !pass) return;
    onSubmit();
  }, [email, pass, onSubmit]);

  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="login">
      <img
        src={FmyLogo}
        className="login__logo"
        alt="fmyLogo"
        onClick={handleReload}
        role="button"
        tabIndex={0}
      />
      <img src={Effect} className="login__effect" alt="effect" />
      <img src={Analysis} className="login__analysis" alt="analysis" />
      <div className="login__card">
        <div className="login__title">Sign in</div>
        <div className="login__field">
          <input
            type="text"
            placeholder="Enter your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
        </div>
        <div className="login__field">
          <input
            type="password"
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            aria-label="Password"
          />
        </div>
        <div
          className="login__submit"
          onClick={handleSubmit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        >
          Get Started
        </div>
        <div className="login__terms">
          By entering your e-mail address you confirm that you agree with our{' '}
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
