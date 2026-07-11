/* Velox shared config — generated from Admin Panel */
window.VX_DEFAULT_CFG = {
  "discord": "https://discord.gg/velox",
  "plans": [
    {
      "id": "free",
      "name": "Free",
      "price": "₹0",
      "period": "forever",
      "tag": "Get started with Velox AI",
      "features": [
        "2,000 messages / day",
        "20 AI images / day",
        "Chat history & projects",
        "Community support"
      ],
      "soon": false,
      "highlight": false
    },
    {
      "id": "smart",
      "name": "Smart",
      "price": "₹99",
      "period": "/month",
      "tag": "For everyday power users",
      "features": [
        "Higher daily limits",
        "Faster responses",
        "Smarter AI model",
        "Priority queue"
      ],
      "soon": true,
      "highlight": false
    },
    {
      "id": "pro",
      "name": "Pro",
      "price": "₹299",
      "period": "/month",
      "tag": "For creators & coders",
      "features": [
        "Everything in Smart",
        "Best AI models",
        "Longer memory",
        "Early access features"
      ],
      "soon": true,
      "highlight": true
    },
    {
      "id": "velox",
      "name": "Velox",
      "price": "₹599",
      "period": "/month",
      "tag": "The ultimate Velox experience",
      "features": [
        "Everything in Pro",
        "Highest limits",
        "VIP support",
        "Custom AI persona"
      ],
      "soon": true,
      "highlight": false
    }
  ],
  "community": {
    "title": "Community",
    "tag": "Free subscription through our Discord community",
    "steps": [
      "Join our Discord server",
      "Create a ticket in #tickets",
      "Ask for a Community subscription for Velox Lite",
      "A staff member will grant it to you"
    ]
  }
};

window.vxGetCfg = function () {
  try {
    const s = localStorage.getItem("vx_cfg");
    if (s) {
      const c = JSON.parse(s);
      if (c && Array.isArray(c.plans) && c.plans.length) {
        if (!c.community) c.community = JSON.parse(JSON.stringify(window.VX_DEFAULT_CFG.community));
        return c;
      }
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(window.VX_DEFAULT_CFG));
};

window.vxSaveCfg = function (c) {
  try { localStorage.setItem("vx_cfg", JSON.stringify(c)); return true; } catch (e) { return false; }
};

window.vxResetCfg = function () {
  try { localStorage.removeItem("vx_cfg"); } catch (e) {}
};
