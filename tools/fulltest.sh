#!/usr/bin/env bash
# Full gameplay test of one or more cases (CLAUDE.md section 2 + rules 23-25 + countdown + endings).
#   bash tools/fulltest.sh 04 05 06 07
# Needs `python3 -m http.server 8063` running in the repo. Prints one line per check and a summary.
cd "$(dirname "$0")/.." || exit 1
OUT="${TMPDIR:-/tmp}/fulltest"; mkdir -p "$OUT"
node tools/stamp.mjs >/dev/null
fail=0
row() { printf "%-4s %-10s %s\n" "$1" "$2" "$3"; }
traps=$(node tools/traps.mjs 2>&1 | tail -1)
for c in "$@"; do
  a=$(node tools/audit.mjs "$c" 2>&1 | tail -n +2); [ "$a" = "  ok" ] && row "$c" audit ok || { row "$c" audit "FAIL"; echo "$a"; fail=1; }
  if [ -f "tools/solve$c.mjs" ]; then s=$(node "tools/solve$c.mjs" 2>&1 | tail -1); [[ "$s" == all* ]] && row "$c" solve ok || { row "$c" solve "FAIL: $s"; fail=1; }; else row "$c" solve "(không có tools/solve$c.mjs)"; fi
  CASE=$c timeout 900 node tools/smoke.mjs "$OUT/smoke$c" > "$OUT/smoke$c.log" 2>&1; n=$(grep -c SOLVED "$OUT/smoke$c.log"); e=$(tail -1 "$OUT/smoke$c.log")
  [ "$e" = "no errors" ] && row "$c" smoke "ok ($n trọng điểm, máy tính + điện thoại)" || { row "$c" smoke "FAIL: $e"; fail=1; }
  CASE=$c timeout 900 node tools/docs_ui.cjs > "$OUT/docs$c.log" 2>&1; t=$(grep -c "docs opened" "$OUT/docs$c.log"); g=$(grep -c "no problems" "$OUT/docs$c.log")
  [ "$t" -gt 0 ] && [ "$t" = "$g" ] && row "$c" docs "ok ($g lượt mở)" || { row "$c" docs "FAIL"; grep -v "no problems" "$OUT/docs$c.log" | head; fail=1; }
  CASE=$c timeout 300 node tools/timer_test.cjs > "$OUT/timer$c.log" 2>&1
  grep -q "(WRONG)\|MISSING\|errors:" "$OUT/timer$c.log" && { row "$c" timer FAIL; cat "$OUT/timer$c.log"; fail=1; } || row "$c" timer ok
  CASE=$c timeout 900 node tools/flow_test.cjs > "$OUT/flow$c.log" 2>&1 && row "$c" flow "ok ($(grep -c '^ok' "$OUT/flow$c.log") kiểm)" || { row "$c" flow FAIL; grep "^BAD" "$OUT/flow$c.log"; fail=1; }
done
[[ "$traps" == "all traps behave" ]] && row all traps ok || { row all traps "FAIL: $traps"; fail=1; }
[ $fail = 0 ] && echo "TẤT CẢ ĐẠT" || echo "CÓ LỖI"
exit $fail
