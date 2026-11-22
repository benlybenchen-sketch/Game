# Ảnh cho Hồ sơ 06 "Âm Hôn" · bản chi tiết

## Cách dùng
1. Tạo **theo đúng thứ tự** từ trên xuống, trong **một cuộc trò chuyện AI Studio duy nhất**.
2. Mỗi ô có **một prompt duy nhất**: chép nguyên khối, dán vào là xong. Tỉ lệ khung hình ghi trong prompt; nếu AI Studio có ô chọn tỉ lệ thì chọn y như vậy.
3. **Đính kèm** đúng ảnh ghi trong ô. Prompt đã tả lại nhân vật đầy đủ, nên dù AI "quên" ảnh đính kèm thì vẫn ra đúng người.
4. Đối chiếu ảnh với mục **Kiểm tra**. Sai điểm nào thì gõ câu ở mục **Nếu sai** (cùng cuộc trò chuyện, đính kèm lại ảnh vừa tạo).
5. Đổi tên file đúng tên ở đầu ô rồi gửi lên chat.

> **Mình tự làm bằng code, bạn không cần tạo:** canh thiếp, vạn niên lịch, sách tứ trụ, sổ bà mối kèm **bàn tính**, bảng giá, hối phiếu mật áp, Thiên Tự Văn, phiếu khám xác, Tẩy Oan Tập Lục, Ngũ phục đồ, sổ phát tang, tự điển bộ thủ, quá kế thư, gia phả, hôn thư. Những thứ này có chữ Hán, chữ Việt và con số phải đúng tuyệt đối.

### Luật chung (đã viết sẵn trong từng prompt)
- **Thời đại:** trấn nhỏ tỉnh Sơn Tây, miền Bắc Trung Quốc, năm 1936. Nhà tứ hợp viện gạch xám, đất hoàng thổ vàng, cây dương khô. Không có đồ hiện đại, không điện (chỉ đèn dầu, nến, đèn lồng, đuốc).
- **Chất ảnh:** ảnh phim, màu trầm, hạt phim, ánh nến ấm và ánh trăng lạnh. Ảnh pháp y là đen trắng.
- **KHÔNG CHỮ:** AI viết chữ Hán hay sai. Đèn lồng trơn, câu đối trơn, bùa có nét mờ không đọc được, thẻ tên để trống. Mọi prompt đều cấm chữ.
- **Không máu me:** rợn bằng không khí, ánh nhìn, sự tĩnh lặng.
- **Bên trái, bên phải:** "tay trái của anh ấy" là tay trái của nhân vật.

### Dấu nhận dạng (không được sai, người chơi dùng để giải đố)
| Ai / vật | Dấu |
|---|---|
| **Tú Nương** (16 tuổi) | Gầy, da rám nắng, gò má cao, **một bím tóc đen dài sau lưng**, mí mắt sưng đỏ. Khi làm cô dâu: áo và váy cưới đỏ thêu, **khăn trùm đầu đỏ che kín mặt**, **đi chân không**. Trong ảnh game **không bao giờ lộ rõ mặt** (trừ ảnh doạ số 11, chỉ lộ nửa dưới). |
| **Thừa Tự** (19 tuổi) | Rất gầy, vai hẹp, da trắng xanh, tóc ngắn, **kính gọng tròn**. Áo **trường sam lụa xanh lam đậm**. Khi bị nhốt: gầy rộc, áo lót trắng bẩn, **chân trái bị xích vào chân giường**, đồng tử co nhỏ vì thuốc phiện. |
| **Triệu phu nhân** (49 tuổi) | Búi tóc thấp chặt, **một trâm bạc**, môi mỏng, mặt bình thản. **Áo và váy lụa trắng trơn** (không phải đồ tang gai). **Vòng ngọc ở cổ tay phải**, **chìa khoá đồng nhỏ đeo dây đỏ ở cổ**. |
| **Xác trong quan tài (Ôn Thạch)** | Vai rộng, tay to. **Cổ tay TRÁI buộc sợi chỉ đỏ.** Lòng bàn tay trái có vệt chai chéo. Mặc áo xanh lam **chật căng ở vai, đường may vai bục chỉ**. |
| **Hình nhân giấy chú rể** | Cao bằng người thật, khung tre bọc giấy, **áo giấy xanh lam**, mặt giấy trắng phấn, **hai má tròn đỏ**, mắt vẽ mực đen, miệng cười đỏ nhỏ. |
| **Quan tài** | Sơn son đỏ thẫm, bóng, đặt trên hai mễ gỗ. |
| **Đèn lồng** | Đèn lồng giấy **trắng** (tang) treo **xen lẫn** đèn lồng **đỏ** (cưới), tất cả trơn, không chữ. |

