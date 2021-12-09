const { proyectosTC } = require("../model/proyectos");
const { proyectosSchema } = require("../model/proyectos");

proyectosTC.addResolver({
    name: "create",
    kind: "mutation",
    type: proyectosTC.getResolver("createOne").getType(),
    args: proyectosTC.getResolver("createOne").getArgs(),
    resolve: async ({ source, args, context, info }) => {
        const proyectos = await proyectosSchema.create(args.record);

        return {
            record: proyectos,
            recordId: proyectosTC.getRecordIdFn()(proyectos),
        };
    },
});

const proyectosQuery = {
    proyectosById: proyectosTC.getResolver("findById"),
    proyectosByIds: proyectosTC.getResolver("findByIds"),
    proyectosOne: proyectosTC.getResolver("findOne"),
    proyectosMany: proyectosTC.getResolver("findMany"),
    proyectosCount: proyectosTC.getResolver("count"),
    proyectosConnection: proyectosTC.getResolver("connection"),
    proyectosPagination: proyectosTC.getResolver("pagination"),
};

const proyectosMutation = {
    proyectosWithFile: proyectosTC.getResolver("create"),
    proyectosCreateOne: proyectosTC.getResolver("createOne"),
    proyectosCreateMany: proyectosTC.getResolver("createMany"),
    proyectosUpdateById: proyectosTC.getResolver("updateById"),
    proyectosUpdateOne: proyectosTC.getResolver("updateOne"),
    proyectosUpdateMany: proyectosTC.getResolver("updateMany"),
    proyectosRemoveById: proyectosTC.getResolver("removeById"),
    proyectosRemoveOne: proyectosTC.getResolver("removeOne"),
    proyectosRemoveMany: proyectosTC.getResolver("removeMany"),
};

module.exports = { proyectosQuery: proyectosQuery, proyectosMutation: proyectosMutation };
