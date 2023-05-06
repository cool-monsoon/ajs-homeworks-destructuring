export default function destructuring(obj) {
  const result = [];
  let item;
  for (const element of obj.special) {
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
      item = element;
      item.description = 'Описание не доступно';
    } else {
      item = element;
    }
    result.push(item);
  }
  return result;
}
