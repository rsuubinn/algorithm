const isSubsetOf = function (base, sample, set = new Set()) {
    base.forEach(value => set.add(value));
    return sample.every(value => set.has(value));
  };
  