---

## Bước 0: ảnh mẫu (không đưa vào game)

### 00a. `00_mau_tu_nuong.jpg`
**Đính kèm:** Không.
**Kiểm tra:** cô gái nông thôn Sơn Tây 16 tuổi, gầy, một bím tóc dài; áo vải thô xanh chàm; chân không; mắt sưng, nét mặt cam chịu.
**Nếu sai:** *"Same sheet, but she must look poor and thin: one single long black braid, faded indigo coarse cotton clothes, barefoot, swollen red eyelids."*
```
Aspect ratio 16:9. Character reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even daylight, no dramatic shadows. The SAME girl shown three times side by side, equal size: (1) front view head and shoulders, (2) three-quarter view head and shoulders, (3) full body standing. She is a 16-year-old Chinese peasant girl from rural Shanxi province, 1936: thin face, high cheekbones, sun-darkened skin, swollen red eyelids from crying, a chapped bitten lower lip, ONE long thick black braid hanging down her back to her waist. She wears a faded indigo-blue coarse cotton jacket fastened with cloth knot buttons on the right side, black cotton trousers, barefoot with dusty feet. Rough working hands, no jewellery. Expression: blank, resigned, eyes looking slightly past the camera. Natural skin texture, photographic realism. No text, no letters, no Chinese characters, no numbers, no labels, no watermark.
```

### 00b. `00_mau_thua_tu.jpg`
**Đính kèm:** Không.
**Kiểm tra:** thanh niên 19 tuổi, thư sinh nhà giàu, rất gầy, kính gọng tròn, trường sam lụa xanh lam đậm vừa khít người gầy.
**Nếu sai:** *"Same sheet, but he must be very thin with narrow shoulders, round wire-rimmed glasses, and a dark sapphire-blue silk changshan that fits his slim body exactly."*
```
Aspect ratio 16:9. Character reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even daylight. The SAME young man shown three times side by side, equal size: (1) front view head and shoulders, (2) three-quarter view head and shoulders, (3) full body standing. He is a 19-year-old Chinese scholar, the only son of a wealthy Shanxi banking family, 1936: very thin, narrow sloping shoulders, pale scholar's skin, short neat black hair parted on the side, round thin wire-rimmed glasses, soft delicate hands. He wears a dark sapphire-blue silk long gown (changshan) with a high collar and cloth knot buttons, fitting his slim body exactly, and black cloth shoes. Shy, gentle, slightly anxious expression. Natural skin texture. No text, no letters, no Chinese characters, no numbers, no labels, no watermark.
```

### 00c. `00_mau_phu_nhan.jpg`
**Đính kèm:** Không.
**Kiểm tra:** phụ nữ 49 tuổi nhà giàu; búi tóc chặt với một trâm bạc; **áo và váy lụa trắng trơn**; vòng ngọc tay phải; chìa khoá đồng đeo dây đỏ ở cổ; mặt bình thản, lạnh.
**Nếu sai:** *"Same sheet, but she wears plain white silk (not coarse hemp mourning clothes), a jade bangle on her RIGHT wrist and a small brass key on a red cord around her neck."*
```
Aspect ratio 16:9. Character reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even daylight. The SAME woman shown three times side by side, equal size: (1) front view head and shoulders, (2) three-quarter view head and shoulders, (3) full body standing with hands folded in front. She is the 49-year-old mistress of a wealthy Shanxi household, 1936: hair pulled back into a tight low bun held by a single plain silver hairpin, thin plucked eyebrows, thin lips, smooth pale skin, a perfectly calm face and eyes that do not blink. She wears a plain white silk jacket with a high collar and a long plain white silk skirt, no embroidery, no decoration (this is NOT coarse hemp mourning dress). A green jade bangle on her RIGHT wrist. A small brass key on a red silk cord around her neck, resting on her chest. Cold, composed, motherly in a frightening way. No text, no letters, no Chinese characters, no numbers, no labels, no watermark.
```

