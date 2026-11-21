# Ảnh cho Hồ sơ 06 "Âm Hôn"

## Cách dùng file này
- Mỗi ô ảnh có **một prompt duy nhất**: chép nguyên khối, dán vào AI Studio là xong. Tỉ lệ khung hình đã ghi sẵn trong prompt (câu *Aspect ratio …*). Nếu AI Studio có ô chọn tỉ lệ thì chọn giống như vậy cho chắc.
- Dòng **Đính kèm** ghi ảnh nào phải gắn kèm trước khi gửi prompt. Ghi "Không" thì không gắn gì.
- Dòng **Kiểm tra** là những điểm phải đúng. Sai điểm nào thì gõ tiếp câu ở dòng **Nếu sai** trong cùng cuộc trò chuyện.
- Tạo theo đúng thứ tự từ trên xuống, trong **cùng một cuộc trò chuyện**.
- Đổi tên file đúng như tên ghi ở đầu mỗi ô, rồi gửi lên chat.

> **Mình tự làm, bạn không cần tạo:** canh thiếp, vạn niên lịch, sách tứ trụ, sổ bà mối kèm **bàn tính**, bảng giá, hối phiếu mật áp, Thiên Tự Văn, phiếu khám xác, Tẩy Oan Tập Lục, Ngũ phục đồ, sổ phát tang, tự điển bộ thủ, quá kế thư, gia phả, hôn thư. Những thứ có chữ Hán, chữ Việt và con số phải chính xác tuyệt đối, nên mình dựng bằng code.
>
> **Không có chữ trong ảnh:** AI vẽ chữ Hán hay sai. Mọi prompt đều cấm chữ. Đèn lồng, câu đối, bùa đều để trơn hoặc có nét mờ không đọc được.
>
> **Quy ước bên trái, bên phải:** "tay trái của anh ấy" là tay trái của nhân vật.
> - **Ôn Thạch (xác chết):** sợi **chỉ đỏ** buộc ở **cổ tay trái**; lòng bàn tay trái có vệt chai chéo; người vạm vỡ, vai rộng.
> - **Áo của Thừa Tự:** trường sam lụa **xanh lam đậm**, may cho người gầy.
> - **Tú Nương:** áo cưới đỏ, khăn trùm đầu đỏ, đi chân không. Không bao giờ lộ rõ mặt trong ảnh game (chỉ ảnh mẫu).

---

## Bước 0: ảnh mẫu nhân vật (không đưa vào game)

### 00a. `00_mau_tu_nuong.jpg`
**Đính kèm:** Không.
**Kiểm tra:** cô gái 16 tuổi miền Bắc Trung Hoa thập niên 1930, nghèo, gầy, tóc tết một bím dài, mắt sưng, môi nứt; áo vải thô xanh chàm.
```
Aspect ratio 16:9. Character reference sheet on a plain mid-grey background, even soft studio light, realistic photograph. The same 16-year-old Chinese peasant girl from Shanxi province in 1936 shown three times side by side: front view head and shoulders, three-quarter view, full body. Thin face, high cheekbones, sun-darkened skin, swollen red eyelids from crying, chapped bitten lower lip, one long black braid down her back. She wears a faded indigo-blue coarse cotton jacket with cloth knot buttons and black cotton trousers, barefoot. A thin red thread is tied around nothing; her hands are empty and rough. Expression: blank, resigned, eyes looking slightly past the camera. No text, no letters, no numbers, no watermark.
```

### 00b. `00_mau_thua_tu.jpg`
**Đính kèm:** Không.
**Kiểm tra:** thanh niên 19 tuổi, thư sinh, rất gầy, da tái, trường sam lụa xanh lam đậm; vai hẹp.
```
Aspect ratio 16:9. Character reference sheet on a plain mid-grey background, even soft studio light, realistic photograph. The same 19-year-old Chinese young man, son of a wealthy Shanxi banking family in 1936, shown three times side by side: front view head and shoulders, three-quarter view, full body. Very thin, narrow shoulders, pale scholar's skin, short neat black hair, round wire glasses held in his hand, soft hands with an ink callus on the right middle finger. He wears a dark sapphire-blue silk long gown (changshan) that fits his slim body exactly. Shy, gentle expression. No text, no letters, no numbers, no watermark.
```

