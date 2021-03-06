// A helper script for testing utils
// So that we could just run "npm run test-util findCommentsInRaws"

const exec = require("child_process").exec
const env = process.env
env.FORCE_COLOR = 1

process.argv.slice(2).forEach(function (arg) {
  const cmd = "\"./node_modules/.bin/tape\" -r babel-register \"src/utils/__tests__/" + arg + ".js\" | \"./node_modules/.bin/tap-spec\""
  const child = exec(
    cmd,
    env
  )

  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)
})
