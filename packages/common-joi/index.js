module.exports = ({
    joi
}) => {
    const stringNull = joi.string().allow(null);
    const stringNullEmpty = joi.string().allow(null, '');
    const stringRequired = joi.string().required().min(1);
    const numberRequired = joi.number().required();
    const numberNull = joi.number().allow(null);
    const dateNull = joi.date().allow(null);
    const bool = joi.boolean().falsy(0, '0').truthy(1, '1');
    const boolRequired = bool.required();
    const integer = joi.number().integer();
    const integerRequired = integer.required();
    const pagination = joi.object().keys({
        pageNumber: integer,
        recordsTotal: integer,
        pageSize: integer,
        pagesTotal: integer
    });

    return {
        bigintNotNull: joi.alternatives().try(
            joi.number().integer().required(),
            joi.string().regex(/^[0-9]{1,19}$/, 'numeric').required()
        ),
        bigintNull: joi.alternatives().try(
            joi.number().integer().allow(null),
            joi.string().regex(/^[0-9]{1,19}$/, 'numeric').allow(null)
        ),
        stringNull,
        stringRequired,
        numberRequired,
        numberNull,
        dateNull,
        stringNullEmpty,
        bool,
        boolRequired,
        integer,
        integerRequired,
        pagination
    };
};
