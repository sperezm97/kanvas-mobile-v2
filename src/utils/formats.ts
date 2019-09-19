export const formatRequest = (data: object) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v, k) => acc.append(`${key}[${k}]`, value));
    } else if (value && value.constructor.name === 'Object') {
      Object.entries(value).forEach((v, k) =>
        acc.append(`${key}[${k}]`, value),
      );
    } else {
      acc.append(key, value);
    }

    return acc;
  }, new URLSearchParams());
};