### 00d. `00_mau_hinh_nhan.jpg`
**Đính kèm:** Không.
**Kiểm tra:** hình nhân giấy chú rể cao bằng người thật, áo giấy xanh lam, mặt phấn trắng, má tròn đỏ, mắt vẽ mực; đứng thẳng đờ trên nền xám.
```
Aspect ratio 16:9. Prop reference sheet, realistic photograph, plain mid-grey seamless studio background, soft even light. The SAME object shown twice side by side: (1) full front view, (2) three-quarter view. A life-size traditional Chinese paper funeral effigy of a young bridegroom (paper offering figure), about 170 cm tall, built on a bamboo frame covered with paper: a dark blue paper long gown with painted folds, black paper shoes, a small black paper skullcap. The face is flat white powdered paper with two perfectly round red painted cheeks, thin painted black eyebrows, two painted black eyes looking straight ahead, a tiny painted red smile. The arms hang stiffly. Slightly creased paper, a small tear at one sleeve showing bamboo ribs. No text, no letters, no Chinese characters, no numbers, no labels, no watermark.
```

---

## Bước 1: ảnh trong game

### 01. `cover.jpg` (bìa)
**Đính kèm:** `00_mau_tu_nuong.jpg`, `00_mau_hinh_nhan.jpg`.
**Bố cục:** khung dọc. Cô dâu đứng **chính giữa**, toàn thân. Quan tài đỏ ở **bên trái** cô, ngang hông. Hình nhân giấy đứng **bên phải** quan tài, phía sau cô dâu một chút. Đèn lồng treo **mép trên**. Cửa mở phía sau cho ánh trăng xanh.
**Kiểm tra:** khăn đỏ **che kín mặt**; **chân không** trên nền đá; quan tài sơn son; hình nhân giống ảnh mẫu; đèn trắng và đỏ **xen lẫn**, trơn không chữ; không ai khác.
**Nếu sai:**
- *"Same image, but the bride's face must be completely hidden under the red veil, and her bare feet must be visible on the stone floor."*
- *"Same image, but the lanterns must be plain, with no characters or symbols on them."*
```
Aspect ratio 3:4. Cinematic horror film still, 1936 rural Shanxi, China, night, inside a traditional ancestral hall of a rich family, lit only by candles and paper lanterns. In the exact centre stands a young bride, full body, the thin girl from the first attached reference: she wears a traditional red embroidered wedding jacket and long red pleated skirt, her head and face COMPLETELY covered by a square red silk veil hanging to her chest, her hands hidden in her sleeves, BAREFOOT on cold grey stone floor tiles. To her LEFT, at hip height, a large coffin lacquered deep glossy red, on two wooden trestles. To the RIGHT of the coffin, slightly behind the bride, stands the life-size paper bridegroom effigy from the second attached reference (blue paper gown, white face, round red cheeks, painted eyes), stiff and upright. Along the top edge of the frame, plain white paper funeral lanterns and plain red wedding lanterns hang mixed together, glowing. Behind, an open wooden door lets in cold blue moonlight and mist. Incense smoke drifting, deep shadows, warm candlelight against cold blue. Dread and total stillness. Film grain. No other people. No text, no letters, no Chinese characters, no symbols on lanterns, no numbers, no watermark.
```

