// Trap answers that must be rejected (one wrong part, everything else right). Usage: node tools/traps.mjs
import { decode, checkPart } from "/home/user/game/js/answer.js";
const T = {
  "02": [["q1","poison","Uốn ván"],["q1","off","16"],["q1","t","22:30"],["q2","who","Phan Văn Hòa (Tư Hòa)",true],["q2","t2","22:15"],["q3","altar","Đoàn Văn Lợi"],["q3","where","Sau bếp, như lời khai đầu"],["q4","rel","Con nuôi"],["q5","date","11/9"],["q5","buyer","Trần Văn Lửa (Bảy Lửa)"],["q5","be","Rạp Hưng Ca, thị xã, cùng gánh"]],
  "03": [["q4","who","Ông Bảy gác dan, người giữ chìa khóa nhà"],["q6","proof","kn_khi"],["q6","proof","kn_nhan"],["q6","body","Hà Ngọc Lan"],["q5","book","Cuốn chú giải của Khiêm, bản 3.254 câu"]],
  "04": [["q1","gap","140"],["q2","phone","7/9"],["q3","ring","30"],["q3","dish","Cháo tôm"],["q3","dog","Không ai: con Mực ăn phải bả chuột"],["q4","where","Cần Thơ"],["q5","seo","Ngược bên với bà Hoa năm 1990"],["q5","kind","Em sinh đôi cùng trứng, giống y hệt cùng bên"],["q6","nangluc","Hạn chế năng lực hành vi dân sự"],["q6","loikhai","Một phần đúng, một phần hoang tưởng"],["q6","cause","Đột quỵ do cao huyết áp"],["q6","xe","Toà xử xong đưa con bé về Sài Gòn chữa"],["q6","xe","Toà xử xong bán nhà vườn rồi về Đà Nẵng"]],
  "05": [["q5","o","Trên tàu đêm Lào Cai đi Hà Nội"],["q5","ngu","Chỉ cháu Ngân"],["q6","than2","0"],["q6","loi","Qua cửa sổ gian giữa, gỡ một song gỗ"],["q5","am","25/1"],["q3","loi","chăm"],["q4","cham","Mẹ ơi lấy thuốc cho con"],["q4","mask","Con sợ lắm bố ơi"],["q4","mask","AYCLAMMBOBOOENINOO"],["q4","mask","Bố bắt con ho thay mẹ con không dám cãi"],["q4","mask","Mẹ vẫn ho trong buồng con nghe thấy mỗi đêm"],["q6","ke","Đưa bố lên trạm cho mẹ ở nhà"]],
  "06": [["q1","who","Không khớp ai trong hồ sơ"],["q1","tru","Trụ năm"],["q2","gia","4000"],["q2","hoan","40"],["q3","ngay","8"],["q3","thang","11"],["q4","nghe","Người chèo đò"],["q4","nghe","Phu kéo thuyền"],["q4","chet","ng_bung"],["q5","vai","Vị hôn thê"],["q6","sinh","6/4/1917"],["q6","chu","tân sở"],["q6","an","Con trai Triệu Hoài Nghĩa"]],
  "07": [["q6","thieu","0.5"],["q6","thieu","1.5"],["q1","reg","Bản mực nhạt"],["q1","lamps","1"],["q1","lie","nm_3"],["q2","ratio","Một phần ba mươi hai lương"],["q2","nakht","Không thiếu chút nào"],["q2","khar","29"],["q3","w12","Thợ vẽ Hay, viết từ trước"],["q3","sign","ổ bánh"],["q3","w3","Cùng người viết thư 1 và 2"],["q4","dem","Đêm 13"],["q4","ran","Rắn lục sừng giả"],["q4","dat","Tự bò vào hộp bút"],["q4","gio","1"],["q5","tuan","5"],["q5","an","Ấn kho lúa bến sông"],["q5","an","Ấn của Lăng, bên Phải giữ"],["q5","mang","sc_13"],["q5","sen","Trong lều trên đèo"],["q6","hin","40"],["q6","ai","Nakhtmin"],["q6","ai","Nebetiunet"],["q6","ai","Sennefer"]],
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
