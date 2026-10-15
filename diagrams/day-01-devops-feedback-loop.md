# Day 1: DevOps Feedback Loop

This diagram shows how a DevOps team moves from an idea to a reliable release, then uses feedback to improve the next change.

\`\`\`mermaid
flowchart LR
    A([New change]) --> B[Build and review]
    B --> C{Automated tests pass?}

    C -- No --> D[Fix the code]
    D --> B

    C -- Yes --> E[Deploy safely]
    E --> F[Monitor the application]
    F --> G{Healthy release?}

    G -- No --> H[Inspect logs and alerts]
    H --> D

    G -- Yes --> I[Collect feedback]
    I --> J[Choose the next improvement]
    J --> A

    subgraph DELIVERY["Delivery"]
        B
        C
        D
        E
    end

    subgraph OPERATIONS["Operations"]
        F
        G
        H
    end

    subgraph LEARNING["Learning"]
        I
        J
    end

    style A fill:#e8f1ff,stroke:#2563eb,stroke-width:2px,color:#111827
    style B fill:#eef2ff,stroke:#4f46e5,stroke-width:2px,color:#111827
    style C fill:#fff7ed,stroke:#ea580c,stroke-width:2px,color:#111827
    style D fill:#fef2f2,stroke:#dc2626,stroke-width:2px,color:#111827
    style E fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#111827
    style F fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#111827
    style G fill:#fff7ed,stroke:#ea580c,stroke-width:2px,color:#111827
    style H fill:#fef2f2,stroke:#dc2626,stroke-width:2px,color:#111827
    style I fill:#f5f3ff,stroke:#7c3aed,stroke-width:2px,color:#111827
    style J fill:#f5f3ff,stroke:#7c3aed,stroke-width:2px,color:#111827
    style DELIVERY fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
    style OPERATIONS fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
    style LEARNING fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
\`\`\`

## How to read the diagram

- New change: a feature, bug fix, configuration change or improvement.
- Build and review: write the change, review it and prepare it for testing.
- Automated tests: verify that the application behaves as expected.
- Deploy safely: release the approved version to an environment.
- Monitor the application: check health, performance, logs and alerts.
- Collect feedback: learn from users, monitoring data and deployment results.
- Choose the next improvement: use what you learned to begin the next cycle.

The red paths show recovery when something fails. The purple path shows how feedback creates continuous improvement.
