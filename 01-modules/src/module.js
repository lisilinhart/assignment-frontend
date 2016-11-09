
const regex = /^[a-zA-Z._%+-]+\.([a-zA-Z]{3})-(b|m)(\d{4})@(fh-salzburg.ac.at)$/;

export function valid(email) {
  return regex.test(email);
}

export function degreeProgram(email) {
  const parts = regex.exec(email);
  if (parts) {
    return parts[1].toUpperCase();
  }
  return false;
}

export function level(email) {
  const parts = regex.exec(email);
  if (parts) {
    const theLevel = parts[2] === 'm' ? 'MA' : 'BA';
    return theLevel;
  }
  return false;
}

export function graduationYear(email) {
  const parts = regex.exec(email);
  if (parts) {
    const level = parts[2];
    let year = parseInt(parts[3], 10);
    year += level === 'b' ? 3 : 2;
    return year;
  }
  return false;
}
