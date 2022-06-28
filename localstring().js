const a = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = a.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);