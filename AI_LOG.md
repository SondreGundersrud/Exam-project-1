2026-03-21: Asked Gemini on how to invert an html icon.

2026-03-22: Asked Gemini to debug my code to fix the carousel arrows. They not equal height.

2026-03-31:
Asked Gemini to debug my code to let the image be clickable.
Asked Gemini to explain the differences in how header, .header, .nav, and .header .nav, and how they worked because I forgot the difference.

2026-04-03:
Asked Gemini to debug my js code. Could not load products on main page.

2026-04-04:
Asked Gemini to debug my .carousel (CSS) code as it for some reason was not responding to my height settings.
Asked ChatGPT to debug my .carousel code as the View Product button disappears when I'm shrinking the website between 600px and 1200px in the inspction window. If I reduce the height on the browser, the entire carousel goes away. I need to fix this somehow.

2026-04-12:
Asked Gemin to debug success/index.html in order to solve a floating footer, as well as correcting my connection to fontawesome in head, so the check mark icon would work.

2026-04-18:
Asked Gemin to debug my slide1.html to make the columns stay next to each other as well as being responsive to changes in screen sizes.
Asked ChatGPT to debug my white space when reducing size from 800 to 600px. Problem was not having any rules for the part between 600 and 800px. This has been solved now.

2026-04-29:
Asked Gemni to debug my allProducts.js file, as it was not showing the content. Turns out I had misplaced a "}", and it was applying filters but not showing it. It also explained to me that my file path was wrong and that my code was looking for a "product" map inside my product map.

2026-04-30:
Asked Gemini to debug my code that I had adopted from a video. The video was giving instructions on how to make a phone menu, and for some reason the desktop navigation bar was overlapping the phone menu. The changes was mainly correcting my current values e.g. "display: none;" vs. "display: none !important" etc. Furthermore, the hamburger menu would show / not show at different sizes, and it helped me point out that I had not made a rule for it to only show once under 600px, and disapper once it's over 600px. This rule also had to be active despite the menu's active state (open/closed).

2026-05-03:
Asked Gemini to debug my code for calling in reviews on spesfic product page. I had tried to do an async function, mistakenly added "product" to the showReview, but is only inside the fetchAPIProducts. My variables username, rating etc. was not defined. Lasly was my syntax catch (error) with a curly bracelet without an attached "try".

Asked ChatGPT to debug and explain why my share product button didn't work, despite it seemingly working on w3school (https://www.w3schools.com/howto/howto_js_copy_clipboard.asp) It turns out I was first of all putting the function inside the fetchAPIProducts which is wrong place. I was refering to a wrong element/id. Here I learned that window.location.href is the url bar. this was the one thing I needed to target. The .selsect() was not needed as it is used for input fields.

2026-05-04:
Asked Gemini to debug my code and explain why my discounted code wouldn't show. It appears that I had left out "discountedPrice" from the infoDiv.append line. Furhter more, after adding it, I still had issues figuring out why the screen went blank, and I was told it's because the if statement was put before the const regarding price. Learned from this that the if statements should be put close to the bottom of the code before the catch error part.
