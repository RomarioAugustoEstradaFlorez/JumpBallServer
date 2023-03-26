import {repository} from '@loopback/repository';
import {del, get, param, post, put, requestBody} from '@loopback/rest';
import {v4 as uuidv4} from 'uuid';
import {Score} from '../models';
import {ScoreRepository} from '../repositories/score.repository';

export class ScoreController {
  constructor(
    @repository(ScoreRepository)
    public scoreRepository: ScoreRepository,
  ) {}

  @post('/scores')
  async create(@requestBody() score: Score): Promise<Score> {
    // Generate an ID
    score.id = uuidv4();

    return this.scoreRepository.create(score);
  }

  @get('/scores/{id}')
  async findById(@param.path.number('id') id: string): Promise<Score> {
    return this.scoreRepository.findById(id);
  }

  @get('/scores')
  async find(): Promise<Score[]> {
    return this.scoreRepository.find();
  }

  @put('/scores/{id}')
  async updateById(
    @param.path.number('id') id: string,
    @requestBody() score: Score,
  ): Promise<void> {
    if (!score.id) {
      score.id = uuidv4();
    }

    await this.scoreRepository.updateById(id, score);
  }

  @del('/scores/{id}')
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.scoreRepository.deleteById(id);
  }
}
