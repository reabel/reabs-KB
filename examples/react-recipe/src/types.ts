export type ingredient = {
    name: string,
    type?: string,
    amount?: number,
    amountUnit?: string,
};

export type recipe = {
    name: string,
    ingredients: ingredient[]
};