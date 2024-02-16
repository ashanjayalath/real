'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useFormik } from "formik";
import router from 'next/router';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      fname:'',
      lname:'',
    },
    onSubmit: async (values) => {
      try{
        alert(JSON.stringify(values));
        const response = await fetch('http://localhost:3008/api/user/register',{
          method:'POST',
          body:JSON.stringify(values),
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        if (response.status === 200){
            router.push(`/signin`);
        }else if(response.status === 400){
          <Alert status='error'><AlertIcon />{responseData.statusText}</Alert>
        }else{
          <Alert status='warning'><AlertIcon />{responseData.statusText}</Alert>
        }
      }catch (err){
        console.log(err)
      }
    }
  });


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            
            <Stack spacing={4}>
            <form onSubmit={formik.handleSubmit}>
              <HStack>
                <Box>
                  <FormControl id="fname">
                    <FormLabel>First Name</FormLabel>
                    <Input 
                    id='fname'
                    name='fname'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.fname}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lname">
                    <FormLabel>Last Name</FormLabel>
                    <Input 
                      id='lname'
                      name='lname'
                      type='text'
                      onChange={formik.handleChange}
                      value={formik.values.lname}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                    id="password" 
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
            </form>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} href='/signin'>Login</Link>
                </Text>
              </Stack>
            </Stack>
          
        </Box>
      </Stack>
    </Flex>
  )
}