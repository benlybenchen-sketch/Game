// Rule 26: proves a route through the map that collects every document needed to solve case 08, on both mid-case routes,
// and that it leaves enough time to read. Visiting a place at stage s opens its documents of stage <= s.
// For each place, the needed documents give intervals [doc stage, stage it is needed at]; one visit inside an interval
// covers it, and the fewest visits is the classic interval stabbing (greedy by right end). Usage: node tools/route08.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
const { DOCS, META, QUESTIONS } = await import("../cases/08/index.js");
const byId = new Map(DOCS.map((d) => [d.id, d]));
// documents a careful player needs at each checkpoint (bible, section 8); a list inside means "any one of these"
const NEED = {
  0: ["so_sam", "ngu_loi_phap", "so_do_duong", "thap_sinh_phan", "bang_lau", "hien_truong_ld"],
  1: ["nghiem_thi_luc", "hien_truong_dp", "long_chuot", "mai_dan_phong", "so_hoa_hau"],
  2: ["so_muon_sach", "so_dau_tang_kinh", "thu_lang_phung_an"],
  3: { A: ["so_khay", "so_hac"], B: ["vo_tinh_hu", "bia_tran", "so_khay"] },
  4: ["khai_tieu_tung", "dan_phuong", "so_dan", "sach_can_do", "can_dan", "so_canh_dem", "lo_thong_khi", "so_khay"],
  5: ["tu_thuoc", "so_canh_gioi_moi", "so_canh_gioi_cu", "niem_moi", "giay_to_su", "so_dau_to_su"],
  6: ["so_viec_vat", "so_ra_vao", "kho_than", "so_mieu_ha_khe", "khai_ba_tao", "ho_so_dat", "so_hac"],
  7: [],
};
let bad = 0;
for (const route of ["A", "B"]) {
  const iv = {};   // place -> [[from, to]]
  for (const [s, list] of Object.entries(NEED)) for (const id of Array.isArray(list) ? list : list[route]) {
    const d = byId.get(id); if (!d) { console.log("BAD unknown doc", id); bad++; continue; }
    if (d.stage > +s) { console.log(`BAD ${id} (stage ${d.stage}) needed at ${s}`); bad++; }
    if (d.branch && d.branch !== route) { console.log(`BAD ${id} is route ${d.branch}`); bad++; }
    if (!d.place || d.place === META.map.home) continue;
    (iv[d.place] ||= []).push([d.stage, +s]);
  }
  let minutes = 0, visits = [];
  for (const [pl, list] of Object.entries(iv)) {
    list.sort((a, b) => a[1] - b[1]); let last = -1;
    for (const [from, to] of list) if (last < from || last > to) { last = to; visits.push([to, pl]); minutes += META.map.places.find((p) => p.id === pl).cost ?? META.map.cost; }
  }
  visits.sort((a, b) => a[0] - b[0]);
  const left = META.timeLimit - minutes;
  console.log(`route ${route}: ${visits.length} visits, ${minutes} minutes; ${left} minutes left for reading and puzzles`);
  console.log("  " + visits.map(([s, p]) => `TĐ${s + 1}:${p}`).join(" "));
  if (left < META.timeLimit / 2) { console.log("BAD less than half the time left"); bad++; }
}
console.log(bad ? `${bad} problem(s)` : "all routes ok");