### 02. `phu_trieu.jpg` (thư mời, đêm 1)
**Đính kèm:** Không.
**Kiểm tra:** cổng tứ hợp viện nhà giàu Sơn Tây: tường gạch xám cao, cửa gỗ sơn đen nặng có vòng đồng, hai sư tử đá; **trên cổng: hai đèn lồng trắng treo sát cạnh hai đèn lồng đỏ**, tất cả trơn; một xe la đỗ sát tường; hoàng hôn bụi vàng.
**Nếu sai:** *"Same image, but above the gate there must be two plain WHITE lanterns hanging right next to two plain RED lanterns, no writing on any of them."*
```
Aspect ratio 16:9. Realistic photograph, dusk, autumn 1936, the main gate of a wealthy merchant family's courtyard house in a small town in Shanxi, northern China. Tall grey brick walls with a tiled roof ridge, a heavy double door lacquered black with two round brass knockers, a pair of weathered stone lions on low plinths. Hanging above the gate under the eaves: two plain WHITE paper funeral lanterns right next to two plain RED wedding lanterns, all four lit, none with any writing. A dusty yellow loess street, dry fallen poplar leaves, a wooden mule cart without a mule parked against the wall. Low golden-grey dusk light, slightly faded vintage colours, film grain. No people. No text, no letters, no Chinese characters, no couplets, no numbers, no watermark.
```

### 03. `tiem_hoang.jpg` (sổ bà mối, đêm 2)
**Đính kèm:** Không.
**Kiểm tra:** kho tối của bà mối âm: **một hàng dài áo cưới đỏ** treo trên sào như người đứng xếp hàng, **mỗi áo một thẻ gỗ trơn** (không chữ); quầy gỗ có **bàn tính**; một ngọn đèn dầu; góc tối thấp thoáng mép một quan tài gỗ mộc; không có người, không có xác.
**Nếu sai:** *"Same image, but the wooden tags on the gowns must be completely blank, and there must be no bodies or people."*
```
Aspect ratio 16:9. Realistic horror photograph, 1936 northern China, the dim back storeroom of a matchmaker who arranges ghost marriages. A long row of red embroidered bridal gowns hangs from a wooden pole across the room, at the height of a person, like a line of people standing and waiting; each gown has a small blank wooden tag hanging from a string, with nothing written on it. In the foreground, a worn wooden counter with a traditional Chinese abacus and a small oil lamp, its flame the only warm light. White paper funeral money scattered on the dirt floor. In the darkness at the back, the edge of a plain unpainted wooden coffin. No people, no bodies. Cold, musty, airless. Film grain. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 04. `ben_do.jpg` (lời Ôn Lão Tam, đêm 3)
**Đính kèm:** Không.
**Bố cục:** bờ đất ở **tiền cảnh bên trái**; xe la trống ở mép nước **giữa tiền cảnh**; sông nước vàng đục **giữa khung**; bên kia sông, **góc phải phía xa**, một miếu nhỏ có một ngọn đèn.
**Kiểm tra:** ban đêm, trăng mờ sau mây; **xe la bỏ trống, dây cương thả lỏng, không có con la**; thuyền đò gỗ buộc vào cọc; sương trên mặt nước; không người.
```
Aspect ratio 16:9. Realistic night photograph, late summer 1936, the ferry landing on the muddy yellow Fen River in Shanxi, China. Left foreground: an earthen bank with reeds and a wooden mooring post with a small wooden ferry boat tied to it. Centre foreground, at the water's edge: an empty two-wheeled wooden mule cart, abandoned, its leather reins hanging loose on the ground, NO mule. The wide river fills the middle of the frame, flat and dark with yellow-brown tints, thin mist on the water. Far across the river, in the right background, a tiny roadside shrine with one faint orange lamp. A dim moon behind thin clouds. Quiet, ominous, empty. Film grain. No people. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 05. `tay_xac.jpg` (phiếu khám xác, đêm 4)
**Đính kèm:** Không.
**Kiểm tra:** ảnh **đen trắng** kiểu hồ sơ cảnh sát 1930s chụp từ trên xuống; **bàn tay TRÁI** to khoẻ, da nhợt trương nước, **ngửa lòng**, có **vệt chai chéo** từ gốc ngón trỏ xuống mô ngón út; **cổ tay buộc sợi chỉ đỏ: thứ DUY NHẤT có màu**; ống tay áo lụa sẫm ướt; không máu.
**Nếu sai:**
- *"Same photo, but it must be the LEFT hand, palm up (thumb on the right side of the image)."*
- *"Same photo, but everything stays black and white except the thin thread around the wrist, which is bright red."*
```
Aspect ratio 4:3. 1930s police forensic photograph, black and white, grainy silver gelatin print with slightly burned edges, shot straight down from above. The LEFT hand and forearm of a drowned young man's body lying on a rough wooden plank on a muddy riverbank. Palm facing up, so the thumb points toward the right side of the image. The hand is broad, strong and working-class, the skin pale, swollen and wrinkled from days in water. Across the palm, a thick diagonal callus line runs from the base of the index finger down to the heel of the hand, like a mark worn by reins. Around the wrist is tied a single thin thread knotted in a small bow: the ONLY coloured element in the whole photograph, bright red. A wet, dark silk sleeve covers the forearm. Clinical, quiet, disturbing, not gory. No text, no letters, no Chinese characters, no numbers, no scale ruler, no watermark.
```

