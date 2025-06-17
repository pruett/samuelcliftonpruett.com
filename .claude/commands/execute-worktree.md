# Parallel Task Version Execution

## Variables
PLAN_TO_EXECUTE: $ARGUMENTS

## Undertand assignment
READ: PLAN_TO_EXECUTE

## Instructions

We're going to create a new subagent that use the Task tool to execute a version of the plan detailed in PLAN_TO_EXECUTE.

The agent will run in worktrees/<predefined_feature_name>/

The code in worktrees/<predefined_feature_name>/ will be identical to the code in the current branch. It will be setup and ready for you to build the feature end to end.

The agent will implement the engineering plan detailed in PLAN_TO_EXECUTE in their respective workspace.

When the subagent completes it's work, have the subagent to report their final changes made in a comprehensive `RESULTS.md` file at the root of their respective workspace.

Make sure agents don't run start.sh or any other script that would start the server or client - focus on the code changes only.
