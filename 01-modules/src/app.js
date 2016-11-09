export function valid(email) {
  // ewieser-linhart.mmt-m2016@fh-salzburg.ac.at
  const REGEX = /^[a-zA-Z0-9._%+-]+@(fh-salzburg.ac.at)$/;
  return REGEX.test(email);
}

export function degreeProgram(email) {
  if (valid(email)) {
    let firstPart = email.split('@')[0];
    let degreeAndYear = firstPart.split('.')[1];
    let degree = degreeAndYear.split('-')[0];
    return degree;
  }
  return 'Not a valid email address';
}

export function level(email) {
  if (valid(email)) {
    let firstPart = email.split('@')[0];
    let degreeAndYear = firstPart.split('.')[1];
    let levelShort = degreeAndYear.split('-')[1].charAt(0);
    let levelLong = levelShort === 'm' ? 'master' : 'bachelor';
    return levelLong;
  }
  return 'Not a valid email address';
}

export function graduationYear(email) {
  if (valid(email)) {
    let graduation = 0;
    let firstPart = email.split('@')[0];
    let degreeAndYear = firstPart.split('.')[1];
    let levelShort = degreeAndYear.split('-')[1].charAt(0);
    let year = degreeAndYear.split('-')[1].slice(-4);
    
    if (levelShort === 'b') graduation = parseInt(year, 10) + 3;
    else if (levelShort === 'm') graduation = parseInt(year, 10) + 2;
    return graduation;
  }
  return 'Not a valid email address';
}
