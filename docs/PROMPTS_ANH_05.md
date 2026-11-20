# Ảnh cho Hồ sơ 05 "Người giữ vợ"

## Cách dùng file này
- Mỗi ô ảnh có **một prompt duy nhất**: chép nguyên khối, dán vào AI Studio là xong. Tỉ lệ khung hình đã ghi sẵn trong prompt (câu *Aspect ratio …*). Nếu AI Studio có ô chọn tỉ lệ thì chọn giống như vậy cho chắc.
- Dòng **Đính kèm** ghi ảnh nào phải gắn kèm trước khi gửi prompt. Ghi "Không" thì không gắn gì.
- Dòng **Kiểm tra** là những điểm phải đúng. Sai điểm nào thì gõ tiếp trong cùng cuộc trò chuyện câu sửa ghi ở dòng **Nếu sai**.
- Tạo theo đúng thứ tự từ trên xuống, trong **cùng một cuộc trò chuyện**.
- Đổi tên file đúng như tên ghi ở đầu mỗi ô, rồi gửi lên chat.

> **Mình tự làm, bạn không cần tạo:** sơ đồ nhà, giấy xin nghỉ và bài văn (hai mẫu chữ), trang nhật ký xé 6 mảnh, cuốn lịch tờ, tờ rơi khí than, hoá đơn than, bệnh án, danh sách lao. Những thứ có chữ tiếng Việt AI hay viết sai dấu, nên mình dựng bằng code.
>
> **Quy ước bên trái, bên phải:** "tay trái của cô ấy" là tay trái của nhân vật. Trong ảnh chụp từ sau lưng, tay trái của nhân vật nằm **bên trái người xem**.
> - **Ngân:** vết sẹo rạch nằm ở **cổ tay trái** của Ngân, mặt trong, có dây chun buộc tóc màu đen che một phần.
> - **Bà Hằng:** nhẫn cưới vàng ở **ngón áp út tay trái**.
> - **Đồ của mẹ:** áo len **đỏ đô** đan tay, vặn thừng (cable knit), và khăn len **màu kem**. Ảnh bà Hằng 1988 và ảnh "Vợ tôi, Tết 1991" phải dùng đúng hai món này để người chơi so được.

---

## Bước 0: ảnh mẫu nhân vật (không đưa vào game)

### 00a. `00_mau_hang.jpg`
**Đính kèm:** Không.
**Kiểm tra:** phụ nữ miền Bắc khoảng 40 tuổi, mặt tròn đầy đặn, đeo nhẫn cưới tay trái, mặc áo len đỏ đô vặn thừng và khăn len kem.
```
Aspect ratio 16:9. Character reference sheet on a plain mid-grey background, even soft studio light, realistic photograph. The same Vietnamese woman shown three times side by side: front view head and shoulders, three-quarter view, and front view half body. She is 40 years old, a northern Vietnamese literature schoolteacher from Nam Định: round full face, soft cheeks, kind tired eyes, slightly pale lips, shoulder-length straight black hair tied low at the nape. She wears a hand-knitted burgundy (dark red) cable-knit wool sweater and a cream-coloured knitted wool scarf loosely around her neck. A plain thin gold wedding ring on the ring finger of her LEFT hand, clearly visible. Gentle, slightly breathless expression. No text, no letters, no numbers, no watermark.
```

### 00b. `00_mau_ngan.jpg`
**Đính kèm:** `00_mau_hang.jpg` (để Ngân có nét giống mẹ).
**Kiểm tra:** cô bé 15 tuổi, giống mẹ ở mắt, nhưng gầy và mặt nhọn hơn; đồng phục học sinh miền Bắc đầu thập niên 90; cổ tay trái có dây chun đen và vết sẹo mảnh lộ ra một phần.
**Nếu sai:** *"Same image but fix: a thin pale healed scar across the inside of her LEFT wrist, partly covered by a black hair elastic; no ring, no jewellery."*
```
Aspect ratio 16:9. Character reference sheet on a plain mid-grey background, even soft studio light, realistic photograph. A 15-year-old Vietnamese girl shown three times side by side: front view head and shoulders, three-quarter view, full body. She is the daughter of the woman in the attached reference: the same eyes, but thinner, a narrow pointed chin, very pale skin, chapped lips from cold, long straight black hair in a low ponytail. She wears an early-1990s northern Vietnamese secondary school uniform: white long-sleeved shirt, dark navy trousers, a red Young Pioneer scarf tied at the neck, a worn grey cardigan on top. On the inside of her LEFT wrist a thin pale healed scar line, partly covered by a black hair elastic. No ring, no jewellery. Polite, sweet smile, but the eyes do not smile. No text, no letters, no numbers, no watermark.
```

