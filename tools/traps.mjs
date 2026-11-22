// Trap answers that must be rejected (one wrong part, everything else right). Usage: node tools/traps.mjs
import { decode, checkPart } from "/home/user/game/js/answer.js";
const T = {
  "02": [["q1","poison","Uốn ván"],["q1","off","16"],["q1","t","22:30"],["q2","who","Phan Văn Hòa (Tư Hòa)",true],["q2","t2","22:15"],["q3","altar","Đoàn Văn Lợi"],["q3","where","Sau bếp, như lời khai đầu"],["q4","rel","Con nuôi"],["q5","date","11/9"],["q5","buyer","Trần Văn Lửa (Bảy Lửa)"],["q5","be","Rạp Hưng Ca, thị xã, cùng gánh"]],
  "03": [["q4","who","Ông Bảy gác dan, người giữ chìa khóa nhà"],["q6","proof","kn_khi"],["q6","proof","kn_nhan"],["q6","body","Hà Ngọc Lan"],["q5","book","Cuốn chú giải của Khiêm, bản 3.254 câu"]],
  "04": [["q1","gap","140"],["q2","phone","7/9"],["q3","ring","30"],["q3","dish","Cháo tôm"],["q3","dog","Không ai: con Mực ăn phải bả chuột"],["q4","where","Cần Thơ"],["q5","seo","Ngược bên"],["q6","nangluc","Hạn chế năng lực hành vi dân sự"],["q6","loikhai","Một phần đúng, một phần hoang tưởng"],["q6","cause","Đột quỵ"]],
  "05": [["q5","o","Trên tàu đêm Lào Cai đi Hà Nội"],["q5","ngu","Chỉ cháu Ngân"],["q6","than2","0"],["q6","loi","Qua cửa sổ gian giữa"],["q3","loi","chăm"],["q4","cham","Mẹ ơi lấy thuốc cho con"]],
  "06": [["q1","who","Không khớp ai trong hồ sơ"],["q1","tru","Trụ năm"],["q2","gia","4000"],["q2","hoan","40"],["q3","ngay","8"],["q3","thang","11"],["q4","nghe","Người chèo đò"],["q4","chet","ng_bung"],["q5","vai","Vị hôn thê"],["q6","sinh","6/4/1917"],["q6","chu","tân sở"],["q6","an","Con trai Triệu Hoài Nghĩa"]],
};
let bad = 0;
for (const [id, list] of Object.entries(T)) {
  const C = await import(`/home/user/game/cases/${id}/index.js`); const S = decode(C.SECRET, C.SECRET_KEY);
  for (const [qid, pid, v, shouldPass] of list) {
    const q = C.QUESTIONS.find((x) => x.id === qid), p = q.parts.find((x) => x.id === pid);
    const val = p.type === "line" ? v : v;
    const ok = checkPart(p, S[qid][pid], val);
    const want = !!shouldPass;
    if (ok !== want) { bad++; console.log(`  ! ${id} ${qid}.${pid} = "${v}" ${ok ? "ACCEPTED (should be rejected)" : "rejected (should pass)"}`); }
  }
  console.log(`== ${id}: ${list.length} traps checked`);
}
console.log(bad ? `${bad} problems` : "all traps behave");
