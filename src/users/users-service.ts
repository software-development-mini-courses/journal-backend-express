import { db, tables } from '../infrastructure/db';
import { User } from './user';

async function createUser(id: string): Promise<User> {
  const result = await db<User>(tables.users).insert({ id }).returning('*');

  return result[0];
}

async function getUser(id: string): Promise<User | null> {
  const user = await db<User>(tables.users).where({ id }).first();

  if (!user) {
    return null;
  }

  return user;
}

export { createUser, getUser };
