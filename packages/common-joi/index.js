// @ts-check
const xssPattern = /<[^>]+>|\bjavascript:[^:]/i;
/**
 * @param {{joi: import("joi").Root}} api
 */
module.exports = ({
    joi,
    config
}) => {
    const noXss = (schema = joi.string(), {
        pattern = xssPattern,
        invert = true
    } = {}) => schema.pattern(pattern, {invert, name: 'xss'});
    const string = config?.xss ? noXss(joi.string(), config.xss) : joi.string();
    const stringNull = string.allow(null);
    const stringNullEmpty = string.allow(null, '');
    const stringRequired = string.required().min(1);
    const numberRequired = joi.number().required();
    const numberNull = joi.number().allow(null);
    const dateNull = joi.date().allow(null);
    const dateRequired = joi.date().required();
    const bool = joi.boolean().falsy(0, '0').truthy(1, '1').allow(true, false, 0, 1, '0', '1');
    const integer = joi.number().integer();
    const bigint = joi.alternatives(integer, joi.string().regex(/^[0-9]{1,19}$/, 'numeric'));
    const bigintRequired = bigint.required();
    const bigintNull = bigint.allow(null);
    const money = joi.string().max(21).regex(/^[+-]?\d{1,15}(\.\d{0,4})?$/);
    const moneyRequired = money.required();
    const moneyNull = money.allow(null);
    const amount = joi.alternatives(money, joi.number());
    const amountRequired = amount.required();
    const amountNull = amount.allow(null);
    const pagination = joi.object().keys({
        pageNumber: integer,
        recordsTotal: integer,
        pageSize: integer,
        pagesTotal: integer
    });
    const orderBy = joi.object().keys({
        field: string.min(1).max(50),
        dir: joi.string().valid('ASC', 'DESC')
    });
    const currencyAmount = joi.object({
        amount: moneyRequired,
        cents: joi.number().integer().required(),
        scale: joi.valid(0, 2, 3, 4).required(),
        currency: string.length(3).required()
    });
    const stringNoSpace = string.pattern(/^\S+$/);
    const stringTrimmed = string.pattern(/^\S(.*\S)?$/);

    return {
        noXss,
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
        amount,
        amountRequired,
        amountNull,
        money,
        moneyRequired,
        moneyNull,
        string,
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
        orderBy: joi.alternatives(orderBy, joi.array().items(orderBy)),
        dropdownItems: joi.array().items(joi.object({
            label: stringRequired,
            alias: stringNullEmpty,
            description: stringNullEmpty,
            value: joi.alternatives(integer, string).required(),
            parent: joi.alternatives(integer, string).allow(null)
        })),
        file: joi.object({
            filename: string,
            originalFilename: string,
            headers: joi.object()
        }),
        stringNoSpace,
        stringNoSpaceRequired: stringNoSpace.required(),
        stringNoSpaceNull: stringNoSpace.allow(null),
        stringTrimmed,
        stringTrimmedRequired: stringTrimmed.required(),
        stringTrimmedNull: stringTrimmed.allow(null)
    };
};
