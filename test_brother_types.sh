#!/bin/bash
# File: test-mbti-site.sh

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Testing HarperNet.org Site Implementation${NC}"
echo "========================================"

# Check directory structure
echo -e "\n${YELLOW}Checking Directory Structure:${NC}"
directories=(
  "src/components"
  "src/pages"
  "src/data"
  "public"
)

for dir in "${directories[@]}"; do
  if [ -d "$dir" ]; then
    echo -e "${GREEN}✓${NC} $dir exists"
  else
    echo -e "${RED}✗${NC} $dir does not exist (needed for implementation)"
    echo "  Creating directory: $dir"
    mkdir -p "$dir"
  fi
done

# Check required files
echo -e "\n${YELLOW}Checking Required Files:${NC}"
files=(
  "src/data/sisterTypes.json"
  "src/data/brotherTypes.json"
  "src/components/NavLink.jsx"
  "src/components/SisterTypes.jsx"
  "src/components/SisterTypes.module.css"
  "src/components/BrotherTypes.jsx"
  "src/components/BrotherTypes.module.css"
  "src/pages/SisterTypesPage.jsx"
  "src/pages/BrotherTypesPage.jsx"
  "src/pages/AboutPage.jsx"
  "src/Router.jsx"
  "src/components/TypeTable.jsx"
  "src/components/TypeTable.module.css"
  "src/components/Header.jsx"
  "src/index.jsx"
  "public/_redirects"
  "public/.htaccess"
  "vercel.json"
)

missing_files=0
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo -e "${GREEN}✓${NC} $file exists"
  else
    echo -e "${RED}✗${NC} $file is missing!"
    missing_files=$((missing_files + 1))
  fi
done

# Check imports
echo -e "\n${YELLOW}Checking Key Imports:${NC}"

# Check Router import in index.jsx
if grep -q "import Router from \"./Router\"" src/index.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} Router is properly imported in index.jsx"
else
  echo -e "${RED}✗${NC} Router import is missing in index.jsx"
fi

# Check Page imports in Router.jsx
if grep -q "import SisterTypesPage" src/Router.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} SisterTypesPage is properly imported in Router.jsx"
else
  echo -e "${RED}✗${NC} SisterTypesPage import is missing in Router.jsx"
fi

if grep -q "import BrotherTypesPage" src/Router.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} BrotherTypesPage is properly imported in Router.jsx"
else
  echo -e "${RED}✗${NC} BrotherTypesPage import is missing in Router.jsx"
fi

if grep -q "import AboutPage" src/Router.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} AboutPage is properly imported in Router.jsx"
else
  echo -e "${RED}✗${NC} AboutPage import is missing in Router.jsx"
fi

# Check NavLink usage in Header.jsx
if grep -q "NavLink" src/components/Header.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} NavLink is used in Header.jsx"
else
  echo -e "${RED}✗${NC} NavLink is not used in Header.jsx"
fi

# Check data imports in components
if grep -q "sisterTypes" src/components/SisterTypes.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} Sister types data is imported in SisterTypes.jsx"
else
  echo -e "${RED}✗${NC} Sister types data import is missing in SisterTypes.jsx"
fi

if grep -q "brotherTypes" src/components/BrotherTypes.jsx 2>/dev/null; then
  echo -e "${GREEN}✓${NC} Brother types data is imported in BrotherTypes.jsx"
else
  echo -e "${RED}✗${NC} Brother types data import is missing in BrotherTypes.jsx"
fi

# Check vite.config.js
if grep -q "historyApiFallback" vite.config.js 2>/dev/null; then
  echo -e "${GREEN}✓${NC} historyApiFallback is configured in vite.config.js"
else
  echo -e "${RED}✗${NC} historyApiFallback is missing in vite.config.js"
fi

# Summary
echo -e "\n${YELLOW}Summary:${NC}"
if [ $missing_files -eq 0 ]; then
  echo -e "${GREEN}All files are present.${NC}"
else
  echo -e "${RED}$missing_files files are missing.${NC}"
fi

echo -e "\n${YELLOW}Next Steps:${NC}"
echo "1. Run 'npm install' to ensure all dependencies are installed"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Test navigation to each page:"
echo "   - Sister Types: http://localhost:3890/"
echo "   - Brother Types: http://localhost:3890/brother-types"
echo "   - About: http://localhost:3890/about"
echo "4. If navigation doesn't work, check the troubleshooting section in the implementation guide"
echo -e "\nFor detailed instructions, refer to MBTI_TYPES_IMPLEMENTATION.md"
