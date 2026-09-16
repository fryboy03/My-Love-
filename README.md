# Private-feeling apology website ❤️

## Important
The password screen is only a **client-side gate**. It does NOT make a public GitHub repository truly private. Someone who knows how to inspect the site can still find the password/code, and photos stored in a public repository can be accessed directly.

So:
- Do not put sensitive/private photos in a public GitHub repository.
- Change `SECRET` in `script.js` to a password only you two know.
- Put your photos in `images/` and name them `photo1.jpg`, `photo2.jpg`, `photo3.jpg` (or edit the HTML filenames).

## GitHub Pages
1. Create a **Public** repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `images` folder.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Open the Pages link and share it.

For real privacy, use a hosting service that supports server-side password protection rather than GitHub Pages.
