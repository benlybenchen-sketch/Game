# Ảnh cho Hồ sơ 05 "Người giữ vợ" · bản chi tiết

## Cách dùng
1. Tạo **theo đúng thứ tự** từ trên xuống, trong **một cuộc trò chuyện AI Studio duy nhất** (để AI nhớ nhân vật).
2. Mỗi ô có **một prompt duy nhất**: chép nguyên khối (từ dòng đầu tới dòng cuối của khung), dán vào là xong. Tỉ lệ khung hình đã ghi trong prompt; nếu AI Studio có ô chọn tỉ lệ thì chọn y như vậy.
3. **Đính kèm** đúng các ảnh ghi trong ô trước khi gửi. Prompt đã tả lại nhân vật đầy đủ, nên dù AI "quên" ảnh đính kèm thì vẫn ra đúng người.
4. Đối chiếu ảnh với mục **Kiểm tra**. Sai điểm nào thì gõ câu sửa ở mục **Nếu sai** (cùng cuộc trò chuyện, đính kèm lại ảnh vừa tạo).
5. Đổi tên file đúng tên ở đầu ô rồi gửi lên chat.

> **Mình tự làm bằng code, bạn không cần tạo:** sơ đồ nhà, giấy xin nghỉ và bài văn, trang nhật ký xé, lịch bloc, tờ rơi khí than, hoá đơn than, bệnh án, danh sách lao.

### Luật chung (đã viết sẵn trong từng prompt)
- **Thời đại:** miền núi phía Bắc Việt Nam, tháng 12/1991. Không có điện thoại, xe máy đời mới, nhựa màu sặc sỡ, đèn LED, biển hiệu, chữ.
- **Chất ảnh:** ảnh phim màu đầu thập niên 1990 (Konica, Fuji), hạt phim, màu hơi ngả, không HDR, không kiểu ảnh quảng cáo.
- **Không chữ:** mọi prompt đều cấm chữ, số, hình mờ. AI hay viết sai tiếng Việt.
- **Bên trái, bên phải:** "tay trái của cô ấy" là tay trái của nhân vật. Ảnh chụp sau lưng thì tay trái nhân vật nằm **bên trái người xem**.

### Dấu nhận dạng (không được sai, vì người chơi dùng để giải đố)
| Ai | Dấu |
|---|---|
| **Bà Hằng** (40 tuổi) | Mặt tròn đầy, tóc ngang vai buộc thấp. **Nhẫn cưới vàng trơn ở ngón áp út tay trái.** Áo len đỏ đô vặn thừng, khăn len màu kem. |
| **Ngân** (15 tuổi) | Gầy, cằm nhọn, da rất tái, tóc dài buộc thấp. **Cổ tay trái, mặt trong: một vết sẹo mảnh nằm ngang, che một phần bằng dây chun buộc tóc màu đen.** Không đeo nhẫn hay trang sức. |
| **Ông Khải** (47 tuổi) | Rất gầy, má hóp, râu lún phún bạc, mắt đỏ, đốt tay nứt nẻ ố nâu (hoá chất ảnh). Áo bông kaki bạc màu. |
| **Áo của mẹ** | Áo len **đỏ đô** (burgundy), đan tay, vặn thừng. Khăn len **màu kem**. Hai món này phải giống nhau ở ảnh 1988 và ảnh "Vợ tôi, Tết 1991". |
| **Cửa buồng** | Cửa gỗ cũ, **dán kín băng keo nâu và giấy báo vàng quanh mọi mép**, khe dưới cửa nhét chăn hoa. |

---

## Bước 0: ảnh mẫu nhân vật (không đưa vào game)

### 00a. `00_mau_hang.jpg`
**Đính kèm:** Không.
**Kiểm tra:** ba dáng của cùng một người; mặt tròn, hiền, mệt; **nhẫn vàng ở ngón áp út tay trái thấy rõ** ở dáng nửa người; áo len đỏ đô vặn thừng, khăn kem.
**Nếu sai:** *"Same sheet, but the plain gold wedding ring must be clearly visible on the ring finger of her LEFT hand in the half-body view, hand raised near her chest."*
```
Aspect ratio 16:9. Character reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even daylight from the front, no dramatic shadows. The SAME woman shown three times side by side, equal size: (1) front view head and shoulders, (2) three-quarter view head and shoulders, (3) front view from the waist up with her LEFT hand raised to her chest. She is a 40-year-old Vietnamese literature teacher from northern Vietnam, early 1990s: round, full face with soft cheeks; kind, tired dark eyes with faint shadows underneath; slightly pale lips; straight black shoulder-length hair tied low at the nape with a plain black band; no makeup, no earrings. She wears a hand-knitted burgundy (deep dark red) wool sweater with vertical cable-knit braids, and a cream-coloured knitted wool scarf loosely around her neck. A plain thin gold wedding band on the ring finger of her LEFT hand, clearly visible in view (3). Gentle, slightly breathless expression of someone with a weak heart. Photographic realism, natural skin texture. No text, no letters, no numbers, no labels, no watermark.
```

