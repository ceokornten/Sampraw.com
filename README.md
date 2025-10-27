# NoLimit Landing Page

This repository contains the static landing page for **NoLimit**. The project now includes separate pages for the blog, a video playlist, and an image gallery in addition to the home page.

## Viewing the Site

To view the site locally, clone this repository and open `index.html` or any of the other pages (`blog.html`, `videos.html`, `gallery.html`) in your favorite browser.

```
# Example
$ git clone <repo-url>
$ cd Sampraw.com
$ xdg-open index.html  # or open index.html on your system
```

## Project Structure

- `index.html` – Main landing page with the slideshow, video playlist and blog posts.
- `blog.html` – Standalone page containing the blog section.
- `videos.html` – Standalone page showcasing the video playlist.
- `gallery.html` – Standalone page featuring the image slideshow/gallery.
- `style.css` – Stylesheet controlling page layout and appearance.
- `script.js` – JavaScript powering the slideshow and handling video playlist clicks.
- `LICENSE` – The MIT license for this project.

## Step-by-Step Guide to Building with World ID

If you are interested in becoming a World ID developer, follow the steps below to get set up, explore the ecosystem, and ship a prototype:

1. **Review the Worldcoin docs and trust model**  
   Start at the [World ID documentation](https://docs.worldcoin.org/). Pay particular attention to the high-level architecture, how the iris-based proof of personhood works, and the guarantees the protocol makes to relying applications. Understanding the threat model will help you decide which verification level fits your use case.
2. **Set up your developer account**  
   Create a Worldcoin developer account and register an application in the Worldcoin Developer Portal. This gives you access to API keys, sandbox credentials, and configuration options like the `appId` you will need on the frontend.
3. **Install the World ID SDK**  
   For web projects, add the `@worldcoin/idkit` package with your package manager (`npm install @worldcoin/idkit`). Native, backend, and React Native SDKs are documented in the same portal; choose the one that matches your stack.
4. **Implement the verification flow**  
   Embed the IDKit widget or use the mobile deep link to request verification. On success, the user is issued a zero-knowledge proof payload (`nullifier_hash`, `merkle_root`, `proof`) that you will forward to your backend for validation.
5. **Verify proofs on your backend**  
   Use the Worldcoin Developer API or the official server-side libraries to verify the proof. Persist the `nullifier_hash` to prevent replay and enforce per-person limits in your business logic.
6. **Design with privacy and UX in mind**  
   Clearly communicate why you request World ID verification and how you handle user data. Offer alternative onboarding paths for users who cannot or do not want to verify yet, and store only the minimum metadata required for auditing.
7. **Test in sandbox then go live**  
   First, point your app to the sandbox environment to validate the integration without touching production quotas. Once your flow works end-to-end, request production approval through the developer dashboard, switch to the production `appId`, and monitor metrics after launch.

For deeper dives, the documentation includes quickstart templates, sample backend implementations, and community Discord channels where you can ask implementation questions.

## License

This project is released under the [MIT License](LICENSE). You are free to use, modify, and distribute it under the terms of that license.
