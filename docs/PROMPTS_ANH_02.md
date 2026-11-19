# Ảnh cho Hồ sơ 02 "Đêm giỗ Tổ" · bản 2 (đồng bộ nhân vật, tăng kinh dị)

## Cách làm để ảnh không lệch nhau
1. **Tạo ảnh mẫu trước (bước 0).** Tạo ảnh `00_mau_nhan_vat` bên dưới. Ảnh này không đưa vào game, chỉ dùng làm mẫu.
2. **Ở mọi ảnh có nhân vật hát bội**, bấm nút **đính kèm ảnh** trong AI Studio và gắn ảnh mẫu đó vào. Prompt đã có câu *"Match the costumes and face paint of the attached reference sheet exactly"*.
3. **Không sửa các đoạn viết HOA** ([QUAN CONG], [CHAU THUONG], [STYLE VHS]…). Các đoạn đó được chép y nguyên vào mọi prompt để AI giữ đúng màu và trang phục.
4. Tạo ảnh trong **cùng một cuộc trò chuyện** trên AI Studio. Ảnh sau sẽ "nhớ" ảnh trước. Ảnh nào lệch màu áo hay sai tay cầm đao thì bảo AI: *"Same image but fix: …"*.
5. Đổi tên file đúng như ghi ở từng mục rồi gửi lên chat.

---

## Bảng nhân vật (đã được chép sẵn vào các prompt bên dưới)

| Nhân vật | Mặt | Trang phục | Đạo cụ |
|---|---|---|---|
| **Quan Công** (Kép Kiệt) | Son **đỏ thẫm** phủ kín mặt, mày đen vẽ xếch lên, **râu đen thẳng dài tới ngực** | Áo bào **xanh lá đậm** thêu rồng vàng, mũ kim khôi xanh lá có **quả cầu nhung đỏ**, sau lưng 4 lá **cờ tam giác xanh lá viền vàng** | tay không |
| **Châu Thương** (Ba Thông / Tư Hòa) | Sơn **đen bóng** kín mặt, **mày trắng dày**, viền mắt trắng, râu xồm đen ngắn | Áo bào **xanh dương đậm** viền bạc, khăn chít đầu đen có **một quả cầu nhung đỏ** | cầm **Thanh Long đao**: cán gỗ nâu sẫm, lưỡi bạc hình trăng khuyết, đầu rồng xanh ở chân lưỡi |
| **Khổng Tú / Tần Kỳ** (Lợi) | Phấn **trắng bệch**, mày đen mảnh, môi đỏ | Áo bào **tím** | gươm |
| **Phu nhân** (Út Nhàn) | Phấn hồng nhạt | Áo cung đình **hồng phấn và trắng**, mũ kết hạt cườm | |
| **Sân khấu** | | Sàn ván gỗ; phông **nhung đỏ sẫm viền tua vàng**; hai bóng đèn tròn vàng treo trần và đèn dầu; cánh gà trái có trống chiến lớn; trước sân khấu là trống chầu trên giá ba chân, ông già áo dài đen khăn đóng ngồi cạnh | |

---

### 00. `00_mau_nhan_vat.jpg`, tỉ lệ 16:9 (ảnh mẫu, không đưa vào game)
```
Character reference sheet, plain dark grey background, full body front view, three Vietnamese hát bội (classical opera) actors standing side by side, 1993:
[QUAN CONG] face fully painted deep crimson red, black eyebrows painted sweeping upward, long straight black beard reaching the chest, dark green brocade robe with gold dragon embroidery, dark green helmet with red velvet pompoms, four triangular dark green flags with gold borders on his back, empty hands.
[CHAU THUONG] face fully painted glossy black, thick white eyebrows, white outlines around the eyes, short bushy black beard, dark royal blue robe with silver trim, black cloth turban with one red velvet pompom, holding a guandao halberd in his right hand: dark brown wooden shaft, silver crescent blade, green dragon head at the base of the blade.
[KHONG TU] face painted chalk white, thin black eyebrows, red lips, purple robe, holding a sword.
Even studio light, sharp, realistic, accurate costumes. No text, no letters, no numbers, no watermark.
```

