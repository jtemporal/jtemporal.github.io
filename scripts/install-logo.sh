#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p images/ac-pocket-field-guide
cat .tmp-logo-b64/part* | tr -d '\n' | base64 -d > images/ac-pocket-field-guide/logo.png
python3 - <<'PY'
from pathlib import Path
p=Path('images/ac-pocket-field-guide/logo.png')
b=p.read_bytes()
assert len(b)==654189, len(b)
assert b[:8]==b'\x89PNG\r\n\x1a\n'
assert b'\xef\xbf\xbd' not in b[:500]
print('OK', len(b))
PY
rm -rf .tmp-logo-b64 scripts/install-logo.sh
git add images/ac-pocket-field-guide/logo.png
git add -u .tmp-logo-b64 scripts/install-logo.sh 2>/dev/null || true
git commit -m "Fix Field Guide site logo.png (exact 654189-byte locked icon)"
git push
