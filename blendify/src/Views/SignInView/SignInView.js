import React, { useState } from 'react';
import './SignInView.css';
import spotifyLogo from './spotifyLogo.png';

export function SignInView({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        onSignIn();
    }

    return (
        <div className="signin-view">
            <h1 className="app-name">Blendify</h1> {/* This remains unchanged */}
            <div className="spotify-login-text">
                <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo"/>
                <span>Login to Spotify</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInView;