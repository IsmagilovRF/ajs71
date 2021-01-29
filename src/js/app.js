// TODO: write your code here
function getDescription(obj) {
  const special = [];
  for (const element of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    const result = {
      id, name, icon, description,
    };
    special.push(result);
  }
  return special;
}

export default getDescription;