### 00b. `00_mau_ngan.jpg`
**Đính kèm:** `00_mau_hang.jpg`.
**Kiểm tra:** cô bé 15 tuổi có đôi mắt giống mẹ nhưng gầy, cằm nhọn; đồng phục học sinh miền Bắc đầu 90 (áo sơ mi trắng, quần xanh than, khăn quàng đỏ, áo len xám cũ khoác ngoài); **cổ tay trái có dây chun đen và vết sẹo mảnh** thấy rõ ở dáng toàn thân (tay giơ ra trước); không trang sức.
**Nếu sai:** *"Same sheet, but in the full-body view she holds her LEFT forearm forward, inside of the wrist toward camera: a thin pale horizontal healed scar, half covered by a black hair elastic. No ring, no jewellery."*
```
Aspect ratio 16:9. Character reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even daylight, no dramatic shadows. The SAME 15-year-old Vietnamese girl shown three times side by side, equal size: (1) front view head and shoulders, (2) three-quarter view head and shoulders, (3) full body standing, holding her LEFT forearm slightly forward with the inside of the wrist turned toward the camera. She is the daughter of the woman in the attached reference: the same dark eyes, but a much thinner face, narrow pointed chin, very pale skin, chapped lips from the cold, long straight black hair in a low ponytail. She wears an early-1990s northern Vietnamese secondary school uniform: white long-sleeved cotton shirt, dark navy trousers, a red Young Pioneer scarf knotted at the neck, a worn, pilled grey cardigan on top, black plastic sandals with socks. On the inside of her LEFT wrist: a thin pale horizontal healed scar, partly covered by a black fabric hair elastic. No ring, no jewellery. Polite, sweet smile, but the eyes do not smile. Natural skin texture. No text, no letters, no numbers, no labels, no watermark.
```

### 00c. `00_mau_khai.jpg`
**Đính kèm:** Không.
**Kiểm tra:** đàn ông 47 tuổi rất gầy, má hóp, râu lún phún bạc, mắt đỏ, áo bông kaki bạc màu; hiền và kiệt sức, không dữ.
**Nếu sai:** *"Same sheet, but make him look gentle and exhausted, not threatening: soft apologetic eyes, slightly hunched shoulders."*
```
Aspect ratio 16:9. Character reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even daylight. The SAME man shown three times side by side, equal size: (1) front view head and shoulders, (2) three-quarter view head and shoulders, (3) full body standing, slightly hunched. He is a 47-year-old Vietnamese small-town photographer in the northern mountains, early 1990s: very thin, hollow cheeks, prominent cheekbones, grey stubble, short greying black hair, reddened tired eyes of a heavy drinker, cracked knuckles stained brown by darkroom chemicals. He wears a faded khaki cotton padded winter jacket over a grey knitted wool vest and a collared shirt, old dark trousers, rubber sandals over grey socks. Gentle, exhausted, apologetic expression, not threatening. Natural skin texture. No text, no letters, no numbers, no labels, no watermark.
```

---

## A. Thị trấn, ngôi nhà và bìa

### 1. `cover.jpg` (bản ghê hơn: chọn **một** trong ba phương án)
**Đính kèm:** `00_mau_ngan.jpg` (phương án C đính kèm thêm `00_mau_hang.jpg`).
**Vì sao bản cũ không ghê:** ánh sáng dịu, Ngân hiền, không có gì "sai". Ba bản dưới đều có: **ánh đỏ lò than hắt từ dưới lên mặt**, **ánh mắt nhìn thẳng người xem**, và **một thứ không được phép có ở đó**.

