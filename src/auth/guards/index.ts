import { JwtGuard } from './jwtAuth.guards';
import { LocalGuard } from './localAuth.guard';
import { TelegramGuard } from './telegram.guard';
import { YandexGuard } from './yandex.guards';

export const GUARDS = [LocalGuard, JwtGuard, YandexGuard, TelegramGuard];
