import { http } from '../configs/http.config';
import { SignUpDto } from '../schema/dtos';

export const signUp = async (signUpDto: SignUpDto) => {
  try {
    const response = await http.post('/register', signUpDto);

    return response.data;
  } catch (error) {}
};