### 06. `linh_duong.jpg` (lời tộc trưởng, sáng 21) · bản chi tiết
**Vì sao phải làm lại:** lời Thuý Nhi kể "sáng nào hình nhân cũng quay mặt về phía Đông viện". Ảnh linh đường phải cho thấy điều đó: **đầu hình nhân quay hẳn sang phải, nhìn ra ô cửa tối ở mép phải**. Bản trước hình nhân nhìn thẳng ống kính.

#### Cách 1 (nhanh nhất): sửa ảnh đang có
**Đính kèm:** `linh_duong.jpg` (ảnh hiện tại), `00_mau_hinh_nhan.jpg`.
**Kiểm tra:**
- Mọi thứ khác **giữ y nguyên**: quan tài, bàn thờ, bài vị, nến, vải trắng và đỏ, ô cửa bên phải.
- **Chỉ đầu hình nhân** xoay khoảng 90 độ sang phải người xem. Ta thấy **nửa mặt bên trái** của nó (một má đỏ, một mắt vẽ, sống mũi), mắt nhìn về ô cửa.
- **Thân vẫn hướng ra trước**, hai tay buông thõng: đầu xoay mà thân không xoay, như cổ bị vặn.

**Nếu sai:**
- Thân xoay theo đầu: *"Keep the body facing forward exactly as before; ONLY the head is turned, like a twisted neck."*
- Vẫn nhìn ống kính: *"The painted eyes must NOT look at the camera; the face is in strict side profile, looking at the doorway on the right."*
```
Edit the first attached image. Keep EVERYTHING exactly the same: the same mourning hall, the same red lacquered coffin on trestles, the altar with the blank wooden tablet, the candles, fruit and steamed buns, the hanging strips of white funeral cloth and red silk, the open dark doorway with blue light at the right edge of the frame, the same camera angle, lighting and colours. Change ONLY the head of the paper bridegroom effigy on the left (the same effigy as in the second attached reference): turn its head about 90 degrees toward the right side of the image, into a strict side profile, so we see only the left half of its painted face, one round red cheek, one painted black eye and the profile of the nose, and its painted eye stares at the dark doorway on the right edge of the frame. Its body, blue paper gown and hanging arms stay facing forward, unchanged, so the head looks unnaturally twisted on the neck. A slight crease and a small tear in the paper at the side of the neck where it has turned. The painted eyes must not look at the camera. No text, no letters, no Chinese characters, no watermark.
```

#### Cách 2: tạo mới hoàn toàn
**Đính kèm:** `cover.jpg`, `00_mau_hinh_nhan.jpg`.
**Bố cục:** nhìn ngang, máy ngang tầm ngực.
- Quan tài đỏ **giữa khung**, trên hai mễ gỗ.
- Bàn thờ và bài vị **trơn** phía sau quan tài.
- Hình nhân đứng **bên trái**, cách quan tài một bước.
- **Ô cửa gỗ mở, tối, có ánh xanh** sát **mép phải** khung.
- Vải trắng và lụa đỏ treo xen nhau **dọc xà trên**.