### 00c. `00_mau_khai.jpg`
**Đính kèm:** Không.
**Kiểm tra:** đàn ông miền Bắc 47 tuổi, rất gầy, râu lún phún, mắt đỏ, áo bông cũ; trông hiền và kiệt sức, không dữ.
```
Aspect ratio 16:9. Character reference sheet on a plain mid-grey background, even soft studio light, realistic photograph. The same Vietnamese man shown three times side by side: front view head and shoulders, three-quarter view, full body. He is 47, a small-town photographer in the northern mountains: very thin, hollow cheeks, grey stubble, short greying hair, reddened tired eyes of a heavy drinker, cracked knuckles stained brown by photo chemicals. He wears a faded khaki padded winter jacket over a grey wool vest, old trousers, rubber sandals with socks. Gentle, exhausted, apologetic expression. No text, no letters, no numbers, no watermark.
```

---

## A. Thị trấn, ngôi nhà và bìa

### 1. `cover.jpg`
**Đính kèm:** `00_mau_ngan.jpg`.
**Kiểm tra:**
- Nhìn vào là thấy ngay **cánh cửa gỗ dán kín** bằng băng keo nâu và giấy báo, khe dưới cửa nhét chăn, ánh **đỏ cam của lò than** hắt ra từ khe.
- Ngân đứng nghiêng bên cửa, áp tai vào cánh cửa, mặc **áo len đỏ đô của mẹ** rộng thùng thình.
- Không có ai khác. Không có chữ.

**Nếu sai:** *"Same image but fix: the door must be completely sealed with brown packing tape and old newspapers along every edge, a folded quilt stuffed under the door, a thin red-orange glow from a charcoal brazier leaking through the gap."*
```
Aspect ratio 3:4. Cinematic horror film still, 35mm, northern mountain town of Vietnam, December 1991, night. A narrow room of a poor brick house: lime-washed walls with damp stains, a bare yellow bulb. At the center an old wooden inner door, completely sealed shut with strips of brown packing tape and yellowed newspaper pasted along every edge and over the keyhole; a folded quilt is stuffed into the gap under the door, and a thin red-orange glow of burning charcoal leaks out from under it, faint grey smoke curling. To the right of the door stands the 15-year-old girl from the attached reference, pressing her ear and her palm gently against the sealed door, eyes half closed, listening, a faint tender smile. She wears a burgundy cable-knit wool sweater far too big for her, sleeves covering her hands, a cream knitted scarf. Cold blue moonlight from a small window on the left, warm red glow from below the door, deep shadows. Breath visible in the cold air. Quiet, intimate, deeply wrong. No text, no letters, no numbers, no watermark.
```

### 2. `cam_duong.jpg`
**Đính kèm:** Không.
**Kiểm tra:** thị trấn mỏ miền núi phía Bắc buổi sáng sương muối: nhà gạch một tầng mái fibro xi măng, đồi trọc, ống khói, cỏ trắng sương. Không có nhà cao tầng, xe hơi hiện đại hay biển hiệu.
```
Aspect ratio 16:9. Realistic documentary photograph on faded 1990s colour film, early morning, December 1991, a small mining town in the mountains of Lào Cai, northern Vietnam. Heavy hoarfrost: grass, roofs and rails covered in white frost crystals, thick fog in the valleys. Rows of low single-storey brick houses with grey corrugated fibre-cement roofs, smoke rising from a few chimneys, bare hills scarred by an open-pit apatite mine in the background, a muddy road with a lone bicycle and a woman in a conical hat carrying a shoulder pole. Muted cold blue-grey palette, grain, slight light leak. No modern cars, no signs, no text, no letters, no numbers, no watermark.
```

