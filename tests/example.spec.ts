import { test, expect } from '@playwright/test';
import logger from '../logger/logger';

test('test', async () => {
  logger.info('in test - winston');
});
