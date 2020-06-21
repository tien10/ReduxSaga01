const validate = (values) => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = 'Vui lòng nhập Username!';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'Username phải từ 5 ký tự!';
  }
  return errors;
};
export default validate;
