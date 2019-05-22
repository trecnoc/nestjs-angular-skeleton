import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as path from 'path';

const ROUTE_PREFIX = 'api';
const UI_APP_NAME = 'angular-skeleton';
const resolvePath = (file: string) => path.resolve(`dist/${UI_APP_NAME}/${file}`);

@Injectable()
export class FrontEndMiddleware implements NestMiddleware {

  private readonly allowedExt = [
    '.js',
    'ico',
    'css',
    'png',
    'jpg',
    'woff2',
    'ttf',
    'svg',
  ];

  use(req: Request, res: Response, next: () => void) {
    const {baseUrl} = req;

    if (baseUrl.indexOf(ROUTE_PREFIX) === 1) {
      // continue to other routes if contains 'api'
      next();
    } else if (this.allowedExt.filter(ext => baseUrl.indexOf(ext) > 0).length > 0) {
      // if it has an allowed extension try to serve the file
      res.sendFile(resolvePath(baseUrl));
    } else {
      // in all other cases serve our angular app, NOTE: this will only work in prod
      res.sendFile(resolvePath('index.html'));
    }
  }
}
