# Vueling Newsletter Banner

A small script, written in plain JavaScript, that shows a newsletter pop-up on the [Vueling](https://www.vueling.com/es) home page. It uses Vueling's colors and font so it looks like part of the site, and it never touches Vueling's own code: everything is added from the browser console.

This is a practice project that imitates a real **CRO** task (Conversion Rate Optimization: small changes to a website to get more people to do something, like subscribing to a newsletter). I made it for my Web Application Development studies (DAW).

---

## How to use

1. Open <https://www.vueling.com/es> in Google Chrome.
2. Open the Console: press `F12` (or `Ctrl + Shift + J` on Windows, `Cmd + Option + J` on Mac).
3. If Chrome won't let you paste, type `allow pasting` and press Enter.
4. Copy everything inside `bannerVueling.js`, paste it into the Console and press Enter.
5. Wait 3 seconds. The pop-up slides in from the right.

Want to see it again? Reload the page and repeat the steps.

---

## What the exercise asked for

| What was asked | What I did |
| :--- | :--- |
| Build the pop-up only with JavaScript | `buildBanner()` creates every piece and adds it to the page |
| Add the styles from the same script | `injectStyles()` adds a `<style>` tag with all the CSS |
| A title | An `<h2>` that invites you to subscribe |
| A short text with the benefits | A `<p>` with the reasons to sign up |
| An email field | An `<input type="email">` that checks the email while you type |
| A button to the official newsletter page | A subscribe button that only works with a valid email and sends you to the [official page](https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela) |
| A close button (X) | Closes the pop-up and cleans up everything the script added |
| Show it exactly 3 seconds after running the code | A timer set to 3000 ms |
| Slide in from the right | A CSS transition, started by JavaScript |
| Don't show it twice if the script runs twice | The script checks first if the banner already exists |
| One `.js` file, ready to paste | That's all there is: no `.html` or `.css` files |

---

## Features

- The whole pop-up is created with JavaScript.
- The styles come from the script itself, so nothing else is needed.
- It follows Vueling's look: colors, font and rounded buttons.
- It checks the email format while you type and tells you if it's right or wrong.
- The subscribe button stays off until the email is valid.
- It appears 3 seconds after you run the code and slides in from the right.
- When you close it, it slides out and leaves the page exactly as it was.
- If you run the script twice, you still get only one pop-up.

---

## Design

| Element | Value |
| :--- | :--- |
| Yellow (top line and button) | `#FFF000` |
| Black (title and text) | `#000000` |
| White (background) | `#FFFFFF` |
| Dark gray (description) | `#333333` |
| Light gray (email field border) | `#CCCCCC` |
| Green / red (email feedback) | `#198754` / `#DC3545` |
| Font | `VuelingPilcrow, Arial, sans-serif` |
| Button corners | `1.375rem` |

The font is already loaded by the Vueling website, so I just reuse it. If it's not available, the browser uses Arial.

---

## Code structure

| Function | What it does |
| :--- | :--- |
| `(() => { ... })()` | Wraps the whole script so its variables don't mix with the website's |
| `injectStyles()` | Adds the CSS to the page |
| `buildBanner()` | Builds the pop-up (title, text, email field, buttons) and puts it on the page |
| `isValidEmail()` | Checks if the email looks right (something like `name@domain.com`) |
| `showBanner()` | Makes the pop-up slide in |
| `closeBanner()` | Makes the pop-up slide out and removes it, along with its styles |

### How the 3 seconds and the slide work

1. In the CSS, the pop-up starts hidden and pushed off the right edge of the screen (`translateX(125%)`), with a 500 ms transition.
2. `setTimeout` waits 3000 ms (3 seconds) after the code runs.
3. Then `showBanner()` adds a CSS class that moves the pop-up back to its place. Since the transition is already set, the browser animates the move by itself.

---

## Rules I followed

- **Names:** everything (classes, ids, variables, functions) is in English and in camelCase, like `promoBanner` or `isValidEmail`.
- **Simple CSS:** one class per rule, no long chains of selectors and no `:root` variables. Each style stays close to the thing it styles, and it can't interfere with the Vueling website.
- **Meaningful HTML:** I used tags that describe their purpose (`aside`, `header`, `form`, `label`, `footer`) instead of generic boxes.
- **Accessible from the start:** screen readers can find the title, the email field has a hidden label, the close button has a description, and the feedback message is read out loud when it changes.
- **Images:** the pop-up doesn't use any, so there was nothing to optimize.

---

## Technologies

- JavaScript (Vanilla JS)
- CSS (added from JavaScript)
- Git and GitHub

---

## Good to know

- The email is only checked, never saved or sent. The official newsletter page can't be filled in from outside, so the button just takes you there.
- The script only lives in the page until you reload it. It's an experiment, not a browser extension.

---

## Preview

**1. Initial state (empty field, subscribe button disabled):**


**2. Valid email (green confirmation message, subscribe button enabled):**


**3. Redirect (clicking the CTA opens Vueling's official newsletter page):**

---

## Author

**By Melycode**