### 3. `hieu_anh.jpg`
**Đính kèm:** Không.
**Kiểm tra:** mặt tiền hiệu ảnh nhỏ trong nhà gạch: tủ kính bày ảnh, **tấm biển gỗ để trống** (mình sẽ tự viết chữ "ẢNH HẰNG" lên). Cửa gỗ khép hờ, bên trong tối.
**Nếu sai:** *"Same image but fix: the wooden sign board above the door must be completely blank, no letters at all."*
```
Aspect ratio 4:3. Realistic photograph on faded 1990s colour film, dusk, December 1991, northern Vietnamese mountain town. The front of a tiny family photo studio in an old single-storey brick house with a fibre-cement roof: a narrow wooden glass-front display cabinet beside the door showing small faded portrait photos, a blank painted wooden sign board above the door with NO lettering at all, a folding wooden door half open onto darkness, a burning incense stick in a can by the doorstep, frost on the step. A single bare bulb inside casts a weak yellow light. Lonely, cold, slightly unsettling. No text, no letters, no numbers, no watermark.
```

### 4. `gian_giua.jpg`
**Đính kèm:** `00_mau_khai.jpg`.
**Kiểm tra:** gian giữa nghèo: bàn thờ gia tiên có lư hương **nhưng không có ảnh thờ của bà Hằng**, cạnh đó là cửa buồng dán kín; ông Khải ngồi bên bàn nước rót chè, nhìn về phía cửa buồng. Hai cái bát cháo và đôi đũa để sẵn trên khay trước cửa buồng.
```
Aspect ratio 16:9. Cinematic still, realistic, 35mm, a winter evening in December 1991 inside a poor brick house in the northern Vietnamese mountains. The central living room: a small ancestral altar shelf on the back wall with a brass incense burner thick with burning incense sticks, old ancestor photos but an obvious empty space with no portrait of a woman. To the right, an inner wooden door completely sealed with brown packing tape and newspaper, a folded quilt stuffed under it. On the floor in front of the sealed door, a small wooden tray with a bowl of rice porridge, chopsticks and a cup of tea, as if served to someone inside. At a low wooden table in the foreground sits the thin man from the attached reference in his khaki padded jacket, pouring tea into two small cups, looking toward the sealed door with tender patience. A charcoal brazier glows at his feet. Thick incense haze, yellow bulb, cold blue window light. No text, no letters, no numbers, no watermark.
```

### 5. `hai_cha_con.jpg`
**Đính kèm:** `00_mau_khai.jpg` và `00_mau_ngan.jpg`.
**Kiểm tra:** ảnh Vân chụp hai cha con ngồi ở gian giữa. Ngân ngồi sát bố, tay Ngân **nắm cổ tay bố**. Ông Khải nhìn con, không nhìn ống kính. Ngân nhìn thẳng ống kính, cười ngoan.
```
Aspect ratio 4:3. Realistic amateur photograph on faded early-1990s colour film with on-camera flash, slight red-eye, December 1991. Inside a poor brick house in the northern Vietnamese mountains, a father and his teenage daughter sit side by side on a wooden bench against a lime-washed wall, in front of a corner of an incense-hazed ancestral altar. The father is the thin man from the first attached reference, in his khaki padded jacket, his face turned toward his daughter, worried and obedient. The daughter is the girl from the second attached reference, in her school uniform and grey cardigan, sitting very close to him, her hand firmly holding his wrist; she looks straight into the camera with a sweet polite smile. Harsh flash, hard shadow on the wall behind them, the right edge of the frame shows the edge of a door covered in brown tape. No text, no letters, no numbers, no watermark.
```

---

## B. Ảnh gia đình (bằng chứng so sánh)

