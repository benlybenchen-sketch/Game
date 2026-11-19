# Ảnh cho Hồ sơ 03 "Cầu cơ"

## Cách làm để ảnh không lệch nhau
1. **Tạo ảnh mẫu trước (bước 0).** Tạo ảnh `00_mau_nhan_vat`. Ảnh này không đưa vào game, chỉ dùng làm mẫu.
2. Ở mọi ảnh có nhân vật, bấm **đính kèm ảnh** trong AI Studio và gắn ảnh mẫu vào. Prompt đã có câu *"Match the faces, hair and clothes of the attached reference sheet exactly"*.
3. **Không sửa các đoạn viết HOA** ([DUNG], [LAN], [BA DUNG 2004], [STYLE 1971]…). Chúng được chép y nguyên vào mọi prompt để AI giữ đúng mặt, tóc, áo.
4. Tạo hết ảnh trong **cùng một cuộc trò chuyện** trên AI Studio. Ảnh nào lệch thì bảo AI: *"Same image but fix: …"*.
5. Đổi tên file đúng như ghi ở từng mục, rồi gửi lên chat hoặc để vào thư mục Drive công khai như lần trước.

Thiếu ảnh nào thì game tự vẽ hình thay thế, nên có thể làm dần.

---

## Bảng nhân vật (đã chép sẵn vào các prompt)

| Nhân vật | Mặt và tóc | Trang phục | Chi tiết bắt buộc |
|---|---|---|---|
| **Dung** (1971, 19 tuổi) | Mặt trái xoan, tóc đen thẳng dài tới eo, rẽ ngôi giữa | Áo dài lụa **xanh lục nhạt** | **Sẹo nhỏ hình dấu phẩy dưới cằm**; cầm bút bằng **tay trái** |
| **Lan** (1971, 19 tuổi) | **Giống Dung tới mức gần như sinh đôi**: cùng chiều cao, tóc đen thẳng dài tới eo, rẽ ngôi giữa | Áo bà ba **hoa tím nhạt**, quần đen, **guốc gỗ** | Nốt ruồi nhỏ **trên đuôi lông mày phải**; không có sẹo cằm |
| **Bà Dung 2004** (thật ra là Lan, 52 tuổi) | Gương mặt của Lan già đi, tóc búi thấp, nhiều sợi bạc | Áo len đan màu xám tro, quần đen, **găng tay len đen** | Nốt ruồi trên đuôi lông mày phải; luôn cười hiền |
| **Tùng** | Nam 20 tuổi, tóc rẽ ngôi một bên, **kính gọng đen** | Sơ mi trắng tay dài | |
| **Yến** | Nữ 19 tuổi, tóc ngang vai, **kẹp tóc hoa sứ trắng** | Áo dài trắng | |
| **Quốc** | Nam 21 tuổi người Hoa, mặt tròn, tóc húi cua | Áo thun polo màu nâu | |
| **Khiêm** | Nam 20 tuổi gầy, tóc dài chấm gáy | Sơ mi caro | Ôm cuốn sách bìa đỏ |
| **Nghi** | Nữ 18 tuổi, mặt bầu bĩnh, **tóc tết hai bím** | Áo dài trắng nữ sinh | **Dây chuyền thánh giá bạc** |

---

### 00. `00_mau_nhan_vat.jpg`, tỉ lệ 16:9 (ảnh mẫu, không đưa vào game)
```
Character reference sheet, plain dark grey background, full body front view, Saigon 1971, two young Vietnamese women standing side by side who look almost like twins: same height, same oval face, same waist-long straight black hair parted in the middle.
[DUNG] on the left: pale green silk ao dai, a small comma-shaped scar under her chin, holding a pen in her LEFT hand.
[LAN] on the right: light purple floral ao ba ba blouse, black trousers, wooden clogs, a small mole just above the end of her right eyebrow, no scar.
Third figure on the far right: [BA DUNG 2004] the same woman as LAN aged 52, low hair bun with grey streaks, ash grey knitted cardigan, black trousers, black knitted wool gloves, the same mole above the end of her right eyebrow, gentle smile.
Even studio light, sharp, realistic. No text, no letters, no numbers, no watermark.
```

---

## Đoạn phong cách dùng chung
- **[STYLE 1971]** = `Black and white 35mm photograph from Saigon 1971, Kodak Tri-X grain, slightly faded, soft vignetting, scratches and dust on the print.`
- **[STYLE POLICE]** = `1971 police evidence photograph, black and white, harsh flash, flat and clinical, deep shadows, grain.`
- **[STYLE 2004]** = `Cinematic horror film still shot on 35mm, 2004 Saigon, candlelight and dim tungsten light, deep shadows, muted green and amber palette, film grain.`
- **[VILLA]** = `a decaying two-storey French colonial villa in Saigon with yellow peeling plaster, green wooden shutters, a second-floor balcony with a carved wooden railing, a spiral wooden staircase inside, a rooftop attic, a lotus pond in the back garden.`
- Kết thúc mọi prompt bằng: `No text, no letters, no numbers, no watermark.`

