import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { JWT } from '../dto/jwt.model';
import { LoginInput } from '../dto/login.input';
import { RegisterInput } from '../dto/user.input';
import { User } from '../dto/user.model';
import { UsersService } from '../users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('id') id: string) {
    const user = await this.usersService.getUser(id);
    return user;
  }

  @Query(() => JWT)
  async jwt(@Args('jwt') loginInput: LoginInput) {
    const token = await this.usersService.loginUser(loginInput);
    return token;
  }

  @Mutation(() => User)
  async register(@Args('registerInput') registerInput: RegisterInput) {
    const user = await this.usersService.registrUser(registerInput);
    return user;
  }

  @Mutation(() => JWT)
  async loginUser(@Args('loginUser') loginInput: LoginInput) {
    const token = await this.usersService.loginUser(loginInput);
    return token;
  }
}
