function loadUsers(userIds, load, done) {
    var users = [];
    var usersLoaded = 0;
    usersIds.forEach(function(userId) {
        load(userId, function (result) {
            usersLoaded++;
            if(result) {
                users.push(result);
            }
            if(usersLoaded === usersIds.length-1) {
                done(users);
            }
        });
    }, this);
}

module.exports = loadUsers;

//Official

function loadUsers(userIds, load, done) {
    var completed = 0
    var users = []
    userIds.forEach(function (id, index) {
        load(id, function (user) {
            users[index] = user
            if (++completed === userIds.length) return done(users)
        })
    })
}

module.exports = loadUsers;