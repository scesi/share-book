import { app } from './configureExpress/configure';

async function main() {
    let message = "Begin with configure babel in node.js :)";
    console.info(message);
    let port = app.get('port');
    await app.listen(port);
    console.log('http://localhost:' + port);
}

main();