### 6. `anh_cuoi_1975.jpg`
**Đính kèm:** `00_mau_hang.jpg` và `00_mau_khai.jpg`.
**Kiểm tra:** ảnh cưới đen trắng ở hiệu ảnh năm 1975; hai người trẻ (khoảng 27–28 tuổi); tay trái cô dâu đặt lên tay chú rể, **thấy rõ nhẫn ở ngón áp út tay trái**.
```
Aspect ratio 3:4. Vintage black-and-white studio wedding portrait, northern Vietnam, 1975, slightly yellowed paper with a white deckled border and a few scratches. A young couple in their late twenties, younger versions of the two people in the attached references: the bride with round full face, hair tied back, white blouse with a small paper flower pinned on the chest; the groom thin, short hair, white shirt and dark trousers. They stand stiffly side by side in front of a painted studio backdrop. The bride's LEFT hand rests on the groom's forearm, a plain wedding ring clearly visible on her left ring finger. Shy, hopeful faces. No text, no letters, no numbers, no watermark.
```

### 7. `hang_1988.jpg`
**Đính kèm:** `00_mau_hang.jpg`.
**Kiểm tra:** bà Hằng năm 1988 chấm bài bên cửa sổ, mặc áo len đỏ đô và khăn kem, **ngồi nghiêng thấy mặt**, tay trái đặt trên bậu cửa có **nhẫn**. Bố cục giống ảnh số 8 (cùng cửa sổ, cùng ghế đẩu) để người chơi so.
```
Aspect ratio 4:3. Realistic photograph on faded late-1980s colour film, warm afternoon light, 1988, inside a modest brick house in the northern Vietnamese mountains. The woman from the attached reference, aged 40, sits on a low wooden stool beside a small wooden-framed glass window, in three-quarter profile so her face is clearly visible, marking a stack of school notebooks on her lap with a red pen. She wears her burgundy cable-knit sweater and cream knitted scarf. Her LEFT hand rests on the windowsill, the gold wedding ring clearly visible. A cup of tea on the sill. Calm, warm, ordinary family moment, gentle smile. Same window, same stool, same angle as a later photo will use. No text, no letters, no numbers, no watermark.
```

### 8. `vo_toi_tet_1991.jpg`
**Đính kèm:** `hang_1988.jpg` (cùng cửa sổ, ghế, góc chụp) và `00_mau_ngan.jpg`.
**Kiểm tra (quan trọng, đây là ảnh soi bằng đèn pin):**
- Cùng cửa sổ, ghế đẩu, góc chụp như ảnh 7, nhưng người ngồi **quay lưng hẳn** về phía người xem, đầu trùm khăn len kem, áo len đỏ đô **rộng thùng thình**, vai nhỏ.
- Hai tay đặt trên bậu cửa: **không có nhẫn**; ở **cổ tay trái (bên trái người xem)** có dây chun đen và một vệt sẹo mảnh.
- Trong **mặt kính cửa sổ** có bóng phản chiếu mờ của **khuôn mặt một cô bé** (mặt Ngân), rất nhạt, phải nhìn kỹ mới thấy.
- Ảnh tối, hơi nhoè, ánh sáng mùa đông xám.

**Nếu sai:**
- Không thấy bóng trong kính: *"Same image but fix: add a faint ghostly reflection of a young teenage girl's face in the window glass, very subtle, as a real glass reflection."*
- Có nhẫn: *"Same image but fix: no ring on any finger; a thin pale scar and a black hair elastic on the inside of the left wrist (viewer's left)."*
```
Aspect ratio 4:3. Realistic photograph on faded early-1990s colour film, grey winter light, Tết 1991, the exact same window, wooden stool and camera angle as the first attached photo. A small, thin figure sits on the stool with her back fully turned to the camera, facing the window, wearing the same burgundy cable-knit sweater but far too big for her, shoulders narrow, and the cream knitted scarf draped over her head like a hood so no hair is visible. Both her hands rest on the windowsill: young, thin hands, NO ring on any finger; on the inside of her LEFT wrist (viewer's left) a black hair elastic and a thin pale scar line. In the window glass, very faint, a ghostly reflection of the face of the teenage girl from the second attached reference, looking back at the camera. A cold untouched cup of tea on the sill. Slightly underexposed, soft focus, film grain. Melancholic and quietly disturbing. No text, no letters, no numbers, no watermark.
```

