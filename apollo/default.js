import { getTokenDesc } from 'graphql/language/lexer';
// Replace this with your project's endpoint
const GRAPHQLAPI = 'http://<LARAVEL_GRAPHQL_SERVER>/graphql'

export default () => ({
    httpEndpoint: GRAPHQLAPI,
})