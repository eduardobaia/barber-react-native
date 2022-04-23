import React from 'react';
import {Text} from 'react-native';
import BarberLogo from '../../assets/barber.svg';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

export default () => {
  return (
    <Container>
      <BarberLogo widh="100%" height="160" />

      <InputArea>
        {/* <SingInput >

        </SingInput> */}
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