### 9. `buong_toi.jpg`
**Đính kèm:** `vo_toi_tet_1991.jpg`.
**Kiểm tra:** buồng tối rửa ảnh dưới ánh đèn đỏ: khay hoá chất, can nhựa, dây phơi ảnh. Trên dây là **nhiều bản in của cùng một ảnh** người quay lưng bên cửa sổ (giống ảnh 8). Không có chữ đọc được trên can.
```
Aspect ratio 16:9. Cinematic still, a tiny home photographic darkroom in a poor northern Vietnamese house, 1991, lit only by a single deep red safelight bulb. Enamel developing trays on a wooden bench, brown glass bottles, a large white plastic jerrycan, an old enlarger, a bucket of white lime powder on the floor. Across the room hang two clotheslines with wooden pegs holding a dozen wet black-and-white prints, all copies of the same photo as the attached reference: a figure in a sweater with a scarf over her head, back turned, sitting at a window. Dripping water, red light, black shadows, claustrophobic. No readable labels, no text, no letters, no numbers, no watermark.
```

### 10. `lo_than.jpg`
**Đính kèm:** Không.
**Kiểm tra:** góc nhà: một lò than đất nung, cạnh đó **bao tải than hoa** mới, vài cuộn băng keo nâu và một cái chăn gấp. Ánh sáng ban ngày xám.
```
Aspect ratio 4:3. Realistic photograph on faded early-1990s colour film, grey daylight, December 1991, the corner of a poor brick house in the northern Vietnamese mountains. On the concrete floor: an unlit clay charcoal brazier, beside it a new jute sack filled with black lump charcoal, a few charcoal pieces spilled on the floor, three rolls of brown packing tape and a folded floral quilt stacked neatly next to it, as if prepared for something. A small pair of girl's plastic sandals by the wall. Still, ordinary, ominous. No text, no letters, no numbers, no watermark.
```

### 11. `buong_mo.jpg` (kết thúc tốt)
**Đính kèm:** Không.
**Kiểm tra:** căn buồng đã mở, buổi sáng: băng keo bóc dở rủ xuống, giường gỗ màn buông, **không thấy thi thể rõ** (chỉ một hình người dưới chăn, mờ sau màn). Trên tủ đầu giường: lược chải tóc, bát cháo đã khô, lọ thuốc nhỏ. Ánh sáng sớm lọt qua cửa sổ vừa mở.
```
Aspect ratio 16:9. Cinematic still, early morning, December 31st 1991, a small bedroom in a poor brick house in the northern Vietnamese mountains, just opened after two years. Torn strips of brown packing tape and newspaper hang from the open door frame. A wooden bed with a closed white mosquito net; behind the net, only a vague shape under a quilt, not clearly visible. On the bedside table: a wooden hairbrush with long black hairs, a bowl of dried old porridge, a small medicine bottle with its cap off, dust everywhere, white lime powder along the walls. Pale cold sunlight enters through a window that has just been thrown open, dust floating in the light. Grief, not gore. No text, no letters, no numbers, no watermark.
```

---

## C. Cảnh doạ

### 12. `mat_kinh_scare.jpg` (cảnh doạ lần 3)
**Đính kèm:** `vo_toi_tet_1991.jpg` và `00_mau_ngan.jpg`.
**Kiểm tra:** cùng ảnh số 8 nhưng bóng mặt trong kính **rõ hẳn**, mắt mở to **nhìn thẳng người xem**, cười.
```
Aspect ratio 4:3. The exact same photograph as the first attached reference, same window, same figure with her back turned, but now the reflection in the window glass is sharp and clear: the face of the teenage girl from the second attached reference, eyes wide open, staring straight into the camera, a small fixed smile, as if she had noticed the viewer. Underexposed, grain, cold grey light. Horror photo. No text, no letters, no numbers, no watermark.
```

