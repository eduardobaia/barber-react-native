import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
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
import Api from '../../Api'


import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

  const navigation = useNavigation();
    
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleMessageButtonClick = () => {
    navigation.reset({
        routes:[{name: 'SignUp'}]
    })

  };
  const handleSignClick = async () => {
 
    if(emailField != '' && passwordField != ''){
        let json = await Api.signIn(emailField,passwordField);
        if(json.token){
  alert("deu certo ")
        }else {
            Alert.alert('Alerta','Email or passwrod errado')
        }
     
    }else{
           Alert.alert('Alerta ', 'Preencha os campos!')
    }
  };

  return (
    <Container>
      <BarberLogo widh="100%" height="160" />

      <InputArea>
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
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda nao possui uma conta?{' '}
        </SignMessageButtonText>
        <SignMessageButtonTextBold>cadastre-se </SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
