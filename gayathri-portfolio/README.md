# Gayathri V — React Portfolio

A responsive, dark purple/blue gradient portfolio built with React + Vite.

## 1. Install the tools
- Install Node.js LTS: https://nodejs.org/
- Install Visual Studio Code: https://code.visualstudio.com/
- Create a GitHub account if you do not already have one.

## 2. Open the project
1. Extract `gayathri-portfolio.zip`.
2. Open the extracted `gayathri-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.

## 3. Install and run
Run these commands in the VS Code terminal:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## 4. Add your own photo and resume
Inside the project, open the `public` folder.

- Copy your chosen profile photo into `public` and rename it exactly `profile.jpg`.
- Copy your resume PDF into `public` and rename it exactly `resume.pdf`.

The Home section and Resume buttons already point to these filenames. If your image is PNG, either convert it to JPG and use `profile.jpg`, or update `/profile.jpg` in `src/App.jsx` to `/profile.png`.

**Photo tip:** Use a clear, well-lit head-and-shoulders photo. Avoid a group photo or a photo with text/watermarks.

**Resume tip:** Check that the PDF contains the same current details as the website before publishing. Your phone number and email are public on this portfolio.

## 5. Personal details to verify
Open `src/data/portfolio.js` to edit your details, project descriptions, skills, and experience.
Before publishing, confirm:
- Exact dates and role titles for Mech Tech Research Foundation and Novitech.
- Whether SmartHire AI is completed or still in development.
- Whether ZENOVA Knee Flex is a proposal, prototype, or completed project.
- Correct resume and photo files.

## 6. Create a production build
```bash
npm run build
```
If it succeeds, Vite creates a `dist` folder.

## 7. Push to GitHub
Create a new empty repository on GitHub named `gayathri-portfolio`.
Then run these commands in the project terminal (replace the URL with your own repository URL):

```bash
git init
git add .
git commit -m "Create Gayathri portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gayathri-portfolio.git
git push -u origin main
```

If Git asks you to sign in, complete the browser sign-in flow.

## 8. Deploy using Vercel
1. Visit https://vercel.com/ and sign in with GitHub.
2. Choose **Add New → Project**.
3. Import `gayathri-portfolio`.
4. Framework should be detected as **Vite**.
5. Keep Build Command `npm run build` and Output Directory `dist`.
6. Click **Deploy**.
7. Copy the live website URL and test it on your phone.

When you push later changes to GitHub, Vercel redeploys automatically.

## 9. Test before submission
- Click every navigation item.
- Test GitHub and LinkedIn links.
- Test the Resume download button.
- Test the contact form (it opens the visitor's email application; it does not send/store messages on a server).
- Test at mobile width and desktop width.
- Make sure the real photo and PDF are present before deploying.
- Take screenshots of the Home, Skills, Projects, and Contact sections.

## Important
This is a frontend-only portfolio. No backend or database is included. The contact form uses a `mailto:` link, so a visitor needs an email application configured. If your internship reviewer expects a server-backed contact form, connect a form service or build a backend separately.