### 13. `ngan_khan_scare.jpg` (cảnh doạ chính lần 4)
**Đính kèm:** `00_mau_ngan.jpg`.
**Kiểm tra:** cận cảnh mặt Ngân trùm khăn len kem của mẹ, sát ống kính, ánh lò than đỏ từ dưới hắt lên, mắt mở to, miệng hé như vừa nói.
```
Aspect ratio 1:1. Extreme close-up horror film still, the face of the teenage girl from the attached reference pressed very close to the lens, a cream knitted wool scarf draped over her head like a hood, framing her pale face. Lit only from below by the red-orange glow of a charcoal brazier, deep black shadows above. Her eyes wide open, unblinking, pupils huge, lips slightly parted as if she just whispered something; a thread of breath vapour in the cold air. Shallow depth of field, grain, slight motion blur at the edges. No text, no letters, no numbers, no watermark.
```

### 14. `bong_ba_scare.jpg` (cảnh doạ lần 5)
**Đính kèm:** `00_mau_hang.jpg`.
**Kiểm tra:** buồng tối om, chỉ một vệt sáng xanh; bóng một **người đàn bà ngồi tựa thành giường**, đầu nghiêng, một tay buông xuống gầm giường như đang với. Không thấy rõ mặt.
```
Aspect ratio 16:9. Horror film still, a pitch-dark bedroom at 2 a.m., lit only by a thin strip of cold blue moonlight through a crack. On an old wooden bed, the dark silhouette of the woman from the attached reference sitting up against the headboard, head tilted sideways at an unnatural angle, one arm hanging down over the edge of the bed, fingers reaching toward the floor underneath, where a small medicine bottle lies on its side. Her face is lost in shadow, only the faint shape of a cardigan and loose hair. Heavy grain, crushed blacks. No text, no letters, no numbers, no watermark.
```

### 15. `khoi_than_scare.jpg` (kết thúc xấu)
**Đính kèm:** `cover.jpg`.
**Kiểm tra:** cùng cánh cửa dán kín như bìa, nhưng **không còn ai đứng ngoài**; khói xám đặc luồn ra từ khe chăn; một **bàn tay con gái** thò ra từ khe dưới cửa, buông lỏng trên sàn, cổ tay trái có dây chun đen.
```
Aspect ratio 16:9. Horror film still, the exact same sealed wooden door as in the attached reference, now with nobody standing outside. Dawn, cold grey-blue light. Thick grey smoke has seeped out around the edges of the tape and from under the door, now dissipating. From the gap under the door, a pale thin girl's hand lies limp on the concrete floor, palm up, a black hair elastic and a thin scar on the inside of the wrist. The red glow under the door has died out. Silent, final. No gore. No text, no letters, no numbers, no watermark.
```

---

## Danh sách file

| # | Tên file | Dùng ở | Ghi chú |
|---|---|---|---|
| 00a–00c | `00_mau_hang`, `00_mau_ngan`, `00_mau_khai` | (không vào game) | Ảnh mẫu nhân vật |
| 1 | `cover.jpg` | Bìa | 3:4 |
| 2 | `cam_duong.jpg` | Lần 1 | 16:9 |
| 3 | `hieu_anh.jpg` | Lần 1 | 4:3, biển để trống |
| 4 | `gian_giua.jpg` | Lần 2 | 16:9 |
| 5 | `hai_cha_con.jpg` | Lần 2 | 4:3 |
| 6 | `anh_cuoi_1975.jpg` | Lần 3 | 3:4 |
| 7 | `hang_1988.jpg` | Lần 3 | 4:3 |
| 8 | `vo_toi_tet_1991.jpg` | Lần 3, đèn pin | 4:3, ảnh quan trọng nhất |
| 9 | `buong_toi.jpg` | Lần 3 | 16:9 |
| 10 | `lo_than.jpg` | Lần 5 | 4:3 |
| 11 | `buong_mo.jpg` | Kết thúc tốt | 16:9 |
| 12 | `mat_kinh_scare.jpg` | Cảnh doạ lần 3 | 4:3 |
| 13 | `ngan_khan_scare.jpg` | Cảnh doạ chính lần 4 | 1:1 |
| 14 | `bong_ba_scare.jpg` | Cảnh doạ lần 5 | 16:9 |
| 15 | `khoi_than_scare.jpg` | Kết thúc xấu | 16:9 |
