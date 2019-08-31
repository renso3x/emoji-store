export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatPrice(nStr) {
  nStr += '';
  const x = nStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const rgx = /(\d+)(\d{2})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1.$2');
  }
  return x1 + x2;
}

export function formateDate(d) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(d);
  var today = new Date();

  var diffDays = Math.round(
    Math.abs((firstDate.getTime() - today.getTime()) / oneDay)
  );

  if (diffDays > 7) {
    return displayFullDate(firstDate);
  }
  return displayInRelativeDate(diffDays);
}

function displayFullDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function displayInRelativeDate(date) {
  let day = date === 1 ? 'day' : 'days';
  return `${date} ${day} ago`;
}
