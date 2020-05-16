db.createUser({
    user: "server",
    pwd: "password",
    roles: [
        {role: "dbOwner", db: "server"},
    ]
});
