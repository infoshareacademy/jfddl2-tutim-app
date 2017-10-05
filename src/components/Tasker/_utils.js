export const getNextId = tasks => tasks.map(
  task => task.id
).reduce(
  (currentMax, nextNumber) =>
    currentMax > nextNumber ? currentMax : nextNumber,
  1
)