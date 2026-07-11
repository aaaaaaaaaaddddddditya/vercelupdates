==========================================
 VELOX CHAT — Deploy Guide (Vercel)
==========================================

FILES
-----
index.html       -> Main app: ChatGPT-style AI chat (login / signup / guest, saved chats,
                    projects, pin, code Copy + Preview)
plans.html       -> Plans page: Free / Smart / Pro / Velox (all Coming Soon) + Community
                    section with Discord join + ticket steps
admin.html       -> Admin panel (set password on first open). Manage plans, Coming Soon
                    badges, Discord link, community steps. Also shows registered users.
config.js        -> Default plans + Discord link (edit this for changes visible to ALL visitors)
animations.html  -> Animation Studio: describe an idea, AI builds a live animation
                    (player + gallery + download). Uses the same /api/chat proxy.
velox-lite.html  -> Bonus: the original simple Velox Lite chatbot page

NEW: api/chat.js  -> Serverless AI proxy. Your OpenRouter key stays HIDDEN on the server.

SETUP THE API KEY (one time, 1 minute)
--------------------------------------
1. Deploy the folder on Vercel (steps below).
2. Vercel dashboard -> your project -> Settings -> Environment Variables -> Add:
      Name : OPENROUTER_API_KEY
      Value: your OpenRouter key (sk-or-v1-...)
3. Deployments tab -> Redeploy. Done - smart AI live, key invisible.
   (If you skip this, the bot still works on the free Pollinations fallback.)

DEPLOY ON VERCEL (2 minutes)
----------------------------
1. Unzip this folder.
2. Go to https://vercel.com -> Log in -> "Add New..." -> "Project"
   (or just drag & drop the folder at https://vercel.com/new)
3. Upload / import the folder. No build settings needed - it's a static site.
4. Deploy. Your site will be live at yourname.vercel.app
   - Chat:   /            (index.html)
   - Plans:  /plans.html
   - Admin:  /admin.html  (keep this URL private!)

IMPORTANT NOTES
---------------
* No backend: accounts, chats, and admin edits are stored in each visitor's
  BROWSER storage. Your admin changes show in YOUR browser.
* To change plans / Discord link for ALL visitors:
  Admin panel -> "Export config.js" -> replace config.js in the folder -> redeploy.
* The AI is free (Pollinations API) - needs internet, no API key.
  Users can also plug their own OpenRouter/Groq key via the gear icon in chat.
* Don't use a real password when testing signup - it's demo-grade storage.

ADMIN PANEL
-----------
* First open of /admin.html asks you to CREATE the admin password.
* You can: edit plan names, prices, taglines, features, toggle "Coming Soon",
  set the "Most Popular" highlight, change the Discord invite link and the
  community ticket steps, view registered users, reset to defaults.
