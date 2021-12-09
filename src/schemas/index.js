const { SchemaComposer } = require('graphql-compose');


const schemaComposer = new SchemaComposer();

const { UsuarioQuery, UsuarioMutation} = require('./usuario');
const { proyectosQuery, proyectosMutation} = require('./proyectos');

schemaComposer.Query.addFields({
    ...UsuarioQuery,
    ...proyectosQuery,
});

schemaComposer.Mutation.addFields({
    ...UsuarioMutation,
    ...proyectosMutation,
});

module.exports = schemaComposer.buildSchema();