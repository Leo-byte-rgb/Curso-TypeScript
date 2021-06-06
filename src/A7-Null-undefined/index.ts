function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  if (lastName === undefined) return { firstName: firstName, lastName: '' };
  return { firstName: firstName, lastName: lastName };
}
console.log(createPerson('Leonardo'));