**Kiểm tra:** giống phần kiểm tra ở cách 1. Thêm: không có người, không chữ trên bài vị và vải.
```
Aspect ratio 16:9. Realistic horror photograph, 1936, the ancestral mourning hall of a wealthy Shanxi family prepared for a ghost wedding, the same hall as in the first attached image. Eye-level camera at chest height, looking straight in. In the centre of the frame, the large deep-red glossy lacquered coffin on two wooden trestles. Behind it an altar table with a plain blank wooden ancestral tablet, two tall red candles, a bronze incense burner with smoking sticks, plates of apples and steamed buns. Long strips of white funeral cloth and red wedding silk hang side by side in rows from the roof beams across the top of the frame. At the right edge of the frame, a tall wooden lattice door stands open onto darkness with a faint cold blue light. On the LEFT side of the frame, one step from the coffin, stands the life-size paper bridegroom effigy from the second attached reference: dark blue paper gown, black paper shoes, black skullcap, white powdered paper face with round red cheeks. Its body and arms face forward toward the camera, stiff, but its HEAD is turned about 90 degrees to the right into a strict side profile, so we see only the left half of its painted face, one round red cheek and one painted black eye staring at the dark open doorway on the right edge of the frame; the paper at the side of its neck is creased and slightly torn where the head has twisted. The painted eye does not look at the camera. Warm candlelight, deep black shadows, incense smoke drifting toward the doorway. No people. Film grain. No text, no letters, no Chinese characters on the tablet, cloth or couplets, no watermark.
```

### 07. `dong_vien.jpg` (lời người gác đêm, đêm 21)
**Đính kèm:** Không.
**Kiểm tra:** cửa gỗ đôi của một viện nhỏ trong phủ, ban đêm; **ổ khoá đồng to và xích** ngang tay nắm; **ba lá bùa giấy vàng** dán ngang khe cửa, nét đỏ mờ **không đọc được**; **ánh đèn dầu lọt qua khe chân cửa**; **một khay với bát cơm đã ăn hết** đặt dưới đất cạnh cửa.
**Nếu sai:** *"Same image, but the three yellow talismans must have only blurry red strokes, no readable characters."*
```
Aspect ratio 16:9. Realistic night photograph, autumn 1936, Shanxi China, inside a rich family compound: the closed double wooden door of a small side courtyard building, seen straight on. A large old brass padlock and an iron chain wrapped across the two door handles. Three long yellow paper talismans pasted vertically across the gap between the doors, their red brush strokes blurred and unreadable. Warm orange oil-lamp light leaks from the narrow crack under the door onto the worn stone threshold. On the ground beside the door, a lacquered wooden tray with an empty rice bowl and a pair of chopsticks, the bowl scraped clean. Moonlight on the grey brick wall and a bare jujube tree branch. Silence, dread. Film grain. No people. No text, no readable letters or Chinese characters, no numbers, no watermark.
```

