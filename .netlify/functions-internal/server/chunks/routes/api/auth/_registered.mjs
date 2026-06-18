import { g as getCookie, a as setCookie } from '../../../nitro/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';

/**
 * @file server/api/auth/_registered.ts
 * @description Mock "database" for newly registered users: persist the record in a
 *   cookie instead of writing to the JSON data files. Leading underscore keeps this
 *   file out of the API route table.
 * @author Jenning Schaefer
 * @license MIT
 */
const REGISTERED_USER_COOKIE = "shop-registered-user";
function toSessionUser(user) {
  return {
    user_id: user.user_id,
    title: user.title,
    firstname: user.firstname,
    lastname: user.lastname,
    mail: user.mail,
    birthday: user.birthday,
    language: user.language,
    address_id_default: user.address_id_default,
    role: user.role
  };
}
function writeRegisteredUser(event, user) {
  setCookie(event, REGISTERED_USER_COOKIE, JSON.stringify(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30
    // 30 days
  });
}
function readRegisteredUser(event) {
  const raw = getCookie(event, REGISTERED_USER_COOKIE);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export { REGISTERED_USER_COOKIE, readRegisteredUser, toSessionUser, writeRegisteredUser };
//# sourceMappingURL=_registered.mjs.map
