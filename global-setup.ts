import { FullConfig } from '@playwright/test';
import logger from './logger/logger';

async function globalSetup(config: FullConfig) {
    logger.info('in global setup - winston');
}

export default globalSetup;