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
  async create(@requestBody() score: Score): Promise<Score | void | boolean> {
    const nameExists = await this.scoreNameAlreadyExists(score.name);
    if (nameExists) {
      const scoreEx = await this.scoreRepository.findOne({ where: { name: score.name } });
      if(scoreEx) return this.scoreRepository.updateById(scoreEx.id, score);
      else return false;
    }
    // Generate an ID
    score.id = uuidv4();

    return this.scoreRepository.create(score);
  }

  @get('/scores/{id}')
  async findById(@param.path.string('id') id: string): Promise<Score> {
    return this.scoreRepository.findById(id);
  }

  @get('/scoresByName/{name}')
  async findByName(@param.path.string('name') name: string): Promise<Score | null> {
    return this.scoreRepository.findOne({ where: { name } });
  }

  @get('/scores')
  async find(): Promise<Score[]> {
    return this.scoreRepository.find();
  }

  @put('/scores/{id}')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() score: Score,
  ): Promise<void> {
    if (!score.id) {
      score.id = uuidv4();
    }

    await this.scoreRepository.updateById(id, score);
  }

  @del('/scores/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.scoreRepository.deleteById(id);
  }


  // helpers
  async scoreNameAlreadyExists(name: string): Promise<boolean> {
    const existingScore = await this.scoreRepository.findOne({ where: { name } });
    return !!existingScore;
  }
}
