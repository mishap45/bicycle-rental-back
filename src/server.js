const koa = require('koa');
const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');
const schema = require('./graphql/schema');
const mongoose = require('mongoose');
const root = require('./graphql/root');

mongoose.connect(`mongodb://localhost/bicycle_login`, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected.'));

const app = new koa();
app.listen(9000);

app.on('error', err => {
    console.log('Server error', err);
});

app.use(
    mount(
        '/graphql',
        graphqlHTTP({
            schema,
            rootValue: root,
            graphiql: true
        })
    )
);