### 00c. `00_mau_phu_nhan.jpg`
**Đính kèm:** Không.
**Kiểm tra:** phụ nữ 49 tuổi, nhà giàu, búi tóc chặt, áo trắng trơn (không phải đồ tang gai), mặt bình thản lạnh lẽo.
```
Aspect ratio 16:9. Character reference sheet on a plain mid-grey background, even soft studio light, realistic photograph. The same 49-year-old Chinese woman, mistress of a wealthy Shanxi household in 1936, shown three times side by side: front view head and shoulders, three-quarter view, full body. Tight low bun with a single silver hairpin, thin plucked eyebrows, thin lips, perfectly calm face, eyes that do not blink. She wears a plain white silk jacket and skirt with no decoration (not coarse hemp mourning clothes), a jade bracelet on her right wrist, a small brass key on a red cord around her neck. No text, no letters, no numbers, no watermark.
```

---

## Bước 1: ảnh trong game

### 01. `cover.jpg`
**Đính kèm:** `00_mau_tu_nuong.jpg`.
**Kiểm tra:** cô dâu áo đỏ trùm khăn đỏ, chân không, đứng giữa linh đường tối; bên cạnh là quan tài sơn son và hình nhân giấy chú rể; đèn lồng trắng và đỏ lẫn lộn. Không thấy mặt cô dâu.
**Nếu sai:** *"Same image but the bride's face must be completely hidden under the red veil, and she must be barefoot."*
```
Aspect ratio 3:4. Cinematic horror photograph, 1930s rural Shanxi China, night, inside a traditional ancestral hall lit only by candles and paper lanterns. In the centre stands a young bride in a traditional red embroidered wedding dress, her head and face completely covered by a red silk veil, barefoot on cold stone tiles, the girl from the attached reference. Beside her a large coffin lacquered deep red. On the other side of the coffin, a life-size paper effigy of a bridegroom in a blue paper gown, painted face, standing stiffly. Overhead, white funeral lanterns and red wedding lanterns hang mixed together. Smoke from incense, deep shadows, cold blue moonlight from a doorway behind. Dread, stillness. No text, no letters, no Chinese characters, no numbers, no watermark.
```

### 02. `phu_trieu.jpg`
**Đính kèm:** Không.
**Kiểm tra:** cổng nhà giàu Sơn Tây, tường gạch xám cao, đèn lồng trắng (tang) treo cạnh đèn lồng đỏ (cưới), buổi chiều tối.
```
Aspect ratio 16:9. Realistic photograph, 1936, a wealthy merchant family's courtyard house gate in a small town in Shanxi, northern China: tall grey brick walls, heavy black lacquered wooden doors with brass knockers, stone lions. Above the gate, two white paper funeral lanterns hang right next to two red wedding lanterns. Dusty street, dry poplar leaves, dusk light, a lone mule cart parked by the wall. Slightly faded vintage photo colours. No text, no letters, no Chinese characters on the lanterns or the gate, no watermark.
```

### 03. `tiem_hoang.jpg`
**Đính kèm:** Không.
**Kiểm tra:** kho tối, hàng áo cưới đỏ treo thành dãy, mỗi áo một thẻ gỗ trơn; một chiếc bàn tính trên quầy; không có xác người.
```
Aspect ratio 16:9. Realistic horror photograph, 1930s northern China, the dim back storeroom of a matchmaker for ghost marriages. A long row of red bridal gowns hang from a wooden rail like people standing in line, each with a small blank wooden tag on a string. Paper coins scattered on the floor, a wooden abacus on a worn counter, a single oil lamp. In the darkness at the back, the edge of a plain unpainted coffin. No people, no corpses visible. Cold, musty atmosphere. No text, no letters, no Chinese characters, no numbers on tags, no watermark.
```

