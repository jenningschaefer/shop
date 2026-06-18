import { d as defineEventHandler, r as readBody, c as createError, s as setUserSession } from '../../../nitro/nitro.mjs';
import { writeRegisteredUser, toSessionUser } from './_registered.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';

const register_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event);
  if (!body.mail || !body.password || !body.firstname || !body.lastname) {
    throw createError({ statusCode: 400, statusMessage: "Missing registration fields" });
  }
  const user = {
    id: Date.now(),
    user_id: Date.now(),
    role: "user",
    title: (_a = body.title) != null ? _a : "None",
    firstname: body.firstname,
    lastname: body.lastname,
    mail: body.mail,
    birthday: (_b = body.birthday) != null ? _b : "",
    language: (_c = body.language) != null ? _c : "DE",
    address_id_default: 0
  };
  writeRegisteredUser(event, user);
  await setUserSession(event, { user: toSessionUser(user) });
  return { ok: true };
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
