import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import zodErrorHandler from '../errors/zodErrorHandler';
import { TErrorMessages } from '../interface/error';
import { validationErrorHandler } from '../errors/validationErrorHandler';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let status = 500;
  let message = 'Something went wrong';
  let errorMessages: TErrorMessages = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (error instanceof ZodError) {
    const simplifiedError = zodErrorHandler(error);
    status = simplifiedError.status;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error.name === 'ValidationError') {
    const simplifiedError = validationErrorHandler(error);
    status = simplifiedError.status;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }

  return res.status(status).json({
    success: false,
    message,
    errorMessages,
  });
};

export default globalErrorHandler;