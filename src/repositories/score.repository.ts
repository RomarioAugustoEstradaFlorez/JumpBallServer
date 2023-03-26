import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {v4 as uuidv4} from 'uuid';
import {Score} from '../models';

export class ScoreRepository extends DefaultCrudRepository<
  Score,
  typeof Score.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
  ) {
    // Call the constructor of the parent class with the Score model and the
    // provided dataSource.
    super(Score, dataSource);
  }

  async create(score: Score): Promise<Score> {
    // Generate an ID
    score.id = uuidv4();

    return super.create(score);
  }
}
