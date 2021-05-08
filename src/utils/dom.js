export function removeNode(el) {
  const parent = el.parentNode;

  if (parent) {
    parent.removeNode(el);
  }
}
