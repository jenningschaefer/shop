import { d as defineEventHandler, r as readBody, c as createError, s as setUserSession } from '../../../nitro/nitro.mjs';
import { readRegisteredUser, toSessionUser } from './_registered.mjs';
import { U as UserRepository } from '../../../_/user.repository.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';

const login_post = defineEventHandler(async (event) => {
  var _a;
  const { mail, password } = await readBody(event);
  if (!mail || !password) {
    throw createError({ statusCode: 400, statusMessage: "Missing credentials" });
  }
  const email = mail.toLowerCase();
  const users = UserRepository.getInstance().getData();
  const matches = users.filter((u) => u.mail.toLowerCase() === email);
  let user = (_a = matches.find((u) => u.role !== "admin")) != null ? _a : matches[0];
  if (!user) {
    const registered = readRegisteredUser(event);
    if (registered && registered.mail.toLowerCase() === email) user = registered;
  }
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "invalidLogin" });
  }
  await setUserSession(event, { user: toSessionUser(user) });
  return { ok: true };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
