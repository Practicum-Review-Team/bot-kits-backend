import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { TelegramStrategy } from './telegram.strategy';
import { YandexStrategy } from './yandex.strategy';

export const STRTAGIES = [
  LocalStrategy,
  JwtStrategy,
  YandexStrategy,
  TelegramStrategy,
];
