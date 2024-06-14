import asyncFunctionHandler from '../../utils/asyncFunctionHandler';
import responseHandler from '../../utils/responseHandler';
import { UserServices } from './user.service';

const createUser = asyncFunctionHandler(async (req, res) => {
  const userData = req.body;

  const result = UserServices.createUserIntoDB(userData);

  responseHandler(res, {
    message: 'User is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};