---

## Đoạn phong cách dùng chung (đã chép vào từng prompt)
- **[STYLE VHS]** = `Frame grabbed from a 1993 home VHS camcorder tape, 4:3, filmed from the audience, soft focus, color bleeding, horizontal noise lines, crushed blacks, warm yellow tungsten light from bare bulbs, highlights slightly blown out, ominous and unsettling atmosphere.`
- **[STYLE FLASH]** = `35mm Konica color negative film snapshot, harsh on-camera flash, subject lit flat while the background falls into deep black, heavy grain, slightly warm color cast, 1993.`
- **[STAGE]** = `a makeshift wooden opera stage inside a Mekong Delta village communal house at night: wooden plank floor, dark red velvet backdrop curtain with gold fringe, two bare yellow light bulbs hanging from the roof, kerosene lamps at the edge, incense smoke drifting.`
- Kết thúc mọi prompt bằng: `No text, no letters, no numbers, no watermark.`

---

## A. Băng VHS đêm diễn

### 1. `cover.jpg`, tỉ lệ 16:9
```
Match the costumes and face paint of the attached reference sheet exactly. Cinematic horror film still. [STAGE] Center stage: [QUAN CONG] face fully painted deep crimson red, long straight black beard, dark green brocade robe with gold dragons, dark green helmet with red pompoms, four dark green flags on his back. He is bent backwards rigidly like a bow, only head and heels touching the floor, fingers clawed toward his own face, mouth stretched into a terrible frozen grin, eyes wide open staring at the dark right wing of the stage. In the right wing, barely visible in the shadow, a second identical Quan Cong figure stands perfectly still. Foreground left, out of focus: a ceremonial drum on a tripod with two drumsticks lying on it. Deep shadows, red and green palette, film grain. No text, no letters, no numbers, no watermark.
```

### 2. `vhs_dinh.jpg`, tỉ lệ 4:3
```
[STYLE VHS] The yard of a Vietnamese village communal house with a curved tiled roof at night, hundreds of villagers on wooden benches and straw mats facing a lit opera stage in the distance, children, conical hats, strings of small bulbs, incense smoke. Faces of the crowd half in shadow, one old woman in the foreground turned around staring straight into the camera. No text, no letters, no numbers, no watermark.
```

### 3. `vhs_lop1.jpg`, tỉ lệ 4:3
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE VHS] [STAGE] Three actors: on the left [QUAN CONG] deep crimson red face, long straight black beard, dark green brocade robe, dark green helmet with red pompoms, dark green flags on his back; in the middle [CHAU THUONG] glossy black face, thick white eyebrows, dark royal blue robe, black turban with one red pompom, holding a guandao halberd with a silver crescent blade in his right hand, his right hand wrapped in white gauze bandage; on the right [KHONG TU] chalk white face, purple robe. No text, no letters, no numbers, no watermark.
```

### 4. `vhs_nghi.jpg`, tỉ lệ 4:3
```
[STYLE VHS] [STAGE] The stage is empty during an interval, the red curtain half drawn. A guandao halberd with a silver crescent blade leans against a wooden chair center stage. On the left edge, two musicians in shadow beat a large war drum. The right wing of the stage is pitch black, and deep inside that blackness there is a faint red oval like a painted face, almost invisible. Dust floating in the bulb light. No text, no letters, no numbers, no watermark.
```

### 5. `vhs_lop2.jpg`, tỉ lệ 4:3
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE VHS] [STAGE] Battle scene, motion blur: [QUAN CONG] deep crimson red face, long straight black beard, dark green brocade robe and helmet with red pompoms, sweeping an arm toward [KHONG TU] chalk white face, purple robe, who stumbles back. Behind them [CHAU THUONG] glossy black face, thick white eyebrows, dark royal blue robe, black turban with one red pompom, holding the guandao halberd, standing stiffly and awkwardly as if unsure of his part. Two court ladies in pale pink and white robes at the back. No text, no letters, no numbers, no watermark.
```

