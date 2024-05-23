import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import routes from './routes';

const app = new Koa();
const router = new Router();

app.use(json());
app.use(bodyParser());

router.use('/api', routes.routes());

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
