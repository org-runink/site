# GitHub Secrets Configuration

This document lists all required secrets for the Runink blog generation workflows.

## Required Secrets

Navigate to **Repository Settings → Secrets and variables → Actions** to configure:

### 1. `TAVILY_API_KEY`
**Purpose:** API key for Tavily search service  
**Used in:** 
- `.github/workflows/blog-gen-on-issue.yml`
- `.github/workflows/generate-blog.yaml`

**How to get:**
1. Sign up at https://tavily.com
2. Generate an API key from your dashboard
3. Add as repository secret

### 2. `SLACK_WEBHOOK_URL`
**Purpose:** Webhook URL for Slack notifications when blog generator image is used  
**Used in:**
- `.github/workflows/blog-gen-on-issue.yml`

**How to get:**
1. Go to your Slack workspace
2. Navigate to **Apps → Incoming Webhooks**
3. Create a new webhook for your channel (e.g., `#blog-notifications` or `#leads`)
4. Copy the webhook URL (looks like: `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX`)
5. Add as repository secret

**Slack Message Format:**
```
📊 Blog Generator Image Used
Repository: org/repo
Topic: [Blog Topic]
Triggered by: Issue #123
User: github-username
```

This helps track:
- Potential clients/partners using your tool
- Usage patterns and popular topics
- Community engagement

### 3. `GITHUB_TOKEN`
**Purpose:** Automatically provided by GitHub Actions  
**No action required** - This is automatically available in all workflows

## Setting Secrets

### Via GitHub UI:
1. Go to repository **Settings**
2. Click **Secrets and variables → Actions**
3. Click **New repository secret**
4. Enter name and value
5. Click **Add secret**

### Via GitHub CLI:
```bash
# Set Tavily API Key
gh secret set TAVILY_API_KEY

# Set Slack Webhook
gh secret set SLACK_WEBHOOK_URL
```

## Verifying Secrets

After setting secrets, trigger a test workflow:
1. Create a new issue with label `blog-request`
2. Check the Actions tab for workflow execution
3. Verify Slack notification appears (if configured)

## Security Notes

- Never commit secrets to the repository
- Rotate secrets periodically
- Use separate Slack channels for production vs. development notifications
- Review Slack webhook permissions regularly
