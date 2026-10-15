# Day 3: Create a Learning Repository

A repository is a project folder tracked by Git. It keeps learning notes, practice code, scripts, diagrams and project history together.

## Structure

    devops-learning/
    ├── README.md
    ├── .gitignore
    ├── notes/
    │   ├── week-01/
    │   └── weekly-reviews/
    ├── app/
    │   └── learning-api/
    ├── scripts/
    └── diagrams/

## Folder purposes

- README.md explains the project.
- notes/ stores daily and weekly learning notes.
- app/learning-api/ stores the practice Node.js application.
- scripts/ stores reusable automation commands.
- diagrams/ stores architecture and workflow diagrams.
- .gitignore prevents secrets, dependencies and logs from being committed.

## Useful Git commands

    git init
    git add .
    git commit -m "Create DevOps learning repository"
    git branch -M main
    git push

git add . prepares files in the current folder and its subfolders. Git tracks files, so empty folders need a placeholder such as .gitkeep if they must appear in the repository.

## Day 3 goal

Create a clean, searchable home for the six-month learning project and save its first version in Git.
