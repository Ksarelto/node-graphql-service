import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { errMess } from 'src/common/constants';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    try {
      const ctx = GqlExecutionContext.create(context);
      const token = this.getTokenFromHeader(ctx);
      return this.jwtService.verify(token, {
        secret: process.env.SECRET || 'secret-key',
      });
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        throw new HttpException(errMess.invalidToken, HttpStatus.UNAUTHORIZED);
      }

      throw err;
    }
  }

  private getTokenFromHeader(context: GqlExecutionContext) {
    const { req } = context.getContext();
    const tokenHeader = req.headers.authorization?.split(' ');

    if (!tokenHeader)
      throw new HttpException(errMess.emptyToken, HttpStatus.UNAUTHORIZED);
    const [bearer, token] = tokenHeader as string[];

    if (bearer !== 'Bearer' || !token)
      throw new HttpException(errMess.emptyToken, HttpStatus.UNAUTHORIZED);

    if (!process.env.SECRET)
      throw new HttpException(errMess.errorToken, HttpStatus.NOT_FOUND);

    return token;
  }
}