#### Phương án A · "Bón cháo cho mẹ" (mình khuyên chọn)
**Bố cục:** khung dọc, góc máy **thấp sát sàn**. Cánh cửa dán kín chiếm nửa trên. Ngân **quỳ dưới sàn, tiền cảnh**, đang đưa một thìa cháo vào **khe dưới cửa**. Trong khe tối đen, **một lọn tóc dài đen** thò ra. Ngân **ngẩng mặt nhìn thẳng ống kính**, cười.
**Kiểm tra:** cửa dán băng keo nâu và giấy báo quanh mép; khe dưới cửa **tối đen, không có ánh lò** (chăn đã kéo ra để đưa thìa); **lọn tóc đen** từ trong khe; mặt Ngân **sáng từ dưới lên** bởi lò than đặt cạnh cô; nụ cười ngoan nhưng mắt trống rỗng.
**Nếu sai:**
- *"Same image, but a long strand of black hair must slip out from the dark gap under the door, touching the spoon."*
- *"Same image, but the girl must look straight into the camera, lit only from below by the red charcoal glow."*
```
Aspect ratio 3:4. Cinematic horror film still on 35mm colour film, northern Vietnam, December 1991, night. Extremely low camera angle, almost at floor level, slightly tilted. The upper half of the frame is an old dark wooden inner door, completely sealed with strips of brown packing tape and yellowed newspaper along every edge (newspaper print blurred, unreadable). The floral quilt that normally blocks the gap under the door has been pulled aside, and the gap is pitch black. In the foreground, kneeling on the cold concrete floor, is the 15-year-old girl from the attached reference (very pale, thin, pointed chin, long black hair in a low ponytail), wearing a burgundy cable-knit wool sweater far too big for her and a cream knitted scarf. She holds a small porcelain bowl of rice porridge in one hand and, with the other, pushes a spoonful of porridge into the black gap under the door, as if feeding someone lying on the other side. From that dark gap, a single long strand of black woman's hair has slipped out and lies across the spoon. The girl is looking up straight into the camera with a sweet, obedient smile; her eyes are empty and unblinking. Her face is lit only from below by the red-orange glow of a clay charcoal brazier on the floor beside her; everything above her eyes falls into deep shadow. Cold blue moonlight touches only the tape on the door. Breath vapour in the cold air, film grain, crushed blacks. No other visible person. No text, no letters, no numbers, no watermark.
```

#### Phương án B · "Ho cho bố nghe"
**Bố cục:** khung dọc. Ngân **trùm khăn len kem của mẹ** kín đầu như mạng che, **ép mặt vào khe cửa**, miệng há như đang ho; **mắt liếc sang nhìn thẳng ống kính**. Phía sau, **xa và mờ**, ông Khải nằm ngủ trên phản, quay lưng.
**Nếu sai:** *"Same image, but her eyes must turn toward the camera while her mouth is pressed to the door crack, as if caught in the act."*
```
Aspect ratio 3:4. Cinematic horror film still on 35mm colour film, northern Vietnam, December 1991, 2 a.m. Close medium shot of an old wooden inner door sealed with brown packing tape and yellowed newspaper (print unreadable). The 15-year-old girl from the attached reference stands pressed against the door, a cream knitted wool scarf draped over her head and around her face like a veil, the burgundy sweater hanging off her thin shoulders. Her lips are pressed to the narrow crack between the door and the frame, her mouth open wide in the middle of a forced, rasping cough, her hand cupped around her mouth to push the sound into the crack. Her eyes have turned sideways and look straight into the camera, wide, caught. A faint red glow from a charcoal brazier lights her from below. In the far background, out of focus, a thin man sleeps on a wooden plank bed with his back turned, under a quilt. Dark, cramped, cold blue moonlight, film grain. No text, no letters, no numbers, no watermark.
```

#### Phương án C · "Cả nhà ngủ cùng mẹ"
**Đính kèm thêm:** `00_mau_hang.jpg`.
**Bố cục:** khung dọc. Ngân **nằm nghiêng trên sàn trước cửa**, đầu gối lên cánh tay, mắt mở nhìn ống kính. Từ **khe dưới cửa**, **một bàn tay người đàn bà gầy, xám, có nhẫn cưới vàng ở ngón áp út tay trái**, thò ra nắm hờ những ngón tay của Ngân.
**Nếu sai:** *"Same image, but the hand reaching from under the door must be a thin grey adult woman's LEFT hand with a plain gold wedding ring, gently holding the girl's fingers."*
```
Aspect ratio 3:4. Cinematic horror film still on 35mm colour film, northern Vietnam, December 1991, night, top-down three-quarter angle. On the cold concrete floor in front of an old wooden door sealed with brown packing tape and yellowed newspaper (print unreadable), the 15-year-old girl from the first attached reference lies curled on her side under a thin floral quilt, her head resting on her arm, wearing the oversized burgundy sweater, eyes wide open and staring straight into the camera, calm and content. Her free hand rests on the floor near the gap under the door. From that gap, a thin, grey, bloodless adult woman's LEFT hand reaches out and gently holds the girl's fingers; on its ring finger, a plain gold wedding band, the same as the woman in the second attached reference. A red-orange charcoal glow seeps from under the door and lights both hands from below. Everything else is cold blue darkness. Tender and unbearable. Film grain. No gore. No text, no letters, no numbers, no watermark.
```

