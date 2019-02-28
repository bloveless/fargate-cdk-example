#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { FargateCdkStack } from '../lib/fargate-cdk-stack';

const app = new cdk.App();
new FargateCdkStack(app, 'FargateCdkStack');
app.run();
