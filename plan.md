# Deployment Migration Plan: CircleCI to GitHub Actions

This document outlines the plan to migrate the deployment process from CircleCI to GitHub Actions and deploy the project to GitHub Pages.

## 1. Remove CircleCI Configuration

*   Remove the `.circleci` directory.

## 2. Create GitHub Actions Workflow

*   Create a new GitHub Actions workflow file (`.github/workflows/deploy.yml`) with the following steps:
    *   Checkout the code.
    *   Set up Node.js.
    *   Install dependencies using `npm install`.
    *   Build the project using `npm run build`.
    *   Deploy to GitHub Pages using the `gh-pages` action.

## 3. Configure GitHub Pages Deployment

*   Add a `deploy` script to `package.json`: `"deploy": "gh-pages -d build"`
*   Configure the GitHub Actions workflow to use the `gh-pages` action.

## 4. Test the Deployment

*   Commit the changes and push them to the repository to trigger the workflow.
*   Verify that the project is successfully deployed to GitHub Pages.

## 5. Document Web-Based Steps (If Necessary)

*   If any steps require web-based interaction (e.g., enabling GitHub Pages), provide clear, step-by-step instructions in Japanese.