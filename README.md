# Vueling Newsletter Banner

A small script, written in plain JavaScript, that shows a newsletter pop-up on the [Vueling](https://www.vueling.com/es) home page. It uses Vueling's colors and font so it looks like part of the site, and it never touches Vueling's own code: everything is added from the browser console.

This is a practice project that imitates a real **CRO** task (Conversion Rate Optimization: small changes to a website to get more people to do something, like subscribing to a newsletter). 

## How to use

1. Open <https://www.vueling.com/es> in Google Chrome.
2. Open the Console: press `F12` (or `Ctrl + Shift + J` on Windows, `Cmd + Option + J` on Mac).
3. If Chrome won't let you paste, type `allow pasting` and press Enter.
4. Copy everything inside `bannerVueling.js`, paste it into the Console and press Enter.
5. Wait 3 seconds. The pop-up slides in from the right.
6. Want to see it again? Reload the page and repeat the steps.

## Screenshots of banner

| 1. Initial state (button disabled) | 2. Valid email (button enabled) | 3. Redirect to official newsletter |
| :---: | :---: | :---: |
| <img width="220" alt="Initial State" src="https://github.com/user-attachments/assets/2c7acf06-8849-4710-99aa-2bf65bd87549" />| <img width="220" alt="Valid email" src="https://github.com/user-attachments/assets/bbdd585f-f58f-4674-aa6f-9f13d03f3e98" />|<img width="220" alt="Redirect to official web" src="https://github.com/user-attachments/assets/1c5f80d1-7978-458d-be9e-d75f8e80287d" />|

## Technologies

- JavaScript (Vanilla JS)
- CSS (added from JavaScript)
- Git and GitHub

## Features

- The whole pop-up is created with JavaScript.
- The styles come from the script itself, so nothing else is needed.
- It follows Vueling's look: colors, font and rounded buttons.
- It checks the email format while you type and tells you if it's right or wrong.
- The subscribe button stays off until the email is valid.
- It appears 3 seconds after you run the code and slides in from the right.
- When you close it, it slides out and leaves the page exactly as it was.
- If you run the script twice, you still get only one pop-up.

## Design

| Element | Value |
| :--- | :--- |
| Yellow (top line and button) | <img src="https://placehold.co/14x14/FFF000/FFF000.png" width="14" height="14" alt="Yellow" /> `#FFF000` |
| Black (title and text) | <img src="https://placehold.co/14x14/000000/000000.png" width="14" height="14" alt="Black" /> `#000000` |
| White (background) | <img src="https://placehold.co/14x14/FFFFFF/CCCCCC.png" width="14" height="14" alt="White" /> `#FFFFFF` |
| Dark gray (description) | <img src="https://placehold.co/14x14/333333/333333.png" width="14" height="14" alt="Dark gray" /> `#333333` |
| Light gray (email field border) | <img src="https://placehold.co/14x14/CCCCCC/CCCCCC.png" width="14" height="14" alt="Light gray" /> `#CCCCCC` |
| Green / red (email feedback) | <img src="https://placehold.co/14x14/198754/198754.png" width="14" height="14" alt="Green" /> `#198754` / <img src="https://placehold.co/14x14/DC3545/DC3545.png" width="14" height="14" alt="Red" /> `#DC3545` |
| Font | `VuelingPilcrow, Arial, sans-serif` |
| Button corners | `1.375rem` |

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

## Good to know

- The email is only checked, never saved or sent. The official newsletter page can't be filled in from outside, so the button just takes you there.
- The script only lives in the page until you reload it. It's an experiment, not a browser extension.

## Author

**By Melycode**
