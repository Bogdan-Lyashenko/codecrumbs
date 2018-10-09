export const convertRelativeToAbsolutePath = (base, relative) => {
  const stack = base.split('/'),
    parts = relative.split('/');

  stack.pop();

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '.') continue;
    if (parts[i] === '..') stack.pop();
    else stack.push(parts[i]);
  }

  return stack.join('/');
};
