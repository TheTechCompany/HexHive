CREATE (org:HiveOrganisation {id: "BvU0TJhV1v23u1DR9d-S0"})
CREATE (user:HiveUser {id: "0v9EW7tP8Ys35JY4sypqw", name: "Developer Account", password: "88fa0d759f845b47c044c2cd44e29082cf6fea665c30c146374ec7c8f3d699e3"}) //developer
CREATE (org)-[:TRUSTS]->(user)