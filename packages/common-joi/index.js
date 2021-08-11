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
    const integer = joi.number().integer();
    const bigint = joi.alternatives(integer, joi.string().regex(/^[0-9]{1,19}$/, 'numeric'));
    const bigintRequired = bigint.required();
    const bigintNull = bigint.allow(null);
    const pagination = joi.object().keys({
        pageNumber: integer,
        recordsTotal: integer,
        pageSize: integer,
        pagesTotal: integer
    });
    const currencyAmount = joi.object({
        amount: joi.string().required(),
        cents: joi.number().integer().required(),
        scale: joi.valid(0, 2, 3, 4).required(),
        currency: joi.string().length(3).required()
    });

    return {
        currencyAmount,
        transferAmount: joi.object({
            acquirerFee: currencyAmount.required(),
            issuerFee: currencyAmount.required(),
            processorFee: currencyAmount.required(),
            transfer: currencyAmount.required()
        }),
        bigintNotNull: bigint,
        bigintRequired,
        bigintNull,
        stringNull,
        stringRequired,
        numberRequired,
        numberNull,
        dateNull,
        stringNullEmpty,
        bool,
        boolNull: bool.allow(null),
        boolRequired: bool.required(),
        integer,
        integerNull: integer.allow(null),
        integerRequired: integer.required(),
        pagination,
        orderBy: joi.array().items(joi.object().keys({
            column: joi.string().min(1).max(128),
            direction: joi.string().valid('ASC', 'DESC')
        })).optional(),
        dropdownItems: joi.array().items(joi.object({
            label: stringRequired,
            value: joi.alternatives(bigintRequired, stringRequired).required(),
            parent: joi.alternatives(bigintNull, stringNull).allow(null)
        }))
    };
};
