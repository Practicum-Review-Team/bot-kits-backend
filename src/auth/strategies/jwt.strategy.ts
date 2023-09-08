//src/auth/startegies/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProfilesService } from 'src/profiles/profiles.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private profilesService: ProfilesService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        configService.get<string>('JWT_SECCRET') || 'some_super_secret',
    });
  }

  async validate(jwtPayload: { sub: number }) {
    const user = await this.profilesService.findOne(jwtPayload.sub);
    if (!user) {
      throw new UnauthorizedException('Пользователь не авторизован');
    }
    return user;
  }
}
