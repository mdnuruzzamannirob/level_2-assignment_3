import asyncFunctionHandler from '../../utils/asyncFunctionHandler';
import responseHandler from '../../utils/responseHandler';
import { UserServices } from './user.service';

const createUser = asyncFunctionHandler(async (req, res) => {
  const result = UserServices.createUserIntoDB(req.body);

  responseHandler(res, {
    message: 'User registered successfully',
    data: result,
  });
});

const loginUser = asyncFunctionHandler(async (req, res) => {
  const result = UserServices.createUserIntoDB(req.body);

  responseHandler(res, {
    message: 'User logged in successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  loginUser,
};
