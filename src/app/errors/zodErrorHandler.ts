import httpStatus from 'http-status';
import { ZodError } from 'zod';

const zodErrorHandler = (error: ZodError) => {
  const errorMessages = error?.issues?.map((issue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    status: httpStatus.BAD_REQUEST,
    message: 'Validation error',
    errorMessages,
  };
};

export default zodErrorHandler;