### 6. `vhs_lop3.jpg`, tỉ lệ 4:3
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE VHS] [STAGE] [QUAN CONG] deep crimson red face, long straight black beard, now in dark green armor with gold scales and the same dark green helmet with red pompoms, singing center stage, sweat running through the red paint, his eyes strangely unfocused. Behind him [CHAU THUONG] glossy black face, thick white eyebrows, dark royal blue robe, black turban with one red pompom, holding the guandao halberd, right hand wrapped in white gauze. [TAN KY] chalk white face, purple robe, kneeling. No text, no letters, no numbers, no watermark.
```

### 7. `vhs_guc.jpg`, tỉ lệ 4:3 (kinh dị)
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE VHS] [STAGE] Horror: [QUAN CONG] deep crimson red face paint smeared and scratched with long finger marks, long black beard, dark green armor and helmet with red pompoms, lies on the wooden floor with his back arched rigidly upward like a bow, only his head and heels touching the boards, his fingers clawed, his jaw locked in a wide rigid grin, eyes rolled toward the right wing. Actors in painted faces (glossy black face in royal blue, chalk white face in purple) rush in but freeze a step away, afraid to touch him. The audience stands up as dark silhouettes. Harsh yellow light, motion blur. Disturbing, not gory. No text, no letters, no numbers, no watermark.
```

### 8. `vhs_ma.jpg`, tỉ lệ 4:3 (kinh dị)
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE VHS] The camera has panned to the right wing of the stage, almost completely black. Standing in the darkness, lit only by a thin slice of yellow bulb light: [QUAN CONG] face fully painted deep crimson red, long straight black beard, dark green brocade robe with gold dragons faded and old, dark green helmet with red pompoms, perfectly still, arms at his sides, staring straight into the lens with completely black eyes. The robe looks old and damp. Heavy VHS noise and tracking lines. No text, no letters, no numbers, no watermark.
```

---

## B. Ảnh phim của Phát (chụp flash, 3 ảnh quan trọng nhất)
**⚠ Kiểm tra kỹ:** Châu Thương quay mặt ra máy ảnh, nên **tay phải nằm bên trái khung hình**. Đao phải nằm trong tay đó.

### 11. `anh_09.jpg`, tỉ lệ 4:3 (QUAN TRỌNG: tay phải có băng)
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE FLASH] Medium shot from the audience: [CHAU THUONG] face fully painted glossy black, thick white eyebrows, white outlines around the eyes, short bushy black beard, dark royal blue robe with silver trim, black turban with one red velvet pompom. He faces the camera and holds the guandao halberd (dark brown wooden shaft, silver crescent blade, green dragon head) raised diagonally in his RIGHT hand, which appears on the LEFT side of the picture. That right hand is wrapped completely in thick white gauze bandage, only the fingertips showing. His left hand is bare. Dark red curtain behind, falling to black. No text, no letters, no numbers, no watermark.
```