### 2. `cam_duong.jpg`
**Đính kèm:** Không.
**Kiểm tra:** sáng sương muối trắng xoá; nhà gạch một tầng mái fibro xám; đồi trọc có vết mỏ apatit; đường đất; một người đội nón quang gánh, một xe đạp. Không ô tô, không nhà cao tầng, không biển hiệu.
**Nếu sai:** *"Same image, but remove every modern object, car and sign; only low brick houses with grey corrugated fibre-cement roofs."*
```
Aspect ratio 16:9. Realistic documentary landscape photograph on faded early-1990s colour negative film, early morning, December 1991, a small mining town in the mountains of Lào Cai province, northern Vietnam. Heavy hoarfrost: grass, roofs and fences covered in white frost crystals, thick fog filling the valleys. In the middle ground, rows of low single-storey brick houses with grey corrugated fibre-cement roofs, thin smoke rising from a few kitchen chimneys. In the background, bare reddish hills scarred by terraces of an open-pit apatite mine. In the foreground, a muddy dirt road with frozen puddles, one old black bicycle leaning on a post, and a small woman in a conical hat and a padded jacket carrying a bamboo shoulder pole with two baskets, walking away from the camera. Muted cold blue-grey palette, soft fog, film grain, slight light leak at the edge. No cars, no motorbikes, no shop signs, no text, no letters, no numbers, no watermark.
```

### 3. `hieu_anh.jpg`
**Đính kèm:** Không.
**Kiểm tra:** mặt tiền hiệu ảnh nhỏ; **tấm biển gỗ trên cửa hoàn toàn trống** (mình tự viết chữ sau); tủ kính bày ảnh chân dung nhỏ đã phai; cửa gỗ xếp mở hé vào bóng tối; một bóng đèn vàng yếu bên trong; nén hương cắm trong lon ở bậc cửa.
**Nếu sai:** *"Same image, but the wooden sign board above the door must be completely blank: plain painted wood, no letters, no numbers, no symbols."*
```
Aspect ratio 4:3. Realistic street photograph on faded early-1990s colour film, dusk, December 1991, a small northern Vietnamese mountain town. Straight-on view of the front of a tiny family photo studio in an old single-storey brick house with a grey fibre-cement roof. Above the door, a rectangular wooden sign board painted pale green, COMPLETELY BLANK, no lettering at all. To the left of the door a narrow wooden display cabinet with a glass front showing a dozen small faded portrait photographs (faces too small to recognise). The folding wooden shutter door is half open onto darkness; one bare yellow bulb glows weakly deep inside. On the doorstep, a burning incense stick in an old tin can, frost on the concrete step. Lonely, cold, slightly unsettling. Film grain. No people. No text, no letters, no numbers, no watermark.
```

### 4. `gian_giua.jpg`
**Đính kèm:** `00_mau_khai.jpg`.
**Bố cục:** bàn thờ ở **tường sau, giữa khung**; cửa buồng dán kín ở **bên phải**; ông Khải ngồi bàn nước thấp ở **tiền cảnh bên trái**, nhìn sang phải về phía cửa buồng.
**Kiểm tra:** bàn thờ có lư hương và ảnh tổ tiên cũ nhưng **không có ảnh bà Hằng** (có một chỗ trống rõ ràng); khay cháo và đũa đặt **trên sàn trước cửa buồng**, như dọn cho người bên trong; ông Khải rót chè vào **hai** chén.
**Nếu sai:** *"Same image, but put a small wooden tray on the floor right in front of the sealed door, with a bowl of rice porridge, a pair of chopsticks and a cup of tea, as if served to someone inside."*
```
Aspect ratio 16:9. Cinematic still, realistic, 35mm colour film, a winter evening in December 1991 inside a poor brick house in the northern Vietnamese mountains. The central living room. On the back wall, centre: a small wooden ancestral altar shelf with a brass incense burner thick with burning incense sticks, two old black-and-white ancestor photos of elderly people, and an obvious empty space with a clean rectangle on the wall where a third portrait is missing. On the RIGHT side of the frame: an inner wooden door completely sealed with brown packing tape and yellowed newspaper along every edge, a folded floral quilt stuffed under it; on the floor right in front of that door, a small wooden tray with a bowl of rice porridge, a pair of chopsticks and a cup of tea, as if served to someone inside. In the LEFT foreground, at a low wooden table, sits the thin man from the attached reference (hollow cheeks, grey stubble, reddened eyes, faded khaki padded jacket) pouring tea into two small cups, his head turned toward the sealed door with tender patience. A clay charcoal brazier glows at his feet. Thick incense haze, one yellow bulb, cold blue light from a small window. Film grain. No other people. No text, no letters, no numbers, no watermark.
```

