'use client'
import { FcGoogle } from 'react-icons/fc'
import { useFormik } from "formik";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue, Center 
} from '@chakra-ui/react'
import Link from 'next/link'
import router from 'next/router';

export default function SignInPage() {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: async (values) => {
      try{
        const response = await fetch('http://localhost:3008/api/user/login',{
          method:'POST',
          body:JSON.stringify(values),
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        console.log(responseData)
        if (response.status === 200){

            // router.push(`/`);
            // return(<VerifyEmail email={values.email}/>);
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
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input id="password" 
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                />
              </FormControl>
       
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}><Link href={"/ForgetPassword"}>Forgot password?</Link></Text>
                </Stack>
                <Button
                type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              </form>
            
            <Center>
              <Button w={'full'}variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Center>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}