### 08. `hinh_nhan_scare.jpg` (cảnh doạ, đêm 19)
**Đính kèm:** `00_mau_hinh_nhan.jpg`.
**Kiểm tra:** cận mặt hình nhân giấy **lấp đầy khung**, mắt vẽ **nhìn thẳng ống kính**, nến từ dưới hắt lên, nền đen; giấy rách ở thái dương lộ nan tre.
```
Aspect ratio 1:1. Extreme close-up horror image: the face of the paper bridegroom effigy from the attached reference fills the whole frame. White powdered paper skin, two perfectly round red painted cheeks, thin painted black eyebrows, two painted black eyes staring straight into the camera, a tiny painted red smile. The paper is torn at the left temple, showing the bamboo ribs inside. Lit from below by a single candle, pitch-black background. Uncanny, frightening, as if it has just turned its head toward the viewer. Film grain. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 09. `dong_vien_scare.jpg` (cảnh doạ chính, đêm 21)
**Đính kèm:** `00_mau_thua_tu.jpg`.
**Kiểm tra:** qua **khe dọc hẹp giữa hai cánh cửa gỗ** thấy **một con mắt** của thanh niên gầy, đỏ ngầu, **đồng tử co nhỏ như đầu kim**, quầng mắt thâm; ánh đèn dầu yếu phía sau; không kính (kính đã bị lấy).
**Nếu sai:** *"Same image, but only ONE eye visible through a narrow vertical crack between two wooden door panels, no glasses, pupil shrunk to a pinpoint."*
```
Aspect ratio 1:1. Horror close-up: a narrow vertical crack between two old dark wooden door panels runs down the centre of the frame; everything else is wood grain in deep shadow. Through the crack, a single human eye of the young man from the attached reference (no glasses now) stares out at the camera from darkness. The eye is bloodshot, the pupil shrunk to a pinpoint from opium, deep dark hollows around it, a few strands of unwashed hair across the brow. A weak oil-lamp glow behind him. Desperate, haunted, pleading. Film grain. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 10. `co_dau_scare.jpg` (cảnh doạ khi chọn ở giờ Tý)
**Đính kèm:** `cover.jpg`, `00_mau_tu_nuong.jpg`.
**Kiểm tra:** **khăn trùm đỏ bị vén lên một nửa**: lộ **nửa dưới mặt** và **một con mắt** mở trừng không chớp; da trắng bệch, **môi tím thâm**, một vệt nước sẫm ở khoé miệng; cổ áo cưới đỏ thêu; nền đen; không máu me.
**Nếu sai:** *"Same image, but less gore: no blood, only very pale skin, dark bluish-purple lips and a thin line of dark liquid at the corner of the mouth."*
```
Aspect ratio 1:1. Horror close-up in candlelight: the same red silk bridal veil and red embroidered collar as the bride in the first attached image, the veil lifted halfway up from below, revealing the lower half of the face of the girl from the second attached reference and one of her eyes: deathly pale grey-white skin, lips dark bluish-purple, a thin line of dark liquid at one corner of the mouth, the visible eye wide open and unblinking, staring straight into the camera. Pitch-black background. Disturbing and sad, not gory, no blood. Film grain. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 11. `tan_phong_mo.jpg` (kết thúc Chân tướng)
**Đính kèm:** `00_mau_thua_tu.jpg`.
**Bố cục:** nhìn từ **ngưỡng cửa vừa phá** vào trong; mảnh gỗ cửa vỡ ở **mép trái**; giường chạm gỗ ở **giữa, phía sau**; bàn nhỏ có bàn đèn thuốc phiện ở **bên phải** giường.
**Kiểm tra:** phòng tân hôn bày lụa đỏ đã bám bụi; ánh **đuốc** từ ngoài rọi vào; thanh niên **gầy rộc, áo lót trắng bẩn, ngồi co gối trên giường, chân TRÁI bị xích vào chân giường**, nheo mắt nhìn ra ánh sáng; thấy từ xa, không cận mặt; không máu.
**Nếu sai:** *"Same image, but the chain must be on his LEFT ankle, fastened to the bed leg, and an opium lamp and long pipe must be on the small table next to the bed."*
```
Aspect ratio 16:9. Realistic photograph, night, autumn 1936, Shanxi: the view from a broken-open doorway into a bridal chamber. Splintered pieces of the wooden door at the left edge of the frame. Inside, a room once decorated for a wedding: faded red silk hangings and a red double-happiness paper cut on the wall, all grey with dust (the paper cut is a plain red shape, no readable character). Bright flickering torchlight from outside floods in across the floor. In the middle background, on a carved wooden canopy bed, sits the young man from the attached reference, now emaciated, hollow-cheeked, unshaven, in a dirty white cotton undershirt and loose trousers, hugging his knees; an iron chain runs from his LEFT ankle to the bed leg. On a small table to the right of the bed: an opium oil lamp and a long opium pipe. He squints toward the light, confused, his lips forming a name. Seen from a distance, no close-up, no gore. Film grain. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 12. `hop_tang.jpg` (kết thúc Hỉ tang)
**Đính kèm:** `cover.jpg` (để quan tài đỏ giống).
**Kiểm tra:** sáng sớm sương xám trên đồi hoàng thổ; **một huyệt mới**, trong đó **hai quan tài nằm cạnh nhau**: một **sơn son đỏ** (giống ảnh bìa), một **gỗ mộc trắng**; giấy tiền trắng và giấy đỏ rải lẫn trên đất vàng; xẻng cắm đất; không người.
```
Aspect ratio 16:9. Realistic photograph, early grey misty morning, autumn 1936, a family graveyard on a yellow loess hillside in Shanxi, with old grave mounds and bare jujube trees. In the centre foreground, a freshly dug rectangular grave pit; lying side by side inside it, two coffins: on the left, a deep-red lacquered coffin identical to the one in the attached image; on the right, a plain unpainted pale wooden coffin. White funeral paper money and torn red wedding paper are scattered together over the yellow earth around the pit. Two shovels stuck upright in the dirt pile. Nobody around. Desolate, silent, cold. Film grain. No people. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 13. `cho_thua_an.jpg` (kết thúc Cứu dâu)
**Đính kèm:** `00_mau_thua_tu.jpg`, `00_mau_phu_nhan.jpg`, `00_mau_tu_nuong.jpg`.
**Bố cục:** phố chợ nhìn dọc; ba người đi **giữa phố, cỡ vừa, hơi xa**; **tiền cảnh bên phải, mờ nét: gáy và bím tóc dài** của một cô gái đang nhìn theo.
**Kiểm tra:** thanh niên gầy **mặc áo gấm mới**, mặt trắng, mắt trống rỗng, **không kính**; bên trái anh là phu nhân áo lụa trắng **nắm chặt cánh tay anh**; bên phải là một quản gia béo áo đen; người dân cúi chào; cô gái ở tiền cảnh **không thấy mặt**.
**Nếu sai:** *"Same image, but the girl in the foreground must be seen only from behind (back of her head and her long braid), out of focus, on the right."*
```
Aspect ratio 16:9. Realistic photograph, morning, autumn 1936, the dusty market street of a small Shanxi town: vegetable stalls, baskets of persimmons, a mule cart, grey brick shopfronts with no signs. Walking down the middle of the street toward the camera, medium distance: in the centre, the thin young man from the first attached reference, without glasses, wearing a new expensive dark brocade jacket, his face pale and blank, eyes empty and unfocused; on his LEFT, the woman from the second attached reference in plain white silk, gripping his arm firmly; on his RIGHT, a stout middle-aged steward in a black jacket and skullcap. Townspeople on both sides bow slightly to them. In the RIGHT foreground, out of focus, the back of the head and the long single braid of the girl from the third attached reference, standing still, watching them pass; her face is not visible. Film grain. No text, no letters, no Chinese characters, no shop signs, no numbers, no watermark.
```

---

## Danh sách file
| # | Tên file | Dùng ở | Tỉ lệ |
|---|---|---|---|
| 00a–00d | `00_mau_tu_nuong`, `00_mau_thua_tu`, `00_mau_phu_nhan`, `00_mau_hinh_nhan` | (không vào game) | 16:9 |
| 01 | `cover.jpg` | Bìa | 3:4 |
| 02 | `phu_trieu.jpg` | Đêm 17 | 16:9 |
| 03 | `tiem_hoang.jpg` | Đêm 18 | 16:9 |
| 04 | `ben_do.jpg` | Đêm 19 | 16:9 |
| 05 | `tay_xac.jpg` | Đêm 20 | 4:3 |
| 06 | `linh_duong.jpg` | Sáng 21 | 16:9 |
| 07 | `dong_vien.jpg` | Đêm 21 | 16:9 |
| 08 | `hinh_nhan_scare.jpg` | Doạ, mở đêm 19 | 1:1 |
| 09 | `dong_vien_scare.jpg` | Doạ chính, mở đêm 21 | 1:1 |
| 10 | `co_dau_scare.jpg` | Doạ khi chọn ở giờ Tý | 1:1 |
| 11 | `tan_phong_mo.jpg` | Kết thúc Chân tướng | 16:9 |
| 12 | `hop_tang.jpg` | Kết thúc Hỉ tang | 16:9 |
| 13 | `cho_thua_an.jpg` | Kết thúc Cứu dâu | 16:9 |
