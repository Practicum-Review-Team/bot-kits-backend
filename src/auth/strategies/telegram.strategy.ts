import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-telegram-web-app';

@Injectable()
export class TelegramStrategy extends PassportStrategy(Strategy, 'telegram') {
  constructor() {
    super({
      token: '6239098205:AAFx42GKdy5td8tEbts9ePkEgBxxj9SrsFo', // ваш токен
      expiration: 3600, // опционально: время жизни токена в секундах
      passRequestToCallback: false, // не передавать запрос в коллбэк функцию
    });
  }

  async validate(payload: any): Promise<any> {
    console.log(payload); // логирование полезно для отладки
    // Здесь вы можете обработать полученные данные
    const user = {
      telegramId: payload.id,
      firstName: payload.first_name,
      lastName: payload.last_name,
      avatar: payload.photo_url,
      authDate: payload.auth_date,
    };
    return user;
  }
}
