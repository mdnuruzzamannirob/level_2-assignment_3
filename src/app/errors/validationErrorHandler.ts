import httpStatus from 'http-status';
import { Error } from 'mongoose';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

export const validationErrorHandler = (
  error: Error.ValidationError,
): TGenericErrorResponse => {
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
