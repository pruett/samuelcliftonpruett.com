# Parallel Worktrees

Initialize three parallel git worktree directories for concurrent development.

## Variables

FEATURE_NAME: $ARGUMENTS

## Execute these tasks

CREATE new directory `worktrees/`

> Execute these steps in parallel for concurrency
>
> Use absolute paths for all commands

CREATE first worktree:
- RUN `git worktree add -b FEATURE_NAME-1 ./worktrees/FEATURE_NAME-1`
- RUN `cd ./worktrees/FEATURE_NAME-1` then `pnpm install` then `pnpm dev`

CREATE second worktree:
- RUN `git worktree add -b FEATURE_NAME-2 ./worktrees/FEATURE_NAME-1`
- RUN `cd ./worktrees/FEATURE_NAME-2` then `pnpm install` then `pnpm dev`

CREATE third worktree:
- RUN `git worktree add -b FEATURE_NAME-3 ./worktrees/FEATURE_NAME-1`
- RUN `cd ./worktrees/FEATURE_NAME-3` then `pnpm install` then `pnpm dev`

VERIFY setup by running `git worktree list`
