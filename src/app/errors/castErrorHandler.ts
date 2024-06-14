import httpStatus from 'http-status';
import { Error } from 'mongoose';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

export const castErrorHandler = (
  error: Error.CastError,
): TGenericErrorResponse => {
  const errorMessages: TErrorMessages = [
    {
      path: error?.path,
      message: error?.message,
    },
  ];

  return {
    status: httpStatus.BAD_REQUEST,
    message: 'Invalid ID',
    errorMessages,
  };
};
