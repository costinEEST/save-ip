/// <reference path="./global.d.ts" />
"use strict";

const fastifyStatic = require("@fastify/static");
const { join } = require("node:path");
const sqlite3 = require("sqlite3").verbose();

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.register(fastifyStatic, {
    root: join(__dirname, "ui"),
    decorateReply: false,
  });

  app.post("/", async function (request, reply) {
    const IP = request.ip;

    const db = new sqlite3.Database("./db.sqlite");
    db.run(`INSERT INTO users (ip) VALUES (?)`, [IP], (err) => {
      if (err) {
        console.error(err);
        reply.status(500).send("Internal Server Error");
      } else {
        reply.status(200).send(IP);
      }
    });
  });
};
