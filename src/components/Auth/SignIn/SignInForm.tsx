import { Form, Link } from 'react-router-dom';
import { FormikErrors, useFormik } from 'formik';
import { SerializedError } from '@reduxjs/toolkit';

import { ServerError } from '@/types/serverError';

import { Input } from '@/components/UI/Input';
import { Button } from '@/components/UI/Button';
import { ErrorMessage } from '@/components/UI/Error';

import { useSignInMutation } from '@/redux/endpoints/userEndpoints';

import { isServerError } from '@/helpers/validators/isServerError';

type SignInFormType = {
  signInEmail: string;
  signInPassword: string;
  serverError: string;
};

export const SignInForm = () => {
  const [signInUser] = useSignInMutation();

  const { values, errors, isSubmitting, setErrors, handleChange, handleSubmit } =
    useFormik<SignInFormType>({
      initialValues: {
        signInEmail: '',
        signInPassword: '',
        serverError: '',
      },
      validate: ({ signInEmail, signInPassword }) => {
        const errors: FormikErrors<SignInFormType> = {};

        if (!signInEmail) {
          errors.signInEmail = 'Email is required';
        }

        if (!signInPassword) {
          errors.signInPassword = 'Password is required';
        }

        return errors;
      },
      onSubmit: async ({ signInEmail, signInPassword }) => {
        const userData = { email: signInEmail, password: signInPassword };
        await signInUser(userData)
          .unwrap()
          .catch((error: ServerError | SerializedError) => {
            setErrors({
              serverError: isServerError(error) ? error?.data?.message : error?.message,
            });
          });
      },
    });

  return (
    <Form
      onSubmit={handleSubmit}
      id="sign-in"
      className="animate-bounceIn md:-translate-x-full md:min-h-[30rem] flex flex-col justify-center rounded p-5 sm:p-10 z-20 bg-white dark:bg-zinc-900">
      <h3 className="text-3xl text-center">Sign in</h3>
      <div className="grid gap-4 mt-8 mb-2">
        <Input
          value={values.signInEmail}
          onChange={handleChange}
          id="sign-in-email"
          label="Email"
          type="text"
          name="signInEmail"
        />
        <Input
          value={values.signInPassword}
          onChange={handleChange}
          id="sign-in-password"
          label="Password"
          type="password"
          name="signInPassword"
        />
      </div>
      <ErrorMessage error={errors.signInEmail || errors.signInPassword || errors.serverError} />
      <Button variant="gradient" type="submit" disabled={isSubmitting} className="text-md">
        {isSubmitting ? 'Loading...' : 'Sign in'}
      </Button>
      <div className="mt-3 text-center md:hidden">
        Don&apos;t have an account?{' '}
        <Link className="text-main font-bold" to="/user/sign-up">
          Sign up!
        </Link>
      </div>
    </Form>
  );
};
