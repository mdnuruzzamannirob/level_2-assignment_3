import { TErrorMessages, TGenericErrorResponse } from '../interface/error';
import httpStatus from 'http-status';

export const duplicateErrorhandler = (error: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = error.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorMessages: TErrorMessages = [
    {
      path: '',
      message: `${extractedMessage} is already exists !`,
    },
  ];

  return {
    status: httpStatus.BAD_REQUEST,
    message: 'Invalid Id',
    errorMessages,
  };
};