---

## A. Năm 1971

### 1. `cover.jpg`, tỉ lệ 16:9
```
Match the faces, hair and clothes of the attached reference sheet exactly. [STYLE 2004] Interior of [VILLA]: the second-floor drawing room at night. A round wooden table with a hand-painted wooden spirit board (two arcs of Latin letters, a row of digits, the words in the corners are unreadable). An upturned white porcelain tea cup sits on the board as the planchette. Two white candles. A lotus tea pot and two small cups, one full and cold with an oily film on top. On the far side of the table [BA DUNG 2004] sits very straight, black wool gloves resting on the table, smiling kindly at the viewer, the candlelight from below. Behind her on the wall a large old framed portrait with cracked glass; in the glass of the portrait, a faint reflection of a young woman with waist-long wet black hair who is not in the room. No text, no letters, no numbers, no watermark.
```

### 2. `anh_nhom.jpg`, tỉ lệ 3:2
```
Match the faces, hair and clothes of the attached reference sheet exactly. [STYLE 1971] Group photo of seven university students in front of the iron gate of [VILLA], September 1971. From left: Tung (20, black-rimmed glasses, side-parted hair, white long-sleeve shirt), Quoc (21, Chinese-Vietnamese, round face, crew cut, polo shirt), Khiem (20, thin, collar-length hair, checked shirt, holding a red book), Yen (19, shoulder-length hair, white frangipani hair clip, white ao dai), Nghi (18, two braids, white school ao dai, small silver cross necklace). On the right, [DUNG] bends over a guest book lying on the gate pillar, writing with a pen in her LEFT hand, a tiny scar under her chin; right next to her, touching her shoulder, [LAN] in a floral ao ba ba, looking not at the camera but at Dung. The right corner of the print is burnt, the burn eating half of Lan's face. No text, no letters, no numbers, no watermark.
```

### 3. `ban_co.jpg`, tỉ lệ 16:10
```
Top-down photograph of an old hand-painted wooden spirit board on a dark wooden table: two arcs of capital Latin letters A to M and N to Z, a straight row of digits 1 2 3 4 5 6 7 8 9 0, the words "CÓ" in the top left corner and "KHÔNG" in the top right corner, "TẠM BIỆT" at the top center, all painted by hand in faded cream paint. An upturned white porcelain tea cup in the lower center. Two white candles, wax drips, a scattering of joss stick ash. Warm candlelight, deep shadows, film grain.
```
*(Ảnh này là ngoại lệ, cần có chữ trên bàn cơ. Nếu AI viết sai chữ thì bỏ qua: game đã tự vẽ chữ lên bàn cơ tương tác.)*

### 4. `lan_can.jpg`, tỉ lệ 4:3
```
[STYLE POLICE] Morning after, 3 October 1971: a second-floor balcony of [VILLA] seen from the brick courtyard below. The carved wooden railing is broken in the middle; one broken end hangs down. Close detail: the lower part of the break is suspiciously flat and smooth like a saw cut, the upper part is splintered. On the courtyard bricks below, a dark wet stain and a single man's leather shoe. A policeman's hand holding a ruler next to the break. No text, no letters, no numbers, no watermark.
```

### 5. `di_anh_diep.jpg`, tỉ lệ 3:4
```
Old studio portrait from 1950s Saigon, black and white, hand-tinted, in a heavy dark gilded frame hanging on a yellowed wall: an elderly Vietnamese woman (57) with a tight hair bun, black velvet ao dai, jade bracelet, a long pearl necklace, hands folded, stern eyes. The glass of the frame has one diagonal crack. In the reflection on the glass, very faint, the silhouette of a young woman with long hair standing behind the viewer. Candlelight. No text, no letters, no numbers, no watermark.
```

---

## B. Năm 2004 và cảnh doạ

### 6. `bia_mo.jpg`, tỉ lệ 4:3
```
[STYLE 2004] Dusk in an old crowded Vietnamese cemetery, a weathered grey stone grave with an arched headstone, a faded black-and-white enamel portrait on the headstone of [LAN] aged 19 (waist-long hair, floral blouse), the engraving is illegible. One fresh white lotus flower lies on the grave. No incense, no candles. Long shadows, crows on the neighbouring graves. No text, no letters, no numbers, no watermark.
```

