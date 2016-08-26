function getDependencies(tree, resultDependencies) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    resultDependencies = resultDependencies || [];
    var dependencies = tree && tree.dependencies || [];
    Object.keys(dependencies).forEach(function (objKey) {
        var pkgName = objKey + '@' + dependencies[objKey].version;
        if(resultDependencies.indexOf(pkgName) === -1) {
            resultDependencies.push(pkgName);
        }
        getDependencies(tree.dependencies[objKey], resultDependencies);
    });

  resultDependencies.sort();
  return resultDependencies;
}

module.exports = getDependencies;

//Oficial


function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies