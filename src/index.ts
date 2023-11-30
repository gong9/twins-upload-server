import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as cors from '@koa/cors'
import  koaBody  from 'koa-body';
import * as path from 'path';
import * as koaStatic from 'koa-static';

import { PORT } from './config';
import AppRoutes from './routes';

const app = new Koa();
const router = new Router();


AppRoutes.forEach(route => router[route.method](route.path, route.action));

app.use(koaStatic(path.resolve(__dirname, '../uploads')));
app.use(koaStatic(path.resolve(__dirname, '../public')));
app.use(cors());
app.use(koaBody({
    multipart: true, // support file upload
    formidable: {
        uploadDir: path.resolve(__dirname, '../uploads/image'),
        keepExtensions: true,
    }
}));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