### 12. `anh_14.jpg`, tỉ lệ 4:3 (QUAN TRỌNG: tay phải để trần)
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE FLASH] Medium shot from the audience: [CHAU THUONG] face painted glossy black but slightly uneven and patchy at the jaw, thick white eyebrows, white outlines around the eyes, short bushy black beard, dark royal blue robe with silver trim, black turban with one red velvet pompom. He faces the camera and holds the guandao halberd (dark brown wooden shaft, silver crescent blade, green dragon head) raised diagonally in his RIGHT hand, which appears on the LEFT side of the picture. Both hands are BARE, no bandage at all, skin clearly visible gripping the shaft. Behind the black paint his eyes look young and frightened. Dark red curtain behind, falling to black. No text, no letters, no numbers, no watermark.
```

### 13. `anh_17.jpg`, tỉ lệ 4:3 (QUAN TRỌNG: tay phải có băng)
```
Match the costumes and face paint of the attached reference sheet exactly. [STYLE FLASH] Medium shot from the audience: [CHAU THUONG] face fully painted glossy black, thick white eyebrows, white outlines around the eyes, short bushy black beard, dark royal blue robe with silver trim, black turban with one red velvet pompom, in a confident fighting pose, holding the guandao halberd in his RIGHT hand (on the LEFT side of the picture). That right hand is wrapped in white gauze bandage, slightly stained. His eyes are calm and cold. Behind him, out of focus, [QUAN CONG] deep crimson red face, black beard, dark green armor, swaying unsteadily. No text, no letters, no numbers, no watermark.
```

### 14. `anh_19.jpg`, tỉ lệ 4:3
```
[STYLE FLASH] An accidental, badly underexposed photo of the dark right wing of the stage: almost entirely black, a sliver of dark red curtain at the left edge, and deep in the darkness, catching the very edge of the flash, a red painted face and a long black beard, too high up, as if the figure were standing on something. Heavy grain. No text, no letters, no numbers, no watermark.
```

---

## C. Hiện trường và bằng chứng

### 9. `buong_tro.jpg`, tỉ lệ 16:9
```
[STYLE FLASH] Police evidence photograph at dawn: interior of a makeshift dressing room of a traditional opera troupe, a thatched shed with bamboo-strip walls, wide angle, everything visible. Back center: a high wooden altar with three small blue-and-white porcelain tea cups in a row, the middle cup with grey residue, an incense bowl with burnt-out sticks, betel leaves, two oil lamps. Left of the altar: a roasted pig head on a tray, rotting, flies on it. Far left on the wall: a small wooden-framed mirror with tarnished silvering, below it a low makeup table covered with little dishes of red, black and white face paint and brushes. On the right: a heavy old dark wooden trunk with a brass padlock. Upper middle: a guandao halberd leaning on the wall. Bottom right corner: a rolled straw mat and a crumpled blanket. Far right: a back door of woven bamboo half open onto darkness. Flat flash, harsh shadows, oppressive. No text, no letters, no numbers, no watermark.
```

### 10. `cho_chet.jpg`, tỉ lệ 4:3 (ghê)
```
[STYLE FLASH] Grim police evidence photo, early morning: a dead yellow village dog on wet mud behind a bamboo wall, body rigid, legs stretched stiffly backward, neck bent back toward its spine, lips pulled back baring all the teeth in a grin, eyes open and dull. A line of red fire ants crawling into its mouth and nostrils. Wet tea leaves in the mud. On the bamboo wall behind, a faint red handprint. Disturbing, not bloody. No text, no letters, no numbers, no watermark.
```

### 15. `chuot.jpg`, tỉ lệ 4:3 (ghê)
```
[STYLE FLASH] Close-up police evidence photo on a wooden table: an old glass jar with a rusty tin lid, inside three dead dried rats, bodies arched rigidly backward, legs stiff, mouths open baring yellow teeth, fur matted, bread crumbs and grey powder at the bottom, condensation on the glass. Repulsive, documentary. No text, no letters, no numbers, no label, no watermark.
```

### 16. `thuy_ve.jpg`, tỉ lệ 4:3
```
A child's colored-pencil drawing on cheap lined school paper by a frightened 12-year-old girl: a dark room colored with heavy black pencil, a small brown altar with three tea cups, the middle cup colored grey. A tall barefoot man in a dark blue robe whose face is a completely blank white oval with NO eyes, NO nose, NO mouth; his right hand is wrapped in white cloth, his left hand sprinkles grey dots into the middle cup. In the corner a tiny girl under a blanket, only her big eyes showing. Shaky lines, some red pencil scribbles, the paper wrinkled and smudged. No text, no letters, no numbers, no watermark.
```

---

## D. Chân dung

### 17. `kiet.jpg`, tỉ lệ 3:4
```
1990s Vietnamese studio portrait photo, slightly faded color: a handsome 38-year-old Mekong Delta opera actor, confident charming smile, slicked-back black hair, white shirt with an open collar, light blue backdrop. Not a real person. No text, no letters, no numbers, no watermark.
```

### 18. `thong.jpg`, tỉ lệ 3:4
```
[STYLE FLASH] 1993 police record photo against a plain grey wall: a 35-year-old Vietnamese man, lean face, short black hair, plain light grey shirt, a small bright red mole one centimeter below the outer corner of his LEFT eye (right side of the picture), a horizontal scar across the back of his left hand, his right hand wrapped in white gauze held against his chest. Expression completely calm, eyes cold, the faintest smile. Not a real person. No text, no letters, no numbers, no watermark.
```

### 19. `hai_lanh.jpg`, tỉ lệ 3:4
```
Very old 1962 black-and-white photograph, scratched, water-stained, corners torn: a Vietnamese hát bội actor in the full Quan Cong costume (painted face appearing dark grey, long straight black beard, embroidered robe, helmet with pompoms, triangular flags behind), studio portrait, staring intensely at the viewer, the eyes slightly too bright. Not a real person. No text, no letters, no numbers, no watermark.
```

---

## E. Kết và các cảnh doạ (chỉ hiện khi chọn "Mức rợn: Đầy đủ")
Các ảnh doạ dùng chung khuôn mặt Quan Công cho nhất quán: **son đỏ thẫm, râu đen thẳng, mắt đen đặc**.

### 20. `ket.jpg`, tỉ lệ 16:9
```
[STAGE] The same stage now empty and dark after midnight, only one kerosene lamp still burning. Foreground center: a large ceremonial drum on a wooden tripod; on its pale drum skin, three fresh red handprints, dripping. Behind it, at the back of the stage, a dark green Quan Cong robe hangs from a beam like a person, its sleeves moving slightly. Incense smoke, silence, film grain. No text, no letters, no numbers, no watermark.
```

### 21. `vhs_ma_close.jpg`, tỉ lệ 1:1 (doạ)
```
Match the face paint of the attached reference sheet. [STYLE VHS] Extreme close-up out of total darkness: the Quan Cong face, deep crimson red paint cracked like dry mud, long straight black beard, dark green helmet edge with a red pompom, eyes completely black and wet, mouth stretched into a rigid grin showing teeth, pressed almost against the lens. Heavy VHS noise. Terrifying, not gory. No text, no letters, no numbers, no watermark.
```

### 22. `mat_do.jpg`, tỉ lệ 1:1 (doạ)
```
Horror close-up: a tarnished wooden-framed mirror in a dark bamboo dressing room lit by one candle; in the mirror a face covered in wet crimson red face paint that runs down from the eyes like blood, long straight black beard, eyes milky white and blank, mouth open in a silent scream. Not gory. No text, no letters, no numbers, no watermark.
```

### 23. `guong.jpg`, tỉ lệ 1:1 (doạ)
```
Match the costumes and face paint of the attached reference sheet. Horror image: a tarnished mirror in a dark bamboo dressing room; reflected in it, right behind the viewer's shoulder, leaning very close, [QUAN CONG] deep crimson red face, long straight black beard, dark green helmet with red pompoms, black eyes, smiling. Dim candle light, heavy grain. No text, no letters, no numbers, no watermark.
```

### 24. `quan_cong.jpg`, tỉ lệ 1:1 (doạ chính, bản chi tiết)
Đây là cảnh doạ chính, bật lên toàn màn hình kèm tiếng hét. Có hai bản: thử **bản A** trước; nếu AI từ chối vì quá ghê thì dùng **bản B** (nhẹ máu hơn, vẫn rợn).

**Bản A (ghê nhất):**
```
Match the face paint of the attached reference sheet. Extreme close-up horror photograph, the face fills the whole square frame, shot from slightly below, lit by a single kerosene lamp from under the chin so the light hits the jaw and nostrils and the eye sockets fall into shadow, pure black background.
The face of a dead hát bội opera actor in Quan Cong make-up: the deep crimson red face paint is thick and glossy, cracked like dried riverbed mud, and has been torn away in four long parallel strips by his own fingernails, from the forehead down across one cheek to the jaw; underneath the paint the skin is raw, pale grey-white and wet, the edges of the scratches curling. Red paint and dark clotted blood are packed under the fingernail marks.
The eyes are rolled up so far that only bloodshot whites show, tiny burst blood vessels, the lower eyelids pulled down; red paint has run into the eyes like tears.
The jaw is locked rigid in a wide unnatural grin pulled too far toward the ears, the lips split at the corners, the teeth clenched so hard two front teeth have cracked; through the teeth the tip of a bitten, half-severed tongue, dark blood and saliva hanging in strings down the long black beard.
The long straight black beard is wet, clumped and matted with blood and red paint. The black painted eyebrows sweep up into the shadow. The edge of a dark green helmet with a red velvet pompom is visible at the top, slightly askew; a few strands of real grey hair stick out from under it, wet with sweat.
Neck tendons strained like cords, veins bulging at the temples, beads of sweat mixed with paint.
Photorealistic, 35mm film grain, harsh contrast, deep crimson and sickly green tones, nauseating and terrifying, like a forensic photo taken seconds after death. No text, no letters, no numbers, no watermark.
```

**Bản B (khi bản A bị từ chối):**
```
Match the face paint of the attached reference sheet. Extreme close-up horror portrait filling the square frame, lit from below by a single oil lamp, pure black background. The face of a dead opera actor in deep crimson red Quan Cong paint, the paint cracked like dry mud and scraped away in long finger-width strips that reveal pale grey skin beneath. Eyes rolled up showing only bloodshot whites, red paint running from them like tears. The jaw locked in a wide rigid grin stretched toward the ears, teeth clenched, dark red stains at the corners of the mouth dripping into the long matted black beard. Dark green helmet with a red pompom slightly askew, wet grey hair escaping beneath it, veins standing out at the temples. Photorealistic, film grain, harsh contrast, crimson and sickly green tones, deeply disturbing. No text, no letters, no numbers, no watermark.
```

**Mẹo khi tạo:**
- Ảnh ra còn "đẹp" quá thì gõ thêm trong cùng cuộc trò chuyện: *"Make it more disturbing: deeper scratches, more raw skin, the grin wider and more unnatural, darker lighting."*
- Ảnh ra bị hoạt hình thì gõ: *"Photorealistic forensic photograph, not illustration."*
- Mặt phải **lấp kín khung hình** thì cảnh doạ mới hiệu quả: khi bật toàn màn hình, gương mặt sẽ lao thẳng vào người chơi.

### 25. `anh_19_ma.jpg`, tỉ lệ 1:1 (doạ)
```
[STYLE FLASH] Out of pure darkness, very close to the lens, the crimson red painted Quan Cong face with long black beard and completely black eyes, caught in the edge of the flash, paint cracked, a hand with long fingernails reaching toward the camera. Heavy grain and flash glare. No text, no letters, no numbers, no watermark.
```

### 26. `ket_scare.jpg`, tỉ lệ 1:1 (doạ cuối)
```
Horror close-up in pitch darkness lit by a candle from below: an old man's wrinkled trembling hands clutching a faded dark green opera robe with gold dragon embroidery; rising from inside the empty collar of the robe, a crimson red painted face with long straight black beard and black eyes, smiling at the viewer. No text, no letters, no numbers, no watermark.
```

---

## Ưu tiên
- **Làm đầu tiên:** 00 (ảnh mẫu), rồi 11, 12, 13 (câu đố bàn tay), 9 (buồng trò), 3 đến 8 (băng VHS), 1 (bìa), 24 (doạ chính).
- **Sau đó:** phần còn lại.
