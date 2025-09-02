---
title: Bug Report
description: An elaboration of bugs encountered.
---
Below are some of the bugs we encountered during the development process.
### Build Failure during gradlew build due to UnknownEntityException in Upcoming Sessions Query

Severity:
High

Priority: Highest

Expected Result: The gradlew build command should complete successfully, with all tests passing. The application should be able to start and correctly retrieve upcoming sessions for a user without throwing an UnknownEntityException when the @Query is executed.

Actual Result: The gradlew build command fails on the :test task. The stack trace shows a BeanCreationException caused by a QueryCreationException, with the root cause being org.hibernate.query.sqm.UnknownEntityException. This indicates a fundamental issue with how the @Query in SessionRepo is mapped to the Session entity, specifically with the creator field. The test BackendApplicationTests > contextLoads() is failing.

How it Happened:
The error occurred after the implementation of the findUpcomingSessions query in the SessionRepo interface. It appears the JPA query SELECT s FROM Session s WHERE s.creator = :userId is attempting to use the creator object, which is a User entity, as a simple field to compare against the :userId string. This mismatch between the JPA entity relationship and the query logic is causing the Hibernate ORM to fail to resolve the query correctly during the build process, specifically when the application context is being loaded for testing. The JPA repository is unable to create the query bean because of this incorrect entity reference in the @Query annotation.

Steps to Reproduce:

Navigate to the sdp-backend directory.

Run the command ./gradlew build or gradlew build (on Windows).

Observe the build failure with the specified stack trace.

### Navigation Bar Fails to Visually Indicate Active Page

Severity: Medium

Priority: Medium

Expected Result: The navigation bar should visually highlight or change the style (e.g., color, background, font weight) of the link corresponding to the current page the user is viewing. This provides clear feedback to the user on their location within the application. For example, if the user is on the "Dashboard" page, the "Dashboard" link in the navigation bar should appear different from the other links.

Actual Result: The navigation bar links have a static appearance. When the user navigates to different pages, there is no visual change to the navigation bar. All links look identical regardless of the current page. This can lead to a confusing user experience as they cannot quickly determine which page they are currently on.

How it Happened:
This is a front-end bug related to the styling of the navigation component. The navigation bar's component (likely a React component, or a simple HTML/CSS structure) does not have the logic implemented to check the current URL path or a state variable that indicates the active page. As a result, it cannot apply a specific CSS class (e.g., .active) to the corresponding navigation link. The styling is static and does not dynamically update based on the application's routing state.

Steps to Reproduce:

Open the application in a web browser.

Observe the navigation bar.

Click on any navigation link to go to a new page (e.g., from Home to Dashboard).

Notice that the navigation bar's appearance does not change, and the link for the newly active page is not highlighted.