### 04. `ben_do.jpg`
**Đính kèm:** Không.
**Kiểm tra:** bến đò sông Phần ban đêm, nước đục vàng, bờ đất; bên kia sông là một miếu nhỏ có đèn; một chiếc xe la trống bỏ lại.
```
Aspect ratio 16:9. Realistic night photograph, 1936, a ferry landing on the muddy yellow Fen River in Shanxi, China. Earthen bank, a wooden ferry boat tied to a post, reeds. An empty mule cart stands abandoned at the water's edge, its reins hanging loose, no mule. Across the river a tiny roadside shrine with one faint lamp. Faint moon behind thin clouds, mist on the water. Quiet, ominous. No people, no text, no letters, no Chinese characters, no watermark.
```

### 05. `tay_xac.jpg`
**Đính kèm:** Không.
**Kiểm tra:** ảnh đen trắng kiểu hồ sơ cảnh sát 1930s: bàn tay **trái** của xác đàn ông, da nhợt trương, lòng bàn tay có vệt chai chéo, **cổ tay trái buộc sợi chỉ đỏ** (chỉ sợi chỉ có màu đỏ, phần còn lại đen trắng); tay áo lụa xanh đậm.
**Nếu sai:** *"Same image but it must be the LEFT hand, palm up, with a thin red thread tied around the wrist; the rest of the photo stays black and white."*
```
Aspect ratio 4:3. 1930s police forensic photograph, black and white, grainy, shot from above: the LEFT hand of a drowned man's body lying on a wooden board on a muddy riverbank. The hand is broad and strong, the skin pale, swollen and wrinkled from water, palm turned up, showing a thick diagonal callus line across the palm from the base of the index finger to the heel of the hand, like a mark from reins. Around the wrist is tied a thin thread, the ONLY coloured element in the photo: bright red. A wet dark silk sleeve covers the forearm. Clinical, disturbing, not gory. No text, no letters, no numbers, no watermark.
```

### 06. `linh_duong.jpg`
**Đính kèm:** Không.
**Kiểm tra:** linh đường: quan tài sơn son, bài vị trơn không chữ, hình nhân giấy chú rể **quay mặt sang một bên** (về phía cửa bên phải), đèn trắng và đỏ.
```
Aspect ratio 16:9. Realistic horror photograph, 1936, the mourning hall of a wealthy Shanxi family prepared for a ghost wedding. A deep red lacquered coffin on trestles, a blank wooden ancestral tablet on an altar with candles and incense, offerings of fruit and steamed buns. A life-size paper bridegroom effigy in a blue paper gown stands beside the coffin, but its painted face is turned sideways, staring toward a dark doorway on the right edge of the frame. White funeral cloth and red wedding silk hang side by side from the beams. Candlelight, deep shadows. No people, no text, no letters, no Chinese characters, no watermark.
```

### 07. `dong_vien.jpg`
**Đính kèm:** Không.
**Kiểm tra:** cửa gỗ đôi của một viện nhỏ, khoá đồng to, dán ba lá bùa vàng trơn; ánh đèn dầu lọt qua khe chân cửa; ban đêm.
```
Aspect ratio 16:9. Realistic night photograph, 1936 Shanxi China, the closed double wooden door of a small side courtyard building inside a rich family compound. A large old brass padlock and chain across the door handles. Three yellow paper talismans pasted across the gap of the door, their markings blurred and unreadable. Warm oil-lamp light leaks from the crack under the door onto the stone threshold. A tray with an empty rice bowl sits on the ground beside the door. Silence, dread. No people, no text, no readable letters or Chinese characters, no watermark.
```

### 08. `hinh_nhan_scare.jpg`
**Đính kèm:** Không.
**Kiểm tra:** cận mặt hình nhân giấy chú rể, mặt vẽ phấn trắng má đỏ, mắt vẽ mực **nhìn thẳng ống kính**; ảnh doạ.
```
Aspect ratio 1:1. Extreme close-up horror image: the face of a Chinese paper funeral effigy of a bridegroom, made of paper and bamboo, white powdered paper skin, two round red painted cheeks, thin painted black eyebrows, painted black eyes staring straight into the camera, a tiny painted red smile. The paper is slightly torn at the temple, showing bamboo ribs inside. Candlelight from below, black background. Uncanny, frightening. No text, no letters, no Chinese characters, no watermark.
```

