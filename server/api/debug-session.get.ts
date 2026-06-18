/**
 * @file server/api/debug-session.get.ts
 * @description TEMPORARY diagnostic — reports whether the runtime can see the
 *   session secret, without ever exposing the value. Delete after debugging.
 * @author Jenning Schaefer
 * @license MIT
 */
export default defineEventHandler(() => {
  const fromEnv = process.env.NUXT_SESSION_PASSWORD || ''
  const fromConfig = (useRuntimeConfig().session?.password as string | undefined) || ''
  return {
    env: { present: fromEnv.length > 0, length: fromEnv.length },
    runtimeConfig: { present: fromConfig.length > 0, length: fromConfig.length },
  }
})
