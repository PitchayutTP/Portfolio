# Activity photos

วางไฟล์รูปกิจกรรมในโฟลเดอร์นี้ เช่น `et-robot-1.jpg` และ `et-robot-2.jpg`
จากนั้นแก้ `activities[].images` ใน `src/data/portfolio.js`:

```js
images: [
  { src: "/activities/et-robot-1.jpg", alt: "คำอธิบายรูปที่ 1", caption: "คำบรรยายใต้รูปที่ 1" },
  { src: "/activities/et-robot-2.jpg", alt: "คำอธิบายรูปที่ 2", caption: "คำบรรยายใต้รูปที่ 2" },
],
```

- รองรับสูงสุด 2 รูปต่อกิจกรรม; ช่อง src ว่างจะไม่แสดง
- รูปแสดงคู่กันบนจอใหญ่และเรียงลงบนมือถือ
- คลิกรูปเพื่อเปิดต้นฉบับในแท็บใหม่
- เว้น caption ว่างได้หากไม่ต้องการคำบรรยาย
