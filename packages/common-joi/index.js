// @ts-check

/**
 * @param {{joi: import("joi").Root}} api
 */
module.exports = ({
    joi
}) => {
    const stringNull = joi.string().allow(null);
    const stringNullEmpty = joi.string().allow(null, '');
    const stringRequired = joi.string().required().min(1);
    const numberRequired = joi.number().required();
    const numberNull = joi.number().allow(null);
    const dateNull = joi.date().allow(null);
    const dateRequired = joi.date().required();
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
    const stringNoSpace = joi.string().pattern(/^\S+$/);
    const stringTrimmed = joi.string().pattern(/^\S(.*\S)?$/);

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
        dateRequired,
        stringNullEmpty,
        bool,
        boolNull: bool.allow(null),
        boolRequired: bool.required(),
        integer,
        integerNull: integer.allow(null),
        integerRequired: integer.required(),
        pagination,
        paging: pagination,
        orderBy: joi.array().items(joi.object().keys({
            field: joi.string().min(1).max(128),
            dir: joi.string().valid('ASC', 'DESC')
        })).optional(),
        dropdownItems: joi.array().items(joi.object({
            label: stringRequired,
            alias: stringNullEmpty,
            description: stringNullEmpty,
            value: joi.alternatives(integer, joi.string()).required(),
            parent: joi.alternatives(integer, joi.string()).allow(null)
        })),
        stringNoSpace,
        stringNoSpaceRequired: stringNoSpace.required(),
        stringNoSpaceNull: stringNoSpace.allow(null),
        stringTrimmed,
        stringTrimmedRequired: stringTrimmed.required(),
        stringTrimmedNull: stringTrimmed.allow(null)
    };
};
