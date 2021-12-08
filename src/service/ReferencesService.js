class ReferencesService {
  getCounterCopyingReferences(object) {
    return Object.assign(object);
  }

  getCounterWithoutCopyingReferences(object) {
    return Object.create(object);
  }

  getCounterWithoutDeepCopyingReferences(object) {
    return JSON.parse(JSON.stringify(object));
  }
}

module.exports = ReferencesService;
