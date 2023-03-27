import mongoose from "npm:mongoose@^6.7";
import "https://deno.land/std@0.181.0/dotenv/load.ts";
import { Application, Router, Context } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { getDinossaurs, createDinossaur } from "./repository/dinossaurRepository.ts";

const PORT = Deno.env.get("PORT") || 3000;
const MONGO_DB_URL = Deno.env.get("MONGO_DB_URL") || "mongodb://localhost:27017"

try {
    mongoose.connect(MONGO_DB_URL);
    console.log("connected to database")
} catch (e) {
    console.log("error to connectro to mongodb", e)
}

const router = new Router();
router
  .get("/", (context: Context) => {
    context.response.body = "WELCOME TO DINOSSAURS WORLD\nMake a get on /dinossaurs to see all dinos";
  })
  .get("/dinossaurs", async (context: Context) => {
    context.response.body = await getDinossaurs()
    context.response.status = 200
  })
  .post("/dinossaurs", async (context: Context) => { 
    const { dinossaurs } = await context.request.body().value
    const response = await createDinossaur(dinossaurs)
    context.response.body = response
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: Number(PORT) });

console.log(`server running`, Number(PORT))