### 5. `hai_cha_con.jpg`
**Đính kèm:** `00_mau_khai.jpg`, `00_mau_ngan.jpg`.
**Bố cục:** hai người ngồi ghế băng sát tường; **bố bên trái, Ngân bên phải**; mép phải khung thấy một phần cửa dán băng keo.
**Kiểm tra:** ảnh chụp có đèn flash nghiệp dư (bóng cứng trên tường, hơi đỏ mắt); **tay Ngân nắm chặt cổ tay bố**; bố nhìn con, không nhìn ống kính; Ngân nhìn thẳng ống kính, cười ngoan; Ngân mặc đồng phục và áo len xám.
**Nếu sai:** *"Same photo, but the girl's hand must firmly hold her father's wrist, and the father must look at her, not at the camera."*
```
Aspect ratio 4:3. Realistic amateur snapshot on faded early-1990s colour film taken with a cheap on-camera flash: harsh frontal light, hard black shadow on the wall behind, slight red-eye, December 1991. Inside a poor brick house in the northern Vietnamese mountains, a father and his teenage daughter sit side by side on a wooden bench against a lime-washed wall, with the corner of an incense-hazed ancestral altar behind them. LEFT: the father, the thin man from the first attached reference (hollow cheeks, grey stubble, faded khaki padded jacket), his face turned toward his daughter, worried and obedient. RIGHT: the daughter, the girl from the second attached reference (pale, pointed chin, low ponytail, white school shirt, red scarf, worn grey cardigan), sitting very close to him, her hand firmly gripping his wrist; she looks straight into the camera with a sweet polite smile that does not reach her eyes. At the right edge of the frame, part of a door covered in brown packing tape. Film grain. No text, no letters, no numbers, no date stamp, no watermark.
```

---

## B. Ảnh gia đình (bằng chứng để so sánh)

### 6. `anh_cuoi_1975.jpg`
**Đính kèm:** `00_mau_hang.jpg`, `00_mau_khai.jpg`.
**Kiểm tra:** ảnh cưới đen trắng ở hiệu ảnh năm 1975, viền giấy trắng răng cưa; hai người khoảng 27–28 tuổi, trẻ hơn ảnh mẫu; **tay trái cô dâu đặt lên cẳng tay chú rể, thấy rõ nhẫn ở ngón áp út tay trái**.
**Nếu sai:** *"Same photo, but the bride's LEFT hand rests on the groom's forearm, facing the camera, with the plain wedding ring clearly visible on her ring finger."*
```
Aspect ratio 3:4. Vintage black-and-white studio wedding portrait, northern Vietnam, 1975, printed on slightly yellowed photo paper with a white deckled border, a few fine scratches and a small crease in one corner. A young couple in their late twenties, clearly younger versions of the two people in the attached references, standing stiffly side by side in front of a painted studio backdrop of a lake and a pagoda. The bride: round full face, hair tied back neatly, white áo dài-style blouse with a small paper flower pinned on her chest. The groom: thin, short neat hair, white shirt buttoned to the collar, dark trousers. The bride's LEFT hand rests on the groom's forearm, back of the hand toward the camera, a plain wedding ring clearly visible on her left ring finger. Shy, hopeful, slightly awkward faces. No text, no letters, no numbers, no studio stamp, no watermark.
```

### 7. `hang_1988.jpg` (ảnh gốc để so với ảnh 8)
**Đính kèm:** `00_mau_hang.jpg`.
**Bố cục (rất quan trọng, ảnh 8 phải chụp y hệt góc này):**
- Máy ảnh đứng **sau lưng chéo bên trái** người ngồi, ngang tầm vai.
- **Cửa sổ** khung gỗ 4 ô kính chiếm **phía trên, từ giữa sang phải** khung hình (khoảng 40% đến 95% bề ngang, 5% đến 45% chiều cao). Kính trong, nhìn ra trời xám.
- **Bậu cửa sổ** chạy ngang ở **khoảng 55% chiều cao**.
- **Ghế đẩu gỗ** thấp ở **đáy khung, lệch trái**.
- **Chén trà** trên bậu cửa ở **bên phải** (khoảng 70–80% bề ngang).
**Kiểm tra:** bà Hằng **ngồi nghiêng ba phần tư, thấy rõ mặt** đang chấm bài; áo len đỏ đô vặn thừng, khăn kem; **tay trái đặt trên bậu cửa, nhẫn vàng thấy rõ**.
**Nếu sai:** *"Same composition, but her LEFT hand must rest flat on the windowsill with the gold wedding ring clearly visible, and her face must be visible in three-quarter profile."*
```
Aspect ratio 4:3. Realistic photograph on faded late-1980s colour film, warm late-afternoon light, 1988, inside a modest brick house in the northern Vietnamese mountains. Fixed composition: the camera is behind and slightly to the left of a seated woman, at shoulder height. A wooden-framed window with four glass panes fills the upper middle-to-right part of the frame (from about 40% to 95% of the width, from 5% to 45% of the height), showing a pale grey sky. The wooden windowsill runs horizontally across the frame at about 55% of the height. A low wooden stool sits at the bottom of the frame, slightly left of centre. A small white tea cup stands on the windowsill on the right (about 70–80% of the width). On the stool sits the woman from the attached reference, aged 40, turned in three-quarter profile so her round face is clearly visible, marking a stack of school notebooks on her lap with a red pen. She wears her burgundy cable-knit wool sweater and her cream knitted wool scarf around her neck (not over her head); her hair is tied low. Her LEFT hand rests flat on the windowsill, the plain gold wedding ring clearly visible. Calm, warm, ordinary family moment, gentle smile. Film grain. No text, no letters, no numbers, no watermark.
```

