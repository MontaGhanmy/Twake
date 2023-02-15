import{_ as e,c as a,o as t,a as r}from"./app.ad4e2cff.js";const f=JSON.parse('{"title":"\u{1F512} Privacy","description":"","frontmatter":{},"headers":[{"level":2,"title":"General presentation of Twake","slug":"general-presentation-of-twake","link":"#general-presentation-of-twake","children":[]},{"level":2,"title":"Quick FAQ about Twake security","slug":"quick-faq-about-twake-security","link":"#quick-faq-about-twake-security","children":[]},{"level":2,"title":"High availability","slug":"high-availability","link":"#high-availability","children":[]},{"level":2,"title":"Application encryption","slug":"application-encryption","link":"#application-encryption","children":[]},{"level":2,"title":"Other","slug":"other","link":"#other","children":[]},{"level":2,"title":"Continuous security checks","slug":"continuous-security-checks","link":"#continuous-security-checks","children":[]}],"relativePath":"how-to-use-it/privacy-security.md"}'),i={name:"how-to-use-it/privacy-security.md"},o=r('<h1 id="\u{1F512}-privacy" tabindex="-1">\u{1F512} Privacy <a class="header-anchor" href="#\u{1F512}-privacy" aria-hidden="true">#</a></h1><p>You will find everything related to privacy in this document <a href="https://twake.app/en/privacy/" target="_blank" rel="noreferrer">https://twake.app/en/privacy/</a>.</p><p>At Twake we are committed to protecting your privacy. We implemented specific security features to ensure that your data is safe and secure.</p><h2 id="general-presentation-of-twake" tabindex="-1">General presentation of Twake <a class="header-anchor" href="#general-presentation-of-twake" aria-hidden="true">#</a></h2><p>Twake is available in two main versions :</p><ul><li>SaaS : Twake as a service (SaaS available on twake.app)</li><li>On-Premise : Twake on-premise (on private servers or on dedicated servers managed by Twake)</li></ul><p>The Twake SaaS version is hosted in France by a French infrastructure provider. All servers are located in Paris (UE).</p><p>The Twake On-Premise version can be deployed on any local server and can work fully disconnected from the Internet or with an unique and unidirectional connection to twake.app for licencing management, mailing and iOS and Android push notifications (that are not available without additional configuration in fully disconnected mode).</p><p>On SaaS version, Twake provide two main tiers softwares :</p><ul><li>ONLYOFFICE spreadsheet, ONLYOFFICE document and ONLYOFFICE presentation, https:// <a href="http://onlyoffice.com" target="_blank" rel="noreferrer">onlyoffice.com</a></li><li>Jitsi video-conferencing, <a href="https://jitsi.org/" target="_blank" rel="noreferrer">https://jitsi.org/</a></li></ul><p>On the On-Premise version those softwares are optionals.</p><h2 id="quick-faq-about-twake-security" tabindex="-1">Quick FAQ about Twake security <a class="header-anchor" href="#quick-faq-about-twake-security" aria-hidden="true">#</a></h2><h4 id="where-are-your-servers" tabindex="-1">Where are your servers ? <a class="header-anchor" href="#where-are-your-servers" aria-hidden="true">#</a></h4><p>Twake servers are all in France, in Paris.</p><h4 id="are-you-grpd-compliant" tabindex="-1">Are you GRPD compliant ? <a class="header-anchor" href="#are-you-grpd-compliant" aria-hidden="true">#</a></h4><p>Yes ! As you can see in this document, we do everything we can do to protect your personal and professional data. Concerning your password and personal data specifically, passwords are hashed using PBKDF2, your data is encrypted before to be sent to the database (encryption at rest on the application layer) and we use TLS.0 for communications (encryption on transit). Moreover, we do not require any personal data in order for you to use our software, you can use Twake without disclosing personal information.</p><h4 id="what-protocol-do-you-use" tabindex="-1">What protocol do you use ? <a class="header-anchor" href="#what-protocol-do-you-use" aria-hidden="true">#</a></h4><p>We use HTTPS for unidirectional traffic encryption and WSS for bidirectional realtime traffic encryption. Passwords are hashed with PBKDF2. Files are encrypted with OpenSSL AES-256-CBC with a key composed of three parts stored in database, in code and in the server configuration. Finally our database data is encrypted with OpenSSL AES-256-CBC. In order to always improve our security, next version of Twake will include full end-to-end encryption for direct and private channels using the Matrix protocol.</p><h4 id="how-do-you-manage-backups" tabindex="-1">How do you manage backups ? <a class="header-anchor" href="#how-do-you-manage-backups" aria-hidden="true">#</a></h4><p>We backup our encrypted database and your encrypted documents in a replicated Object Storage. We keep a backup of each month and a backup of each of the last seven days.</p><h4 id="what-if-i-want-to-export-all-my-data" tabindex="-1">What if I want to export all my data ? <a class="header-anchor" href="#what-if-i-want-to-export-all-my-data" aria-hidden="true">#</a></h4><p>We do not provide an export feature on the software itself. But we have the ability to export your data on-demand, please contact us for more information.</p><h4 id="can-i-delete-my-account-and-erase-my-data" tabindex="-1">Can I delete my account and erase my data ? <a class="header-anchor" href="#can-i-delete-my-account-and-erase-my-data" aria-hidden="true">#</a></h4><p>Yes, you can delete your account and erase your data. To proceed, open your account from the &quot;console&quot; and click on &quot;Delete my account&quot;. You will be asked to confirm your choice. Once your account is deleted, you will not be able to access it anymore.</p><h4 id="how-do-you-manage-security-with-tiers-applications-and-modules" tabindex="-1">How do you manage security with tiers applications and modules ? <a class="header-anchor" href="#how-do-you-manage-security-with-tiers-applications-and-modules" aria-hidden="true">#</a></h4><p>We cannot guarantee the security of the data you send to tiers applications and modules. If you work with an external app like Zapier or Giphy, they will have access to some of your information. You can see the access scope of an application before to add it to your company.</p><h2 id="high-availability" tabindex="-1">High availability <a class="header-anchor" href="#high-availability" aria-hidden="true">#</a></h2><p>Twake is built on scalable technologies and allow us to scale to million users but also to be fault tolerant. We define two kind of replication, hardware replication and software replication:</p><p>Hardware replication in case of hard disk crash or network issue is managed by our infrastructure provider, you will find more details on how they manage this following these links:</p><ul><li>Servers: <a href="https://www.ovhcloud.com/en/public-cloud/" target="_blank" rel="noreferrer">https://www.ovhcloud.com/en/public-cloud/</a></li><li>Object storage and backups: <a href="https://www.ovhcloud.com/en/public-cloud/object-storage/" target="_blank" rel="noreferrer">https://www.ovhcloud.com/en/public-cloud/object-storage/</a></li></ul><p>Software replication is done by ourself. Each middleware and nodes used by Twake are replicated at least three time. In the rare case of node failure, our system automatically alerts us and start using the remaining available node until we operate and fix the broken one.</p><h2 id="application-encryption" tabindex="-1">Application encryption <a class="header-anchor" href="#application-encryption" aria-hidden="true">#</a></h2><p>Data are stored encrypted in ScyllaDB and searchable entities will be stored in Elastic Search.</p><h4 id="scylladb" tabindex="-1">ScyllaDB <a class="header-anchor" href="#scylladb" aria-hidden="true">#</a></h4><p>Any data (except non-sensible data like identifiers, dates and counters) stored in ScyllaDB is encrypted using OpenSSL AES-256-CBC before being sent to the database.</p><h4 id="indexed-search-storage" tabindex="-1">Indexed search storage <a class="header-anchor" href="#indexed-search-storage" aria-hidden="true">#</a></h4><p>We provide advanced search features to our product Twake using Elastic Search to index our entities. Entities are not stored in Elastic Search and only indexes will be available if Twake Elastic Search servers are compromised.</p><h2 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-hidden="true">#</a></h2><h4 id="random-token-generation" tabindex="-1">Random token generation <a class="header-anchor" href="#random-token-generation" aria-hidden="true">#</a></h4><p>For random generation we use the PHP built-in random_bytes function with bin2hex if needed on PHP side and the crypto library with randomBytes from NodeJS and frontend side.</p><h4 id="passwords-storage-and-authentication" tabindex="-1">Passwords storage and authentication <a class="header-anchor" href="#passwords-storage-and-authentication" aria-hidden="true">#</a></h4><p>Passwords are not stored in clear, only a hash of it is stored in database. We use the hash_pbkdf2 method with a randomly generated salt for each user.</p><h4 id="sql-injection" tabindex="-1">SQL Injection <a class="header-anchor" href="#sql-injection" aria-hidden="true">#</a></h4><p>Each database access use Doctrine ORM sanitisation before write or reads, we never use custom access to the database to reduce risks of injection. We developed a middleware to use ScyllaDB databases but this middleware works after Doctrine ORM sanitisation. On NodeJS, we also implemented an ORM for all database access in order to keep this level of security.</p><h4 id="xss" tabindex="-1">XSS <a class="header-anchor" href="#xss" aria-hidden="true">#</a></h4><p>We use React as front-end framework and we never execute tiers Javascript. External apps are loaded in webviews or iframes and use a bridge designed like a router for data exchange between frames.</p><h2 id="continuous-security-checks" tabindex="-1">Continuous security checks <a class="header-anchor" href="#continuous-security-checks" aria-hidden="true">#</a></h2><ul><li>We use Snyk to ensure that our dependencies are up to date and secure.</li><li>We are active on huntr.dev to ensure that we fix all security issues reported by the community.</li></ul>',48),n=[o];function s(d,c,l,h,u,p){return t(),a("div",null,n)}const w=e(i,[["render",s]]);export{f as __pageData,w as default};
