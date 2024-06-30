import { Form, Link } from 'react-router-dom';
import { FormikErrors, useFormik } from 'formik';
import { SerializedError } from '@reduxjs/toolkit';

import { ServerError } from '@/types/serverError';

import { Input } from '@/components/UI/Input';
import { Button } from '@/components/UI/Button';
import { ErrorMessage } from '@/components/UI/Error';

import { useSignUpMutation } from '@/redux/endpoints/userEndpoints';

import { isServerError } from '@/helpers/validators/isServerError';

import { EMAIL_REGEX, NAME_REGEX } from '@/constants/constants';

type SignUpFormType = {
  signUpEmail: string;
  signUpName: string;
  signUpPassword: string;
  signUpConfirmPassword: string;
  serverError: string;
};

export const SignUpForm = () => {
  const [signUpUser] = useSignUpMutation();

  const { handleChange, handleSubmit, values, errors, isSubmitting, setErrors } =
    useFormik<SignUpFormType>({
      initialValues: {
        signUpEmail: '',
        signUpName: '',
        signUpPassword: '',
        signUpConfirmPassword: '',
        serverError: '',
      },
      validate: ({ signUpEmail, signUpName, signUpPassword, signUpConfirmPassword }) => {
        const errors: FormikErrors<SignUpFormType> = {};

        if (!EMAIL_REGEX.test(signUpEmail)) {
          errors.signUpEmail = 'Invalid login';
        }

        if (!NAME_REGEX.test(signUpName)) {
          errors.signUpName = 'Invalid username. Use "a-z,A-Z,0-9", length 6-20 characters';
        }

        if (signUpPassword.length < 8 || signUpPassword.length > 20) {
          errors.signUpPassword = 'Invalid password, length 8-20 characters';
        }

        if (signUpPassword !== signUpConfirmPassword) {
          errors.signUpConfirmPassword = 'Passwords don`t match';
        }

        return errors;
      },
      onSubmit: async ({ signUpEmail, signUpName, signUpPassword }) => {
        const userData = { email: signUpEmail, name: signUpName, password: signUpPassword };
        await signUpUser(userData)
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
      id="sign-up"
      className="animate-bounceIn md:translate-x-full md:min-h-[30rem] flex flex-col justify-center rounded p-5 sm:p-10 z-20 min-w-[300px] bg-white dark:bg-zinc-900">
      <h3 className="text-3xl text-center">Sign up</h3>
      <div className="grid gap-4 mt-8 mb-2">
        <Input
          value={values.signUpEmail}
          onChange={handleChange}
          id="sign-up-email"
          label="Email"
          type="text"
          name="signUpEmail"
        />
        <Input
          value={values.signUpName}
          onChange={handleChange}
          id="sign-up-name"
          label="Name"
          type="text"
          name="signUpName"
        />
        <Input
          value={values.signUpPassword}
          onChange={handleChange}
          id="sign-up-password"
          label="Password"
          type="password"
          name="signUpPassword"
        />
        <Input
          value={values.signUpConfirmPassword}
          onChange={handleChange}
          id="sign-up-password-confirm"
          label="Confirm password"
          type="password"
          name="signUpConfirmPassword"
        />
      </div>
      <ErrorMessage
        error={
          errors.signUpEmail ||
          errors.signUpName ||
          errors.signUpPassword ||
          errors.signUpConfirmPassword ||
          errors.serverError
        }
      />
      <Button variant="gradient" type="submit" disabled={isSubmitting} className="text-md">
        {isSubmitting ? 'Loading...' : 'Sign up'}
      </Button>
      <div className="mt-3 text-center md:hidden">
        Have an account?{' '}
        <Link className="text-main font-bold" to="/user/sign-in">
          Sign in!
        </Link>
      </div>
    </Form>
  );
};
