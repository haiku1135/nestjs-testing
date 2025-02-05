import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // 開発用コンテナのポートを指定
      username: 'root',
      password: 'secret',
      database: 'mydb-dev', // 開発用のデータベース名を指定
      autoLoadEntities: true, // trueとすると、Entityが自動で読み込まれる
      synchronize: true, // trueとすると、アプリケーションを起動時に自動でテーブルが作成
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
