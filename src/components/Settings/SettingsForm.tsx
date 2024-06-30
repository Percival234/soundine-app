import { Form } from 'react-router-dom';
import { FormikErrors, useFormik } from 'formik';
import { SerializedError } from '@reduxjs/toolkit';

import { ServerError } from '@/types/serverError';

import { Input } from '@/components/UI/Input';
import { Button } from '@/components/UI/Button';
import { ErrorMessage } from '@/components/UI/Error';

import { useAppContext } from '@/hooks/useAppContext';
import { useAppSelector } from '@/hooks/useAppSelector';

import { useUpdateUserMutation } from '@/redux/endpoints/userEndpoints';

import { isServerError } from '@/helpers/validators/isServerError';

import { EMAIL_REGEX, NAME_REGEX } from '@/constants/constants';

type SettingFormType = {
  userName: string;
  userEmail: string;
  serverError: string;
};

export const SettingsForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const { handleDeleteUserVisibility } = useAppContext();
  const [updateUser] = useUpdateUserMutation();

  const { handleChange, handleSubmit, values, errors, isSubmitting, setErrors } = useFormik({
    initialValues: {
      userName: user?.name || '',
      userEmail: user?.email || '',
      serverError: '',
    },
    validate: ({ userEmail, userName }) => {
      const errors: FormikErrors<SettingFormType> = {};

      if (!EMAIL_REGEX.test(userEmail)) {
        errors.userEmail = 'Invalid login';
      }

      if (!NAME_REGEX.test(userName)) {
        errors.userName = 'Invalid username. Use "a-z,A-Z,0-9", length 6-20 characters';
      }

      return errors;
    },
    onSubmit: async ({ userEmail, userName }) => {
      const personal = { email: userEmail, name: userName };
      await updateUser({ personal })
        .unwrap()
        .catch((error: ServerError | SerializedError) => {
          setErrors({
            serverError: isServerError(error) ? error?.data?.message : error?.message,
          });
        });
    },
  });

  return (
    <Form onSubmit={handleSubmit} id="settings" className="flex flex-col justify-center w-[300px]">
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          label="Name"
          id="settings-name"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Email"
          id="settings-email"
          name="userEmail"
          value={values.userEmail}
          onChange={handleChange}
        />
        <ErrorMessage error={errors.userName || errors.userEmail || errors.serverError} />
      </div>
      <div className="flex gap-2">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submiting...' : 'Save changes'}
        </Button>
        <Button variant="outline" type="button" onClick={handleDeleteUserVisibility}>
          Delete account
        </Button>
      </div>
    </Form>
  );
};
