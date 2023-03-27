# Denossaurs
This repository exist to show to world how simple is create and find dinossaurs with Deno.

## How run?
- Install deno -> see on https://deno.land
- Create a `.env` file in root folder and add `PORT` and `MONGO_DB_URL` envs
- run this command `deno run --allow-read --allow-sys --allow-env --allow-net main.ts`

**ENJOY**

## Pre req
- MongoDB locally or some cloud url

## Postman collection
Open denossaurs.postman_collection in your postman

## Endpoints
- GET =>  /dinossaurs  -> List all dinossaurs
- GET => / -> Informations
- POST => /dinossaurs -> Create one dinossaur
```
{
    "dinossaurs": {
        "name": "Tiranosauro",
        "description": "Come tudo"
    }
}
```

## How collab?
Fork and have fun

## Next steps?
- [ ] Swagger
- [ ] Put and delete endpoints
- [ ] Find by id
- [ ] Host at cloud?