### 09. `dong_vien_scare.jpg`
**Đính kèm:** `00_mau_thua_tu.jpg`.
**Kiểm tra:** qua khe cửa hẹp thấy một con mắt người thanh niên gầy, đỏ ngầu, đồng tử co nhỏ (thuốc phiện), nhìn ra; ảnh doạ.
```
Aspect ratio 1:1. Horror close-up: through a narrow vertical crack between two old wooden door panels, a single human eye of the young man in the attached reference stares out at the camera from darkness. The eye is bloodshot, the pupil shrunk to a pinpoint from opium, dark hollow skin around it, a few strands of unwashed hair. Weak oil-lamp glow behind him. Desperate, haunted. No text, no letters, no Chinese characters, no watermark.
```

### 10. `co_dau_scare.jpg`
**Đính kèm:** `00_mau_tu_nuong.jpg`.
**Kiểm tra:** khăn trùm đỏ của cô dâu bị vén lên một nửa; dưới khăn là khuôn mặt tái nhợt, môi thâm tím (độc), mắt mở trừng; ảnh doạ, không máu me.
```
Aspect ratio 1:1. Horror close-up in candlelight: a red silk bridal veil lifted halfway, revealing the lower half of a young bride's face, the girl from the attached reference: deathly pale skin, lips dark bluish-purple, a thin line of dark liquid at the corner of the mouth, and one wide-open unblinking eye visible under the edge of the veil. Red embroidered collar. Black background. Disturbing, not gory. No text, no letters, no Chinese characters, no watermark.
```

### 11. `tan_phong_mo.jpg` (kết thúc Chân tướng)
**Đính kèm:** `00_mau_thua_tu.jpg`.
**Kiểm tra:** cửa vừa phá, ánh đuốc từ ngoài rọi vào phòng tân hôn bày đồ đỏ; trên giường một thanh niên gầy rộc ngồi co, chân xích vào chân giường, bàn đèn thuốc phiện; nhìn từ cửa, thấy người từ xa.
```
Aspect ratio 16:9. Realistic photograph, night, 1936 Shanxi: view from a broken-open doorway into a bridal chamber decorated in red silk that has gone dusty. Torchlight from outside floods in. On a carved wooden bed sits the thin young man from the attached reference, emaciated, hollow-cheeked, in a dirty white undershirt, hugging his knees, his left ankle chained to the bed leg. An opium lamp and pipe on a small table beside the bed. He looks toward the light, squinting, confused. Seen from a distance, no gore. No text, no letters, no Chinese characters, no watermark.
```

### 12. `hop_tang.jpg` (kết thúc Hỉ tang)
**Đính kèm:** Không.
**Kiểm tra:** buổi sáng sương, một huyệt mộ đất mới, hai quan tài nằm cạnh nhau (một sơn son, một mộc trắng), giấy tiền trắng và giấy đỏ rải lẫn.
```
Aspect ratio 16:9. Realistic photograph, early grey misty morning, 1936, a family graveyard on a loess hillside in Shanxi. A freshly dug grave pit with two coffins lying side by side inside it: one lacquered deep red, one plain unpainted wood. White funeral paper money and red wedding paper scattered together on the yellow earth. Shovels stuck in the dirt, nobody around. Desolate, silent. No people, no text, no letters, no Chinese characters, no watermark.
```

### 13. `cho_thua_an.jpg` (kết thúc Cứu dâu)
**Đính kèm:** `00_mau_thua_tu.jpg`, `00_mau_phu_nhan.jpg`.
**Kiểm tra:** chợ trấn nhỏ buổi sáng; thanh niên gầy mặc áo gấm mới đi giữa bà phu nhân áo trắng và một ông quản gia; mắt trống rỗng; chụp từ xa, hơi chéo.
```
Aspect ratio 16:9. Realistic photograph, morning, 1936, the dusty market street of a small Shanxi town with vegetable stalls and mule carts. Walking down the middle of the street, seen from a distance: the thin young man from the first attached reference, now in a new expensive brocade jacket, his face pale and blank, eyes empty; on one side of him the woman from the second attached reference in plain white silk, holding his arm firmly; on the other side a stout middle-aged steward in a black jacket. Townspeople bow to them. In the foreground, out of focus, the back of a peasant girl's head with a long braid, watching. No text, no letters, no Chinese characters, no watermark.
```
