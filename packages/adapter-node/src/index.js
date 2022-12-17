import { handler } from 'HANDLER';
import { env } from 'ENV';
import polka from 'polka';

export const port = env('PORT', '80');

const server = polka().use(handler);

server.listen({ port }, () => {
	console.log(`Listening, port: ${port}`);
});

export { server };
