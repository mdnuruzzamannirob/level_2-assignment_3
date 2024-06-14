import { NextFunction, Request, Response } from 'express';
import { TErrorMessages } from '../interface/error';
import httpStatus from 'http-status';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  let errorMessages: TErrorMessages = [
    {
      path: '',
      message: 'API Not Found !',
    },
  ];
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !',
    errorMessages,
    stack: null,
  });
};

export default notFoundHandler;
