import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import { supabase } from '../../lib/supabase'

const Container = styled.main`
    max-width: 100%;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    color: ${({ theme }) => theme.textColor};
    @media screen and (min-width: 960px) {
        max-width: 40%;
    }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.titleColor};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 6px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.textColor};
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover { opacity: 0.9; }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

const ResetPassword: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [message, setMessage] = useState('');
    const [canReset, setCanReset] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === 'PASSWORD_RECOVERY') {
                    setCanReset(true);
                }
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const handleReset = async () => {
        if (!canReset) {
            setMessage(t('animio.resetPassword.messages.invalid'));
            return;
        }
        if (!password || password.length < 6) {
            setMessage(t('animio.resetPassword.messages.short'));
            return;
        }
        if (password !== confirm) {
            setMessage(t('animio.resetPassword.messages.mismatch'));
            return;
        }

        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            setMessage(`${t('animio.resetPassword.messages.error')} ${error.message}`);
        } else {
            setMessage(t('animio.resetPassword.messages.success'));
            setPassword('');
            setConfirm('');
        }
    };

    return (
        <Container>
            <Title>{t('animio.resetPassword.title')}</Title>
            <Description>{t('animio.resetPassword.description')}</Description>

            <Input
                type="password"
                placeholder={t('animio.resetPassword.newPassword')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                type="password"
                placeholder={t('animio.resetPassword.confirmPassword')}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
            />

            <Button onClick={handleReset}>{t('animio.resetPassword.button')}</Button>
            {message && <Message>{message}</Message>}
        </Container>
    );
};

export default ResetPassword;