# react-test-task for SpdLoad

[DEMO link](https://viktoria-roik.github.io/react-test-task/)

Task:
Create two pages with static and dynamic content:

1. Home
2. Favorites

Design:
[design](https://www.figma.com/file/ixNP25m54o6IUPKuOHU2vp/Design-for-React-test-task?node-id=1%3A8&t=Y6j3k3H2X3IhQ9zl-1)

**UI Requirements:**

    HOME PAGE:

- Logo in header it’s link which always return to home page
- Header navigation menu - should have hover effect, home link navigate to home page as logo too, other links don’t have navigating action.
- Header aside: “Favorite” button should redirect to favorite page, “Sign in” button has pressible visual effect, but with any redirect.
- Banner section: all content is static, “Explore tours” should scroll down by pressing on it.
- Main slider section: static carousel title, carousel controls (should which slides one by one), slides content with dynamic data from SpaceX API (see API docs below). Each slider has a “Buy” button with no action on press and “Add to favorite” button, which will add this trip to your personal favorites list.

  FAVORITES PAGE:

- Header and banner sections are static, “Favorite” button should be active
- “Clean all” - should remove all flights from favorite
- List of favorite flights - “Buy” button doesn't do anything, “Delete” button removes exact flight.

**Technical Requirements:**

- TypeScript
- Atomic design Pattern
- React Apollo (to get data from API)
- Recoil for state management (favorite flights, this state manages only on FE)
- Styled Component

**API Docs:**
API link and sandbox - [link to api](https://studio.apollographql.com/public/SpaceX-pxxbxen/explorer?variant=current)

Query example (you can test it in API sandbox):
query ExampleQuery {
rockets {
id
description
name
}
}

_id_- as unique identity
_name_ - card title
_description_ - card subtitle

For images use from design. in turn for the first three calls, then for the next For 1, 4, 7... , there will be 1st picture from the design and so on
