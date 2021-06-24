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
    const bigint = joi.alternatives(integer, joi.string().regex(/^[0-9]{1,19}$/, 'numeric'));
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
        bigintRequired: bigint.required(),
        bigintNull: bigint.allow(null),
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
