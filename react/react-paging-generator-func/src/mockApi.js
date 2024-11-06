const persons = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Person ${index + 1}`,
  age: Math.floor(Math.random() * 50) + 20,
}));

const getPersons = (cursor, pageSize) => {
  const nextPersons = persons.slice(cursor, cursor + pageSize);
  const newCursor =
    cursor + nextPersons.length < persons.length
      ? cursor + nextPersons.length
      : null;

  return { data: nextPersons, next_cursor: newCursor };
};

const mockApi = (cursor = 0, pageSize = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getPersons(cursor, pageSize));
    }, 1000); // Simulate a delay of 1 second
  });
};

export const createPersonGenerator = async function* () {
  let cursor = 0;
  const pageSize = 10;

  while (true) {
    const response = await mockApi(cursor, pageSize);
    cursor = response.next_cursor;
    yield response.data;

    if (cursor === null) {
      break; // Stop the generator if there's no more data
    }
  }
};
