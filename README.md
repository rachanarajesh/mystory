# Rachana Rajesh portfolio

## Replace your site files

Copy these items into the root of your existing `mystory` repository:

    index.html
    styles.css
    script.js
    SECURITY.md
    assets/Rachana_Rajesh_Resume.pdf

Keep the `assets` folder structure. No build system, package installation, or
JavaScript framework is required. Commit and publish through your existing
GitHub Pages workflow. This bundle has not been pushed or published for you.

## What changed

- Original navy, blue, indigo, and purple palette and gradients retained.
- Fixed malformed CSS, undefined color variables, duplicated modal rules, and
  duplicated JavaScript listeners. Removed the undefined `closeContactMenu` call.
- Shorter hero, project-first action, résumé PDF download, and profile links.
- Responsive navigation, skip link, visible keyboard focus, reduced-motion
  support, native contact dialog, and focus restoration.
- Expandable project summaries, with professional and personal work labelled.
- More specific Work4Flow contributions based on the supplied context.
- Replaced the unexplained 500+ headline with the existing Security+ credential.
- Added metadata and a restrictive meta CSP compatible with the bundled files.
- Added a repository security-reporting policy.

## Review before publishing

The résumé PDF is a new concise résumé derived from the supplied portfolio
content, not a copy of your existing résumé. Review employer names, titles,
dates, and all claims. Replace it with your preferred PDF using the same name
to keep the download link working.

The approximately 35% reduction remains your supplied claim. Confirm its
baseline, measurement period, and calculation before publishing. The 500+
systems claim is omitted until you can explain the scope. No additional
performance measurements or security controls have been invented.

The supplied HPE role and dates were preserved; confirm these match your résumé
and accurately describe any employer/client relationship.

The expandable summaries are text explanations based on supplied information.
They are not evidence of new code, demos, detection tests, or diagrams.
Add sanitized examples, screenshots, or specific project repositories when
you can share them. The GitHub link goes to your profile, not a project demo.

## Credential and publication links

In `script.js`, fill in verified HTTPS URLs in `portfolioLinks`:

    credential: '',
    publication: ''

Links stay hidden until configured. This prevents fabricated verification
URLs or broken placeholder links. A public DOI landing page is suitable for
the publication; a personal verification page is suitable for the credential.

## Security policy

`SECURITY.md` belongs in the repository root so maintainers and researchers can
find your reporting policy. It does not make the website secure by itself.
Read it before publishing; its reporting contact uses your existing public
email. No acknowledgement deadline or bounty is promised.

No `security.txt` is included: a domain-level discovery file needs to be placed
and maintained at the appropriate origin location, not assumed to work from
this GitHub Pages project subdirectory.

The meta CSP cannot provide every response-header protection. If you later
add analytics, forms, embeds, fonts, or scripts, review the policy deliberately.
Do not loosen it by allowing arbitrary inline scripts just to hide an error.

## Local preview

The delivered files passed JavaScript syntax, internal-link and asset checks,
CSS variable/balance checks, and isolated interaction-logic checks. The résumé
PDF was rendered and visually reviewed. A full browser preview of the updated
site could not run in the authoring environment; verify desktop and mobile
layout and native dialog behavior before publishing.

From this folder, run:

    python -m http.server 8000

Open http://localhost:8000/. Check desktop and phone widths, project expansion,
navigation, résumé download, and contact dialog (including Tab and Escape).
With JavaScript disabled, section links, project details, PDF download, and
email contact remain available.
