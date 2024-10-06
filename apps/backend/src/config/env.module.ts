import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchemaForEnv } from './env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: validationSchemaForEnv,
    }),
  ],
  exports: [ConfigModule],
})
export class EnvModule {}
