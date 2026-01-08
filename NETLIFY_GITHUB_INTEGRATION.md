# AINOVA STARK EDITION - Connect GitHub to Netlify

## 🔗 SETUP INSTRUCTIONS

**Status**: Netlify site created, GitHub repository pushed
**Next Step**: Connect them for automatic deployments

---

## 📋 CURRENT STATUS

### ✅ Completed
- [x] GitHub repository created: `AILabManager-tech/ainova-stark-edition`
- [x] Code pushed to GitHub
- [x] Netlify site created: `ainova-stark-edition`
- [x] Manual deployment successful

### ⏳ To Complete
- [ ] Link GitHub repository to Netlify
- [ ] Configure build settings
- [ ] Enable automatic deployments
- [ ] Test auto-deploy on push

---

## 🚀 CONNECT GITHUB TO NETLIFY (Two Methods)

### Method 1: Via Netlify Dashboard (Recommended - Easiest)

**Netlify Admin Panel opened in browser**: https://app.netlify.com/projects/ainova-stark-edition

Follow these steps in the Netlify dashboard:

#### Step 1: Access Site Settings
1. You should see the Netlify dashboard for `ainova-stark-edition`
2. Look for **"Site settings"** or **"Site configuration"**
3. Click on **"Build & deploy"** in the left sidebar

#### Step 2: Link Repository
1. Scroll to **"Continuous deployment"** section
2. Click **"Link site to Git"** or **"Link repository"**
3. Choose **"GitHub"** as the provider
4. **Authorize Netlify** to access your GitHub account (if not already done)
5. Select the repository: **`AILabManager-tech/ainova-stark-edition`**

#### Step 3: Configure Build Settings
When prompted, enter these settings:

```
Base directory:         (leave empty)
Build command:          npm run build
Publish directory:      dist
Production branch:      main
```

#### Step 4: Save and Deploy
1. Click **"Save"** or **"Link repository"**
2. Netlify will automatically trigger a deployment
3. Wait for the build to complete (~1-2 minutes)

#### Step 5: Verify Connection
- You should see **"Connected to GitHub"** status
- Check that **"Auto publishing"** is enabled
- Confirm **"Production branch: main"**

---

### Method 2: Via Netlify CLI (Alternative)

**Note**: This method requires manual configuration and may need additional OAuth steps.

```bash
# Navigate to project directory
cd /home/jarvis/Bureau/SAFE_PLACE_FOR_TEST/AINOVA_experiments_v.1.0

# Initialize Netlify with GitHub
npx netlify init

# Follow prompts:
# 1. "Do you want to create a new site or link an existing one?"
#    → Choose: "Link this directory to an existing site"
#
# 2. Select: "ainova-stark-edition"
#
# 3. "Connect to GitHub?"
#    → Choose: "Yes"
#
# 4. It will open browser for GitHub OAuth
#    → Authorize Netlify
#
# 5. Select repository: "AILabManager-tech/ainova-stark-edition"
#
# 6. Configure build settings:
#    Build command: npm run build
#    Publish directory: dist
```

---

## ⚙️ BUILD CONFIGURATION

### Recommended netlify.toml (Optional but Good Practice)

Create this file in your project root for explicit configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  base = ""

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**To add this**:
```bash
# Create the file
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF

# Commit and push
git add netlify.toml
git commit -m "Add Netlify configuration file"
git push origin main
```

---

## 🔄 AUTOMATIC DEPLOYMENT WORKFLOW

Once connected, this is how it works:

### Standard Workflow
```
1. Make code changes locally
   ↓
2. Commit changes: git commit -m "message"
   ↓
3. Push to GitHub: git push origin main
   ↓
4. Netlify detects push automatically
   ↓
5. Netlify runs: npm install && npm run build
   ↓
6. Netlify deploys built files from dist/
   ↓
7. Site updates automatically (30-60 seconds)
   ↓
8. Live at: https://ainova-stark-edition.netlify.app
```

### Branch Previews (Bonus)
When you push to non-main branches:
```
git checkout -b feature/new-feature
git push origin feature/new-feature
   ↓
Netlify creates a preview deploy at:
https://feature-new-feature--ainova-stark-edition.netlify.app
```

---

## ✅ VERIFICATION STEPS

After connecting GitHub, verify everything works:

### 1. Check Dashboard
Go to: https://app.netlify.com/projects/ainova-stark-edition

You should see:
- ✅ **Repository**: Connected to `AILabManager-tech/ainova-stark-edition`
- ✅ **Branch**: `main`
- ✅ **Auto publish**: Enabled
- ✅ **Build command**: `npm run build`
- ✅ **Publish directory**: `dist`

