import { readFileSync } from 'fs';

export const createSchema = () => {
    return readFileSync('../../schema.graphql', 'utf-8');
}