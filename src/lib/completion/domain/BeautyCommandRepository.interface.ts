import { BeautyCommand } from "./BeautyCommand.class";

export interface BeautyCommandRepository {
  findAll(): BeautyCommand[];
}
