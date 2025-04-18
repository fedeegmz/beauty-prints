import { BeautyCommand } from "../domain/BeautyCommand.class";
import { BeautyCommandRepository } from "../domain/BeautyCommandRepository.interface";

export class FindAllBeautyCommand {
  repository: BeautyCommandRepository;

  constructor(repository: BeautyCommandRepository) {
    this.repository = repository;
  }

  run(): BeautyCommand[] {
    return this.repository.findAll();
  }
}
