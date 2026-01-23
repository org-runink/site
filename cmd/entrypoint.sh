#!/bin/sh
# Community engagement and notification banner

cat << 'EOF'

🚀 Runink Blog Generator latest
   https://runink.org
   
📋 USAGE NOTIFICATION REQUIRED
   Please notify us when using this tool in production:
   • Email: contact@runink.org  
   • GitHub: https://github.com/runink/site/issues (label: image-usage)
   
   This helps us understand our reach and find potential partners.
   
💬 Community & Support:
   • Feature requests & bugs: GitHub Issues
   • Questions: contact@runink.org
   
EOF

# Continue to actual application
exec "$@"
