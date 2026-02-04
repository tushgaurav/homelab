db = db.getSiblingDB("admin");

db.system.users.deleteOne({ user: "unifi" });

db.createUser({
  user: "unifi",
  pwd:  "viQN069G7nf17ZITbbeM",
  roles: [
    { role: "dbOwner", db: "unifi" },
    { role: "dbOwner", db: "unifi_stat" },
    { role: "dbOwner", db: "unifi_audit" },
    { role: "dbOwner", db: "unifi_alarm" }
  ]
});