### 2. Test Automatic Deployment
```bash
# Make a small change
echo "<!-- Test auto-deploy -->" >> index.html

# Commit and push
git add index.html
git commit -m "Test: Verify auto-deploy from GitHub"
git push origin main

# Watch Netlify dashboard for automatic build
# Should see new deployment within 30 seconds
```

### 3. Monitor Build Logs
```bash
# Via CLI
npx netlify watch

# Or in browser
# Go to: Deploys tab in Netlify dashboard
```

---

## 📊 DEPLOYMENT STATUS

### Check Site Info
```bash
# View site details
npx netlify status

# View recent deploys
npx netlify deploys:list

# Open site in browser
npx netlify open:site

# Open admin panel
npx netlify open:admin
```

### Site Information
```
Site Name:    ainova-stark-edition
Site ID:      3a545bf1-0a4f-490d-86f6-fbd9107de232
Site URL:     https://ainova-stark-edition.netlify.app
Admin URL:    https://app.netlify.com/projects/ainova-stark-edition
```

---

## 🎯 BENEFITS OF GITHUB + NETLIFY

### Automatic Deployments
- ✅ Push to GitHub → Auto-deploy
- ✅ No manual builds needed
- ✅ Version history tracked

### Deploy Previews
- ✅ Preview PRs before merging
- ✅ Test branches independently
- ✅ Share preview URLs with team

### Rollback Capability
- ✅ One-click rollback to any previous deploy
- ✅ Instant rollback (no rebuild needed)
- ✅ Deploy history preserved

### Collaboration
- ✅ Team members can contribute via PRs
- ✅ Review code before deployment
- ✅ Automated testing (with GitHub Actions)

---

## 🐛 TROUBLESHOOTING

### Connection Failed
**Problem**: Can't authorize Netlify on GitHub

**Solution**:
1. Go to GitHub Settings → Applications
2. Find "Netlify" in Authorized OAuth Apps
3. Grant/revoke and re-authorize
4. Try connecting again

### Build Fails on Netlify
**Problem**: Build works locally but fails on Netlify

**Solution**:
```bash
# Check Node version
# Add to netlify.toml:
[build.environment]
  NODE_VERSION = "18"

# Or set in Netlify dashboard:
# Site Settings → Build & Deploy → Environment
# Add: NODE_VERSION = 18
```

### Site Not Updating
**Problem**: Pushed to GitHub but site didn't update

**Solution**:
1. Check Netlify dashboard → Deploys tab
2. Look for failed builds
3. Check build logs for errors
4. Verify branch is set to `main`

### Wrong Branch Deploying
**Problem**: Netlify is watching wrong branch

**Solution**:
1. Go to Site Settings → Build & Deploy
2. Find "Production branch"
3. Change to: `main`
4. Save changes

---

## 🔐 SECURITY BEST PRACTICES

### Environment Variables
Never commit secrets! Use Netlify Environment Variables:

```bash
# Set via CLI
npx netlify env:set API_KEY "your-secret-key"

# Or via dashboard
# Site Settings → Environment Variables → Add variable
```

### Build Hooks
Trigger builds from external sources:

```bash
# Create build hook
npx netlify build:create-hook --name "External Trigger"

# Get webhook URL
# Use it to trigger builds from other services
```

---

## 📚 ADDITIONAL RESOURCES

### Documentation
- **Netlify + GitHub**: https://docs.netlify.com/git/overview/
- **Build Configuration**: https://docs.netlify.com/configure-builds/overview/
- **Deploy Previews**: https://docs.netlify.com/site-deploys/deploy-previews/

### Commands Reference
```bash
# Link site
npx netlify link

# Watch for changes
npx netlify watch

# View logs
npx netlify logs

# List all sites
npx netlify sites:list

# Status
npx netlify status
```

---

## 🎉 COMPLETION CHECKLIST

Once you complete the connection, verify:

- [ ] Netlify dashboard shows GitHub connection
- [ ] Build settings are configured correctly
- [ ] Test push triggers automatic deployment
- [ ] Site updates appear on production URL
- [ ] Deploy logs show successful builds
- [ ] Optional: `netlify.toml` added to repository

---

## 📝 SUMMARY

**Current Setup**:
- ✅ GitHub Repository: https://github.com/AILabManager-tech/ainova-stark-edition
- ✅ Netlify Site: https://ainova-stark-edition.netlify.app
- ⏳ Connection: In progress (dashboard opened)

**Next Action**:
Follow the steps in "Method 1" above to complete the GitHub → Netlify connection in the browser.

Once connected, every `git push` to `main` will automatically deploy to production! 🚀

---

**Guide created by**: JARVIS-X
**Date**: 2025-12-27
**Status**: Awaiting GitHub connection in Netlify dashboard
