# Day 1: DevOps Feedback Loop

This flow shows how a DevOps team turns a code change into learning and the next improvement.

\`\`\`mermaid
flowchart LR
    A["Change code"] --> B["Run tests"]
    B --> C["Deploy"]
    C --> D["Monitor"]
    D --> E["Learn from feedback"]
    E --> A
\`\`\`

## What each step means

1. Change code: add a feature, fix a bug, or improve configuration.
2. Run tests: check that the application still behaves correctly.
3. Deploy: release the approved version to an environment.
4. Monitor: observe health, speed, logs, errors, and availability.
5. Learn from feedback: use results and user reports to decide the next improvement.

The loop is continuous. DevOps teams use feedback to improve the application and the delivery process.
