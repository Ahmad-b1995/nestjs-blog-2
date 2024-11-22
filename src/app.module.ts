import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ArticleModule } from '@app/article/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
