#!/bin/bash
# @file scripts/check-license.sh
# @description Check that all source files have MIT license header
# @author Jenning Schaefer
# @license MIT

set -e

MISSING_LICENSE=()
LICENSE_PATTERN="@license MIT"

# Check TypeScript files
for file in $(find . -type f \( -name "*.ts" -o -name "*.vue" \) \
  -not -path "./node_modules/*" \
  -not -path "./.nuxt/*" \
  -not -path "./.output/*" \
  -not -path "./dist/*" \
  -not -name "*.d.ts" \
  -not -name "*.spec.ts"); do
  
  # Check first 20 lines for license
  if ! head -20 "$file" | grep -q "$LICENSE_PATTERN"; then
    MISSING_LICENSE+=("$file")
  fi
done

if [ ${#MISSING_LICENSE[@]} -gt 0 ]; then
  echo "❌ Files missing MIT license header:"
  printf '  %s\n' "${MISSING_LICENSE[@]}"
  echo ""
  echo "Expected pattern in first 20 lines: $LICENSE_PATTERN"
  echo ""
  echo "Example header for .ts files:"
  echo '/**'
  echo ' * @file filename.ts'
  echo ' * @description Brief description'
  echo ' * @author Jenning Schaefer'
  echo ' * @license MIT'
  echo ' */'
  echo ""
  echo "Example header for .vue files:"
  echo '<!--'
  echo '  @file components/Example.vue'
  echo '  @description Brief description'
  echo '  @author Jenning Schaefer'
  echo '  @license MIT'
  echo '-->'
  exit 1
else
  echo "✅ All source files have MIT license header"
  exit 0
fi
