export function updateSelectedCollection(setSelectedCollection, router, id) {
  setSelectedCollection(id);
  router.push(`?id=${id}`, undefined, { shallow: true });
}
