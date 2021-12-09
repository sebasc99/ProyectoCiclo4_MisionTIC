const { SchemaComposer } = require('graphql-compose');


const schemaComposer = new SchemaComposer();

const { UsuarioQuery, UsuarioMutation} = require('./usuario');

schemaComposer.Query.addFields({
    ...UsuarioQuery,
});

schemaComposer.Mutation.addFields({
    ...UsuarioMutation,
});

module.exports = schemaComposer.buildSchema();