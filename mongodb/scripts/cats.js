db.createUser({
    user: "cats",
    pwd: "password",
    roles: [
        {role: "dbOwner", db: "cats"},
    ]
});
