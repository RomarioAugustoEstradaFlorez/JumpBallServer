import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Score extends Entity {
  @property({
    type: 'string',
    id: true,
    mysql: {
      columnName: 'id'
    }
  })
  id: string;

  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'name'
    }
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    mysql: {
      columnName: 'score'
    }
  })
  score: number;

  constructor(data?: Partial<Score>) {
    super(data);
  }
}

export type ScoreWithRelations = Score;
