const { UsuarioTC } = require("../model/usuario");
const { UsuarioSchema } = require("../model/usuario");

UsuarioTC.addResolver({
    name: "create",
    kind: "mutation",
    type: UsuarioTC.getResolver("createOne").getType(),
    args: UsuarioTC.getResolver("createOne").getArgs(),
    resolve: async ({ source, args, context, info }) => {
        const usuario = await UsuarioSchema.create(args.record);

        return {
            record: usuario,
            recordId: UsuarioTC.getRecordIdFn()(usuario),
        };
    },
});

const UsuarioQuery={
    usuarioById: UsuarioTC.getResolver("findById"),
    usuarioByIds: UsuarioTC.getResolver("findByIds"),
    usuarioOne: UsuarioTC.getResolver("findOne"),
    usuarioMany: UsuarioTC.getResolver("findMany"),
    usuarioCount: UsuarioTC.getResolver("count"),
    usuarioConnection: UsuarioTC.getResolver("connection"),
    usuarioPagination: UsuarioTC.getResolver("pagination"),
};

const UsuarioMutation={
    usuarioWithFile: UsuarioTC.getResolver("create"),
    usuarioCreateOne: UsuarioTC. getResolver("createOne"),
    usuarioCreateMany: UsuarioTC.getResolver("createMany"),
    usuarioUpdateById: UsuarioTC.getResolver("updateById"),
    usuarioUpdateMany: UsuarioTC.getResolver("updateMany"),
    usuarioUpdateOne: UsuarioTC.getResolver("updateOne"),
    usuarioRemoveById: UsuarioTC.getResolver("removeById"),
    usuarioRemoveMany: UsuarioTC.getResolver("removeMany"),
    usuarioRemoveOne: UsuarioTC.getResolver("removeOne"),
}


module.exports = { UsuarioQuery: UsuarioQuery, UsuarioMutation: UsuarioMutation };
