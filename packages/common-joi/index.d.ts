declare function _exports({ joi }: {
    joi: import("joi").Root;
}): {
    currencyAmount: import("joi").ObjectSchema<any>;
    transferAmount: import("joi").ObjectSchema<any>;
    bigintNotNull: import("joi").AlternativesSchema;
    bigintRequired: import("joi").AlternativesSchema;
    bigintNull: import("joi").AlternativesSchema;
    stringNull: import("joi").StringSchema;
    stringRequired: import("joi").StringSchema;
    numberRequired: import("joi").NumberSchema;
    numberNull: import("joi").NumberSchema;
    dateNull: import("joi").DateSchema;
    stringNullEmpty: import("joi").StringSchema;
    bool: import("joi").BooleanSchema;
    boolNull: import("joi").BooleanSchema;
    boolRequired: import("joi").BooleanSchema;
    integer: import("joi").NumberSchema;
    integerNull: import("joi").NumberSchema;
    integerRequired: import("joi").NumberSchema;
    pagination: import("joi").ObjectSchema<any>;
    orderBy: import("joi").ArraySchema;
    dropdownItems: import("joi").ArraySchema;
};
export = _exports;
