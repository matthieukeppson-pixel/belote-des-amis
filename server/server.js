/** Futur serveur WebSocket pour Belote & Amis
 * Pour l'activer plus tard :
 * 1) npm install ws
 * 2) npm run server
 */
// import { WebSocketServer } from 'ws';
// const wss = new WebSocketServer({ port: 8787 });
// wss.on('connection', (ws) => {
//   ws.on('message', (msg) => {
//     wss.clients.forEach(client => {
//       if (client.readyState === 1) client.send(msg.toString());
//     });
//   });
//   ws.send(JSON.stringify({ type: 'welcome', text: 'Bienvenue sur Belote & Amis' }));
// });
// console.log('Serveur WS prêt sur ws://localhost:8787');
