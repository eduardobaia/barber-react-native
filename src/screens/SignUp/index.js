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

import { useNavigation
} from '@react-navigation/native';



import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Person from '../../assets/person.svg';

export default () => {

  const navigation = useNavigation();
    
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [nameField, setNameField] = useState('');

  const handleMessageButtonClick = () => {
    navigation.reset({
        routes:[{name: 'SignIn'}]
    })
    
  };
  const handleSignClick = () => {
 
  };

  return (
    <Container>
      <BarberLogo widh="100%" height="160" />

      

      <InputArea>


      <SignInput
          IconSvg={Person}
          placeholder="Nome"
          value={emailField}
          onChangeText={n => setNameField(n)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={p => setPasswordField(p)}
          password={true}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ja possui uma conta?{' '}
        </SignMessageButtonText>
        <SignMessageButtonTextBold> Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
