import { QueryClient } from 'react-query';

const client = new QueryClient({});

// client.setQueryDefaults(QUERY_CHAT_TRANSLATE_INPUT, {
//   select: (res) => res.data,
//   enabled: false,
// });

console.log(client, 'client');

export default client;
