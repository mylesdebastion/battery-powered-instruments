#!/bin/bash
# Pre-commit hook to sync bpij-poster.html to index.html
# To install: cp pre-commit-hook.sh .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

echo "🔄 Syncing bpij-poster.html → index.html..."

# Check if bpij-poster.html has been modified
if git diff --cached --name-only | grep -q "bpij-poster.html"; then
    echo "📝 Detected changes in bpij-poster.html"
    
    # Copy to index.html
    cp bpij-poster.html index.html
    
    # Add index.html to the commit
    git add index.html
    
    echo "✅ index.html synchronized and added to commit"
else
    echo "ℹ️  No changes to bpij-poster.html detected"
fi

echo "🎉 Pre-commit sync complete"