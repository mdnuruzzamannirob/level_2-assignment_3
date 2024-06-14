export type TErrorMessages = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  status: number;
  message: string;
  errorMessages: TErrorMessages;
};
