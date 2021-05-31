export const API = 4;

const message = () => "Hello";

export default  message;

// Méthode asynchrone
const TIMER = 100;

const fibo_asynchrone = (u, v) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            [u, v] = [v, u + v];
            resolve([u, v]); // ici une fois que l'on a resolve la promesse s'arrête
        }, TIMER);
    }
);

export const fibo_async_await = async (n) => {
    let [u, v] = [1, 1];

    for (const _ of Array(n).keys()) {
        // on lance une promesse asynchrone await permet d'attendre le resolve de la promesse
        // avant de passer à la suite du programme
        [u, v] = await fibo_asynchrone(u, v)
    }

    return v;
}