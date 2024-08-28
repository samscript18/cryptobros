import { http } from '../configs/http.config';
import { SignUpDto } from '../schema/dtos';

export const signUp = async (signUpDto: SignUpDto) => {
  const response = await http.post('/auth/register', signUpDto);

  return response.data;
};
