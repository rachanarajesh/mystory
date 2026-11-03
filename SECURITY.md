# Security policy

## Scope

This policy covers the source code and static content of Rachana Rajesh's
portfolio at https://rachanarajesh.github.io/mystory/.
It does not cover GitHub infrastructure, third-party websites, or former and
current employers' systems. Only the currently published portfolio is maintained.

## Report a concern privately

Email **rachanarajesh117@gmail.com** with the subject
**Portfolio security report**. Avoid public issues containing exploit details,
personal information, credentials, or other sensitive data.

Include the affected page or file, a short description, minimal reproduction
steps, and the potential impact. Use redacted screenshots or synthetic examples.
Do not send passwords, access tokens, personal records, or unnecessary data.
This mailbox is not advertised as an encrypted reporting channel.

Please avoid destructive testing, denial of service, automated high-volume
scanning, social engineering, and accessing anyone else's information.
This policy does not authorize testing of third-party systems.

Reports will be reviewed as availability permits. There is no guaranteed
response time or paid bug-bounty program.

## Portfolio implementation

- Static HTML, CSS, and JavaScript; no login or application backend is included.
- No analytics or contact-form data collection is added by this source bundle.
- Contact links open the visitor's email, phone, or LinkedIn application.
- Google Fonts is an external resource; loading fonts contacts Google's servers.
- A meta Content Security Policy restricts scripts, styles, fonts, and other
  resources. It is one layer of protection, not a security certification.
- Résumé and portfolio content are public. Publish only material approved for
  disclosure and remove secrets or employer/client data before committing.

If the deployment or integrations change, update this policy accordingly.
