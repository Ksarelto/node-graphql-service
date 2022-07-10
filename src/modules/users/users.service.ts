import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';
import { LoginInput } from './dto/login.input';
import { RegisterInput } from './dto/user.input';

@Injectable()
export class UsersService {
  private user: AxiosInstance;

  constructor() {
    this.user = axios.create({
      baseURL: process.env.USERS_URL,
    });
  }

  async getUser(id: string) {
    const response = await this.user.get(`/${id}`);
    const parsedData = idParser(response.data);
    return parsedData;
  }

  async registrUser(userData: RegisterInput) {
    const response = await this.user.post('/register', userData);
    const parsedData = idParser(response.data);
    return parsedData;
  }

  async loginUser(loginData: LoginInput) {
    const response = await this.user.post('/login', loginData);
    return response.data;
  }
}
