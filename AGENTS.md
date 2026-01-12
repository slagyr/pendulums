# Agent Instructions

This project uses **bd** (beads) for issue tracking. Run `bd onboard` to get started.

## Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

**Prompting**
You own this directory and are allowed to make any changes you like.  Do not ask for permission or confirmation for 
any action unless it has side effects outside this directory.

## Testing

**CRITICAL**: Every feature MUST have tests. Tests are NOT optional.

```bash
clj -M:spec       # for JVM specs
clj -M:test:cljs  # for CLJS specs
```

**Testing Guidelines:**
- Write tests BEFORE implementation
- Use the TDD cycle: Red, Green, Refactor
- Aim for high coverage (>90%) on all code
- Test edge cases and error conditions
- Unit tests for pure functions and utilities
- Integration tests for component interactions
- Keep tests fast and independent

## Clean Code

**CRITICAL**: Write clean code.  DO NOT BE SLOPPY.

**Clean Code Guidelines**
- Avoid duplicate code.  Refactor duplicate code, or very similar code, into reusable components.
- Prefer loose couplings.  Use multimethods and/or protocols to decouple code, making more testable and more reusable.
- Names must reveal intent, The name should tell you everything you need to know.
- Functions should be small. < 20 lines is good, < 10 lines is better, 4–8 is ideal
- Do one thing (Single Level of Abstraction). Function should have only one reason to change.
- Avoid boolean arguments. Boolean params usually mean the function is doing two things. 
- Never copy-paste logic — extract function/constant/class immediately
- Boy Scout Rule. Always leave the code a little cleaner than you found it. Every edit should include at least one small cleanup (name, extract, format)
- Comments should explain intent or why – never what. Good code is self-documenting.
- Error handling is one thing. Try-catch or error-result handling should not be mixed with business logic
- Boundaries should be clean. Isolate third-party libraries/frameworks behind clean adapters/interfaces. Never let framework-specific types leak deep into business/domain code.
- Tests are first-class citizensClean, fast, readable, trustworthy tests are as important as production codeFollow F.I.R.S.T. + one assert per test + descriptive test names