### 7. `yen_scare.jpg`, tỉ lệ 16:9 (cảnh doạ đêm 3)
```
Extreme close-up horror image, seen from just above the surface of a dark lotus pond at night: the drowned face of a 19-year-old Vietnamese girl floating just under the murky green water, eyes open and milky white, skin bloated and grey-green, lips blue, shoulder-length hair spread like weeds, a white frangipani hair clip still in her hair, rotten lotus leaves and mud on her cheeks, a thin stream of bubbles rising from her open mouth. Lit only by a weak torch beam. Wet, disgusting, intimate. No text, no letters, no numbers, no watermark.
```

### 8. `guong_scare.jpg`, tỉ lệ 16:9 (cảnh doạ chính, đêm 6)
```
Horror image: an old mirror in a dark wooden frame fills the whole picture. In the mirror, very close, a young woman's face that has been burnt: blackened cracked skin, patches of raw red flesh, lips burnt away showing the teeth, but the eyes are intact, wet and staring straight at the viewer. Her waist-long black hair is soaking wet, hanging over the burnt face in strands, dripping. A small comma-shaped scar is still visible under the burnt chin. Behind her in the mirror, the candlelit drawing room. The mirror glass is fogged by breath from the inside. No text, no letters, no numbers, no watermark.
```

### 9. `tay_scare.jpg`, tỉ lệ 16:9 (cảnh doạ bàn cơ đêm 7)
```
Extreme close-up from the player's point of view: the player's own right index finger resting on an upturned white porcelain cup on a wooden spirit board. A charred black hand with cracked burnt skin and long wet strands of black hair stuck to it is slowly laid on top of the player's hand from the left, its LEFT hand, the burnt fingers wrapping around. Candle flame bent sideways. A cold full cup of lotus tea with an oily film in the background. No text, no letters, no numbers, no watermark.
```

### 10. `ho_sen.jpg`, tỉ lệ 4:3
```
[STYLE 2004] Early morning, the lotus pond behind [VILLA] half drained by a pump: black stinking mud, rotten blackened lotus stems collapsed, dead fish and fish bones, a rusty iron tin box half buried in the mud, police tape on bamboo poles, a pair of grey knitted slippers on the stone edge. Grey overcast light. No text, no letters, no numbers, no watermark.
```

### 11. `ket_scare.jpg`, tỉ lệ 16:9 (cảnh doạ kết)
```
Match the faces, hair and clothes of the attached reference sheet exactly. Horror image, under the surface of a muddy lotus pond at dawn: [BA DUNG 2004] drowned face up just under the water, grey hair bun come loose and floating, ash grey cardigan, eyes open, mouth open full of mud, both arms hugging a rusty iron tin box to her chest, her right index finger stretched straight and pressed on the lid as if on a spirit board planchette. Behind her in the murky water, the pale blurred figure of a young woman with long hair watching. Green-brown water, floating rotten lotus leaves. No text, no letters, no numbers, no watermark.
```

### 12. `bia_moi.jpg`, tỉ lệ 4:3
```
[STYLE 2004] Daylight, an old Vietnamese cemetery: the same arched grey headstone, freshly re-ground and re-engraved, stone dust still on the ground; the enamel portrait on it replaced by a portrait of [DUNG] aged 19 (pale green ao dai, scar under the chin). Next to it, a freshly dug mound of red earth with no headstone, a single incense stick standing straight, burnt down to the base, its whole column of ash still standing unbroken. No text, no letters, no numbers, no watermark.
```

---

## Danh sách file

| Số | Tên file | Dùng ở |
|---|---|---|
| 0 | `00_mau_nhan_vat.jpg` | chỉ làm mẫu |
| 1 | `cover.jpg` | bìa hồ sơ, danh sách hồ sơ |
| 2 | `anh_nhom.jpg` | đêm 1, ảnh nhóm |
| 3 | `ban_co.jpg` | đêm 1, bàn cơ |
| 4 | `lan_can.jpg` | đêm 2, biên bản vụ Tùng |
| 5 | `di_anh_diep.jpg` | đêm 6, di ảnh |
| 6 | `bia_mo.jpg` | đêm 7, mộ “Hà Ngọc Lan” |
| 7 | `yen_scare.jpg` | cảnh doạ khi mở đêm 3 |
| 8 | `guong_scare.jpg` | cảnh doạ chính khi dựng gương đêm 6 |
| 9 | `tay_scare.jpg` | cảnh doạ cuối buổi cơ đêm 7 |
| 10 | `ho_sen.jpg` | kết thúc, báo |
| 11 | `ket_scare.jpg` | cảnh doạ kết |
| 12 | `bia_moi.jpg` | kết thúc, bia khắc lại |
