---
title: Testing
description: Description of the testing process in StudyLink.
---

#### Overview
This document outlines the testing process for the project. All new code is pushed to the
testing branch before being merged into main.

#### Branching Strategy
All development is done in feature branches. 
Changes are pushed to the testing branch for automated testing.
Once tests pass, a pull request (PR) is opened into main.
The PR requires approval from at least two team members before merging.

#### Testing Workflow
Unit tests are written using JUnit and Mockito.
Mock data is defined specifically for each unit test.
Tests are run automatically when code is pushed to the testing branch.
If tests fail, the code is refactored and pushed again.

#### Code Coverage
Code coverage is generated using JaCoCo.
Coverage reports are uploaded to Codecov through the CI workflow.
A coverage badge is displayed to track the status of tests.

#### Deployment
Once PR is approved and merged into main, the code is deployed to Azure.

#### Additional Notes
Ensure all new features include unit tests.
Review code coverage for critical modules before deployment.