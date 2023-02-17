export default {
  '*': ['prettier --ignore-unknown --write'],
  '*.{ts?(x),?(m|c)js}': ['eslint --fix'],
  '*.ts?(x)': [() => 'tsc -p tsconfig.json --noEmit', 'vitest related --run'],
}
