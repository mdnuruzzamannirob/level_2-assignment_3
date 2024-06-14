import httpStatus from 'http-status';
import { Error } from 'mongoose';
import { TErrorMessages } from '../interface/error';

export const validationErrorHandler = (error: Error.ValidationError) => {
  const errorMessages: TErrorMessages = Object.values(error.errors).map(
    (value: Error.ValidatorError | Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );

  return {
    status: httpStatus.BAD_REQUEST,
    message: 'Validation error',
    errorMessages,
  };
};
