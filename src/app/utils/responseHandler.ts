import { Response } from 'express';
import httpStatus from 'http-status';

const responseHandler = <T>(
  res: Response,
  data: { message: string; data: T },
) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: data.message,
    data: data.data,
  });
};

export default responseHandler;
