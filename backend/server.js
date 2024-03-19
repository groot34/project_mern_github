import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import path from 'path'

import './passport/github.auth.js'
 
import userRoutes from "./routes/user.routes.js"
import exploreRoutes from "./routes/explore.routes.js"
import authRouter from "./routes/auth.route.js"

import connectMongoDB from './db/connectmongoDB.js'

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/auth", authRouter);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes); 

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

app.listen(PORT, ()=>{
    console.log(`Server Started on http://localhost:${PORT}`);
    connectMongoDB();
})                                                                                                                                          