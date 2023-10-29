export default function upperCaseFirst(name: string) {
  if (!name) return name;

  return name[0].toUpperCase() + name.slice(1);
}
