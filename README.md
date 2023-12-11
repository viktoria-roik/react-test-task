# react-test-task for SpdLoad

Task:
You should create two pages with static and dynamic content:
home
favorites

Design:
design

UI Requirements:

    HOME PAGE:

Logo in header it’s link which always return to home page
Header navigation menu - should have hover effect, home link navigate to home page as logo too, other links don’t have navigating action.
Header aside: “Favorite” button should redirect to favorite page, “Sign in” button has pressible visual effect, but with any redirect.
Banner section: all content is static, “Explore tours” should scroll down by pressing on it.
Main slider section: static carousel title, carousel controls (should which slides one by one), slides content with dynamic data from SpaceX API (see API docs below). Each slider has a “Buy” button with no action on press and “Add to favorite” button, which will add this trip to your personal favorites list.

    FAVORITES PAGE:

Header and banner sections are static, “Favorite” button should be active
“Clean all” - should remove all flights from favorite
List of favorite flights - “Buy” button doesn't do anything, “Delete” button removes exact flight.

Technical Requirements:

TypeScript
Atomic design Pattern
React Apollo (to get data from API)
Recoil for state management (favorite flights, this state manages only on FE)
Styled Component

API Docs:
API link and sandbox - link to api

Query example (you can test it in API sandbox):
query ExampleQuery {
rockets {
id
description
name
}
}

id - as unique identity
name - card title
description - card subtitle
For images use from design. in turn for the first three calls, then for the next For 1, 4, 7... , there will be 1st picture from the design and so on
