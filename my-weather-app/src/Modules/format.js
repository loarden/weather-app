export function formatDate(str) {
  return str.replace(/-/g, ". ").slice(0,str.length-1)
}