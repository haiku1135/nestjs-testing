// 必要なデコレータをインポート
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// クラスがEntityであることを定義するデコレータ
@Entity()
export class Task {
  // 自動採番の主キーカラムであることを定義するデコレータ
  @PrimaryGeneratedColumn()
  id: number;

  //  テーブルのカラムであることを定義するデコレータ
  @Column()
  name: string; // タスクの名前

  // デコレータの引数にデフォルト値を設定することも可能
  @Column({ default: false })
  isCompleted: boolean; // タスクが完了しているかどうかを判定する
}