### 8. `vo_toi_tet_1991.jpg` (ẢNH SOI ĐÈN PIN, quan trọng nhất)
**Đính kèm:** `hang_1988.jpg` (bắt buộc, để giữ đúng cửa sổ, ghế, góc máy) và `00_mau_ngan.jpg`.
**Bố cục (game đã đặt sẵn vùng soi đèn theo đúng các toạ độ này, chỉ lệch chút ít thì vẫn soi được; tính theo % bề ngang × % chiều cao, gốc ở góc trên bên trái):**
| Chi tiết | Vị trí trong ảnh |
|---|---|
| **Bóng mặt cô bé trong kính cửa sổ** (rất mờ) | ngang 38–64%, cao 8–38% (ô kính giữa) |
| Khung cửa sổ gỗ | ngang 66–96%, cao 4–44% |
| **Đầu trùm khăn len kem** (quay lưng) | ngang 24–38%, cao 20–46% |
| **Cổ tay trái có dây chun đen và sẹo** | ngang 30–43%, cao 54–68% |
| **Hai bàn tay trên bậu cửa, không nhẫn** | ngang 44–66%, cao 54–64% |
| Chén trà nguội | ngang 70–84%, cao 48–62% |
| Áo len đỏ đô rộng thùng thình (lưng, vai) | ngang 20–30%, cao 46–84% |
| Ghế đẩu gỗ | ngang 22–62%, cao 84–100% |

**Kiểm tra:**
- Cùng cửa sổ, ghế, góc máy như ảnh 7.
- Người ngồi **quay lưng hẳn**, đầu **trùm** khăn len kem (không thấy tóc), áo len đỏ đô **quá rộng**, vai nhỏ.
- Hai tay đặt trên bậu cửa: **không có nhẫn**; ở **cổ tay trái (bên trái người xem)**: dây chun đen, vết sẹo mảnh.
- Trong **ô kính giữa** có bóng phản chiếu **rất mờ** của mặt một cô bé (mặt Ngân), phải nhìn kỹ mới thấy.
- Ảnh tối hơn ảnh 7, ánh sáng mùa đông xám, hơi nhoè.

**Nếu sai:**
- Không thấy bóng trong kính: *"Same image, but add a very faint ghostly reflection of the teenage girl's face in the middle window pane, upper centre of the frame, subtle like a real glass reflection."*
- Bóng quá rõ: *"Same image, but make the face reflection in the glass much fainter, almost invisible at first glance."*
- Có nhẫn, hoặc thiếu sẹo: *"Same image, but no ring on any finger; on the inside of her LEFT wrist (viewer's left) a black hair elastic and a thin pale scar line."*
- Sai góc máy: *"Same scene, but match the attached 1988 photo exactly: same window position in the upper middle-right, same windowsill height, same stool, same camera angle."*
```
Aspect ratio 4:3. Realistic photograph on faded early-1990s colour film, dim grey winter light, Tết 1991. EXACTLY the same room, window, windowsill, wooden stool and camera angle as the first attached photograph: the camera behind and slightly to the left of the seated person, at shoulder height; the four-pane wooden window in the upper middle-to-right of the frame; the windowsill running horizontally at about 55% of the frame height; the low wooden stool at the bottom, slightly left of centre. Sitting on the stool, with her back FULLY turned to the camera and facing the window, is a small, thin girl wearing the same burgundy cable-knit wool sweater, but far too big for her: drooping shoulders, sleeves pushed up. The cream knitted wool scarf is draped over her head like a hood, so no hair is visible; the hooded head is in the left-centre of the frame. Both her hands rest on the windowsill in the centre of the frame: young, thin, pale hands, with NO ring on any finger. On the inside of her LEFT wrist (on the viewer's left), a black fabric hair elastic and a thin pale horizontal scar line. In the MIDDLE window pane, in the upper centre of the frame, a very faint ghostly reflection of the face of the teenage girl from the second attached reference (pale, pointed chin), looking back toward the camera, subtle like a real reflection in glass, almost invisible at first glance. A small white tea cup, cold, untouched, stands on the windowsill to the right. Slightly underexposed, soft focus, visible film grain. Melancholic and quietly disturbing. No text, no letters, no numbers, no date stamp, no watermark.
```

