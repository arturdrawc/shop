export default function formatAsMoney(value: number) {
  return `$ ${(value / 100).toFixed(2)}`;
}