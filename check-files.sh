#!/bin/bash
# File: check-files.sh
EXPECTED_FILES=(
    "src/components/BrotherTypes.jsx"
    "src/components/BrotherTypes.module.css"
    "src/pages/BrotherTypesPage.jsx"
    "src/Router.jsx"
    "src/components/NavLink.jsx"
)

echo "Checking for required files..."
for file in "${EXPECTED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing!"
    fi
done

echo ""
echo "Checking imports in Router.jsx..."
if grep -q "import BrotherTypesPage from \"./pages/BrotherTypesPage\"" src/Router.jsx; then
    echo "✅ BrotherTypesPage is imported correctly in Router.jsx"
else
    echo "❌ BrotherTypesPage import is missing or incorrect in Router.jsx"
    echo "Expected: import BrotherTypesPage from \"./pages/BrotherTypesPage\";"
fi

echo ""
echo "Checking imports in index.jsx..."
if grep -q "import Router from \"./Router\"" src/index.jsx; then
    echo "✅ Router is imported correctly in index.jsx"
else
    echo "❌ Router import is missing or incorrect in index.jsx"
    echo "Expected: import Router from \"./Router\";"
fi

echo ""
echo "Checking BrotherTypesPage.jsx content..."
if grep -q "import BrotherTypes from \"../components/BrotherTypes\"" src/pages/BrotherTypesPage.jsx; then
    echo "✅ BrotherTypes component is imported correctly in BrotherTypesPage.jsx"
else
    echo "❌ BrotherTypes import is missing or incorrect in BrotherTypesPage.jsx"
    echo "Expected: import BrotherTypes from \"../components/BrotherTypes\";"
fi

echo ""
echo "IMPORTANT: If all checks passed but Brother Types still doesn't work,"
echo "try these fixes:"
echo ""
echo "1. Update the Router component with the debugging version provided"
echo "2. Update the NavLink component with the fixed version provided"
echo "3. Verify that the pages directory exists: mkdir -p src/pages"
echo "4. If you're still having issues, try this fallback solution:"

echo ""
echo "FALLBACK SOLUTION: Use a direct approach with window.location.href"
cat <<'EOL'
// In your Header.jsx

// Replace NavLink for Brother Types with a regular button

<li class={styles.navItem}>
  <button 
    class={styles.navLink}
    onClick={() => {
      // Use direct navigation as a fallback
      window.location.href = '/brother-types';
    }}
  >
    Brother Types
  </button>
</li>
EOL