### 9. `buong_toi.jpg`
**Đính kèm:** `vo_toi_tet_1991.jpg`.
**Kiểm tra:** buồng tối rửa ảnh dưới **một bóng đèn đỏ**; khay men, chai thuỷ tinh nâu, **can nhựa trắng 20 lít** (không chữ), máy phóng ảnh cũ, xô vôi bột; hai dây phơi ảnh với khoảng mười bản in **của cùng một ảnh** người quay lưng bên cửa sổ.
**Nếu sai:** *"Same image, but every print hanging on the lines must be a copy of the same photo: a hooded figure with her back turned, sitting at a window."*
```
Aspect ratio 16:9. Cinematic still, a tiny home photographic darkroom in a poor northern Vietnamese house, 1991, lit only by a single deep red safelight bulb hanging from the ceiling. On a wooden workbench along the left wall: three white enamel developing trays with liquid, brown glass chemical bottles, an old metal photo enlarger. On the floor: a large white 20-litre plastic jerrycan with no label, and a bucket of white lime powder. Across the room, two clotheslines with wooden pegs hold about ten wet black-and-white prints, ALL copies of the same photograph as the attached reference: a figure with a scarf over her head, back turned, sitting at a window. Water drips from the prints into a tray. Deep red light, black shadows, claustrophobic. No readable labels, no text, no letters, no numbers, no watermark.
```

### 10. `lo_than.jpg`
**Đính kèm:** Không.
**Kiểm tra:** góc nhà sàn xi măng; một **lò than đất nung chưa đốt**; cạnh đó **bao tải than hoa mới** (vài cục than rơi ra), **ba cuộn băng keo nâu**, **một cái chăn hoa gấp vuông**; đôi dép nhựa con gái ở chân tường; ánh sáng ban ngày xám.
```
Aspect ratio 4:3. Realistic photograph on faded early-1990s colour film, flat grey daylight from a small window, December 1991, the corner of a poor brick house in the northern Vietnamese mountains, concrete floor, lime-washed walls. Arranged neatly in the corner: an unlit round clay charcoal brazier (Vietnamese "lò đất"), beside it a new jute sack filled with black lump charcoal with a few pieces spilled on the floor, three rolls of brown packing tape stacked on top of each other, and a floral cotton quilt folded into a neat square. A small pair of girl's pink plastic sandals stands by the wall. Everything looks carefully prepared, as for an occasion. Still, ordinary, ominous. Film grain. No people. No text, no letters, no numbers, no watermark.
```

### 11. `buong_mo.jpg` (kết thúc tốt)
**Đính kèm:** Không.
**Kiểm tra:** buổi sáng, căn buồng vừa mở: băng keo và giấy báo bóc dở rủ xuống khung cửa; giường gỗ **buông màn trắng**, sau màn chỉ là **một hình dáng mờ dưới chăn**, không thấy thi thể; tủ đầu giường có lược gỗ, bát cháo khô, lọ thuốc nhỏ mở nắp; vôi bột trắng dọc chân tường; nắng sớm và bụi bay.
**Nếu sai:** *"Same image, but nothing of a body is visible: only a vague shape under the quilt behind the closed white mosquito net."*
```
Aspect ratio 16:9. Cinematic still, early morning of December 31st 1991, a small bedroom in a poor brick house in the northern Vietnamese mountains, just opened after two years. In the foreground, torn strips of brown packing tape and yellowed newspaper hang from the open door frame. A wooden bed with a closed white mosquito net; behind the net only a vague shape under a quilt, not clearly visible. On a small bedside table: a wooden hairbrush with long black hairs, a bowl of old dried porridge, a small brown medicine bottle with its cap off lying on its side. Thick dust everywhere, a line of white lime powder along the base of the walls. Pale cold sunlight enters through a window that has just been thrown open, dust floating in the beam. Grief, not gore. Film grain. No people visible. No text, no letters, no numbers, no watermark.
```

---

## C. Cảnh doạ

### 12. `mat_kinh_scare.jpg` (doạ khi soi trúng bóng trong kính)
**Đính kèm:** `vo_toi_tet_1991.jpg`, `00_mau_ngan.jpg`.
**Kiểm tra:** **y hệt ảnh 8** (cùng người quay lưng, cùng cửa sổ), chỉ khác: bóng mặt trong ô kính giữa giờ **rõ hẳn**, mắt mở to **nhìn thẳng người xem**, mỉm cười cứng.
```
Aspect ratio 4:3. The exact same photograph as the first attached reference: same window, same windowsill, same stool, same hooded figure in the oversized burgundy sweater with her back turned, same hands on the sill, same camera angle and lighting. The ONLY change: the reflection in the middle window pane is now sharp and clear: the face of the teenage girl from the second attached reference, eyes wide open, staring straight into the camera, a small fixed smile, as if she has just noticed the viewer. Underexposed, film grain, cold grey light. Horror photograph. No text, no letters, no numbers, no watermark.
```

