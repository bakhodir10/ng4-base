
export interface BaseService<T> {
  create(entity: T): Promise<T>;
  read(): Promise<T[]>;
  findOne(id: number): Promise<T>
  update(id: number, entity: T): Promise<T>;
  delete(id: number): Promise<void>;
}
