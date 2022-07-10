# i4gxzuri_node_05_rest_api: Booking Flight API

Read the Documentation:

1. Add Todo (CREATE)

POST: "/"

Format:

{

title: String,

description : String

}

2. Update/Edit Todo (UPDATE)

PATCH: "/:id"

Format:

{

title: String,

description : String

}

3. Delete Todo (DELETE)

DELETE: "/:id"

4. Get all Todos (INDEX)

GET: "/"

5. Get a single Todo (SHOW)

GET: "/:id"

Anything else results to a bad request (400)
