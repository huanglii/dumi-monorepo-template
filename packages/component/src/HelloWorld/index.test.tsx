import { describe } from 'vitest';
import HelloWorld from '.';
import mountTest from '../../../../tests/mountTest';

describe('HelloWorld', () => {
  mountTest(HelloWorld);
});
