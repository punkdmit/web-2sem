import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

config();

const PORT = process.env.PORT || 3000;
console.log(process.env);
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public')); //обслуживание статических файлов
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //Сообщим приложению, где искать наши views
  app.setViewEngine('hbs'); //механизм шаблонов для отображения

  await app.listen(PORT); //создает прослушиватель на указанном порту или пути
}
bootstrap();