### 13. `ngan_khan_scare.jpg` (cảnh doạ chính, lần thăm 4)
**Đính kèm:** `00_mau_ngan.jpg`.
**Kiểm tra:** cận cảnh mặt Ngân **sát ống kính**, trùm khăn len kem của mẹ, ánh lò than đỏ hắt từ dưới lên, mắt mở to không chớp, môi hé như vừa thì thầm, có hơi thở trắng.
```
Aspect ratio 1:1. Extreme close-up horror film still: the face of the teenage girl from the attached reference (pale, thin, pointed chin) pressed very close to the lens, filling most of the frame, a cream knitted wool scarf draped over her head like a hood and framing her face. Lit only from below by the red-orange glow of a charcoal brazier; deep black shadows above her eyes and in the background. Her eyes are wide open and unblinking, pupils huge; her lips slightly parted as if she just whispered something; a thin thread of breath vapour in the cold air. Shallow depth of field, film grain, slight motion blur at the edges. No text, no letters, no numbers, no watermark.
```

### 14. `bong_ba_scare.jpg` (cảnh doạ lần thăm 5)
**Đính kèm:** `00_mau_hang.jpg`.
**Kiểm tra:** buồng tối om, chỉ một vệt trăng xanh; **bóng đen** một người đàn bà ngồi tựa thành giường, đầu nghiêng lệch, một tay buông xuống mép giường với về phía **lọ thuốc nằm lăn dưới gầm**; không thấy rõ mặt.
```
Aspect ratio 16:9. Horror film still, a pitch-dark bedroom at 2 a.m., lit only by a thin vertical strip of cold blue moonlight through a crack in a shutter. On an old wooden bed, the dark silhouette of the woman from the attached reference sitting up against the headboard, head tilted sideways at an unnatural angle, one arm hanging down over the edge of the bed, fingers reaching toward the floor underneath, where a small brown medicine bottle lies on its side just out of reach. Her face is lost in shadow; only the faint outline of a sweater and loose hair. Heavy grain, crushed blacks. No text, no letters, no numbers, no watermark.
```

### 15. `khoi_than_scare.jpg` (kết thúc xấu)
**Đính kèm:** `cover.jpg`.
**Kiểm tra:** **cùng cánh cửa dán kín** như bìa, cùng góc nhìn, nhưng **không còn ai đứng ngoài**; trời rạng sáng xám xanh; khói xám luồn ra từ các mép; **một bàn tay con gái** thò ra từ khe dưới cửa, buông trên sàn, ngửa lòng, **cổ tay có dây chun đen và sẹo**; ánh lò đã tắt.
```
Aspect ratio 16:9. Horror film still, the exact same sealed wooden door as in the attached reference, same tape, same newspaper, same quilt stuffed underneath, seen from the same side, but now nobody is standing outside. Dawn, cold grey-blue light from the small window. Thick grey smoke has seeped out around the edges of the tape and from under the door, now thinning out. From the gap under the door, a pale thin girl's hand lies limp on the concrete floor, palm up; on the inside of the wrist a black hair elastic and a thin pale scar. The red glow under the door has died out. Silent, final. No gore. Film grain. No text, no letters, no numbers, no watermark.
```

---

## Danh sách file
| # | Tên file | Dùng ở | Tỉ lệ |
|---|---|---|---|
| 00a–00c | `00_mau_hang`, `00_mau_ngan`, `00_mau_khai` | (không vào game) | 16:9 |
| 1 | `cover.jpg` | Bìa | 3:4 |
| 2 | `cam_duong.jpg` | Lần 1 | 16:9 |
| 3 | `hieu_anh.jpg` | Lần 1 (biển để trống) | 4:3 |
| 4 | `gian_giua.jpg` | Lần 2 | 16:9 |
| 5 | `hai_cha_con.jpg` | Lần 2 | 4:3 |
| 6 | `anh_cuoi_1975.jpg` | Lần 3 | 3:4 |
| 7 | `hang_1988.jpg` | Lần 3 | 4:3 |
| 8 | `vo_toi_tet_1991.jpg` | Lần 3, soi đèn pin | 4:3 |
| 9 | `buong_toi.jpg` | Lần 3 | 16:9 |
| 10 | `lo_than.jpg` | Lần 5 | 4:3 |
| 11 | `buong_mo.jpg` | Kết thúc tốt | 16:9 |
| 12 | `mat_kinh_scare.jpg` | Doạ khi soi bóng kính | 4:3 |
| 13 | `ngan_khan_scare.jpg` | Doạ chính, lần 4 | 1:1 |
| 14 | `bong_ba_scare.jpg` | Doạ lần 5 | 16:9 |
| 15 | `khoi_than_scare.jpg` | Kết thúc xấu | 16:9 |
