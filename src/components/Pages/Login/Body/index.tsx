import './index.css';

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Body: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: '', help: '' });
  const [password, setPassWord] = useState({ value: '', help: '' });

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ value: event.target.value, help: '' });
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassWord({ value: event.target.value, help: '' });
  };

  const handleLogin = () => {
    if (email.value !== 'danilo.saraiva68@gmail.com') {
      setEmail({
        value: email.value,
        help: 'Endereço de email ou telefone inválido.',
      });
      return;
    }

    if (password.value !== '123456') {
      setPassWord({ value: password.value, help: 'Senha inválida.' });
      return;
    }

    navigate('/');
  };

  // const validateEmail = (event: any) => {
  //   const email = event.target.value;
  //   if (email.length === 0) {
  //     setEmail({
  //       value: email,
  //       help: 'Informe um email ou número de telefone válido.',
  //     });
  //   }
  // };

  // const validatePassword = (event: any) => {
  //   const password = event.target.value;
  //   if (password.length < 4 || password.length > 60) {
  //     setPassWord({
  //       value: password,
  //       help: 'A senha deve ter entre 4 e 60 caracteres.',
  //     });
  //   }
  // };

  // const ColorButton = styled(Button)<ButtonProps>(() => ({
  //     marginTop:'15px',
  //     color: '#FFF',
  //     backgroundColor: '#e50914',
  //     '&:hover': {
  //       backgroundColor: '#B30911',
  //     },
  // }))
  return (
    <div className="container-card-login">
      <div className="card-login">
        <div className="card-header-login">
          <h1>Entrar</h1>
        </div>
        <FormControl id="email" isRequired my="20px">
          <FormLabel color="#7E7E7E">Email ou telefone</FormLabel>
          <Input
            type="text"
            placeholder="Email ou número de telefone"
            onChange={event => handleInputEmail(event)}
          />
          <FormHelperText color="#e87c03">
            Well never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl id="email" isRequired my="20px">
          <FormLabel color="#7E7E7E">Senha</FormLabel>
          <Input
            type="password"
            placeholder="Senha"
            onChange={event => handleInputPassword(event)}
          />
          <FormHelperText color="#e87c03">
            Well never share your email.
          </FormHelperText>
        </FormControl>
        <Button
          colorScheme="teal"
          size="md"
          width="100%"
          my="15px"
          bgColor="#e50914"
          _hover={{ bgColor: '#E50914BD' }}
          onClick={handleLogin}>
          Entrar
        </Button>
        {/* <div className='card-body-login'>
                        <TextField
                            onChange={(event)=>handleInputEmail(event)}
                            value={email.value}
                            id="email"
                            name="email"
                            label="Email ou número de telefone"
                            variant="filled"
                            margin="normal"
                            fullWidth={true}
                            color="warning"
                            onBlur={(event)=>validateEmail(event)}
                            helperText={email.help}
                            required
                            type="text"
                        />
                         <TextField
                            onChange={(event)=>handleInputPassword(event)}
                            value={password.value}
                            id="password"
                            label="Senha"
                            variant="filled"
                            margin="normal"
                            fullWidth={true}
                            color="warning"
                            onBlur={(event)=>validatePassword(event)}
                            helperText={password.help}
                            required
                            type="password"
                        />
                         <ColorButton
                            onClick={handleLogin}
                            variant="contained"
                            size="large"
                            fullWidth={true}
                        >Entrar</ColorButton>
    
                    </div> */}
        <div className="card-footer-login">
          <span>
            Este é uma projeto feito com <strong>ReactJS</strong> por{' '}
            <a href="https://github.com/VicenteDNL">Danilo Saraiva Vicente</a>,
            e tem por objetivo apenas o estudo da Biblioteca. Todos os direitos
            de Imagem são da NETFLIX.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body;
