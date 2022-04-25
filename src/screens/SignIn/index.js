import React, {useState} from 'react';
import {Text} from 'react-native';
import BarberLogo from '../../assets/barber.svg';
import SignInput from '../../components/SignInput';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    
  return (
    <Container>
      <BarberLogo widh="100%" height="160" />

      <InputArea>
        <SignInput IconSvg={EmailIcon}
                placeholder= "Digite seu e-mail"
                value={emailField}
                onChangeText={t => setEmailField(t)}
                 />
        <SignInput 
        IconSvg={LockIcon} 
        placeholder= "Digite sua senha"
        value={passwordField}
        onChangeText={p => setPasswordField(p)}
        password={true}
        
        />
        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>
          Ainda nao possui uma conta?{' '}
        </SignMessageButtonText>
        <SignMessageButtonTextBold>cadastre-se </SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
