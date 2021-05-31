import message, { API, fibo_async_await } from './lib/utils';

import './style.scss';

console.log(API)

console.log(message());
fibo_async_await().then(res => console.log(res));