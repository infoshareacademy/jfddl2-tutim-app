export const getNextId = ingredients => ingredients.map(
    ingredients  => ingredients.id
).reduce(
    (currentMax, nextNumber) =>
        currentMax > nextNumber ? currentMax : nextNumber,
    1
)