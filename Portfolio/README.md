# Pitchayut — Portfolio

พอร์ตโฟลิโอของ **Pitchayut Petchyen (Tar)** นักศึกษา Information Technology สาย Software Engineering ที่ **King Mongkut’s Institute of Technology Ladkrabang (KMITL)**

เว็บไซต์สำหรับรวบรวมข้อมูลส่วนตัว ประวัติการศึกษา ผลงาน ทักษะ และกิจกรรม ออกแบบด้วยโทนขาว–ดำสไตล์มินิมอล รองรับมือถือ แท็บเล็ต และเดสก์ท็อป

## Features

- **About & Education** — ข้อมูลส่วนตัวและประวัติการศึกษา
- **Projects** — กรองผลงานตามหมวด พร้อมหน้าต่างรายละเอียดและลิงก์ผลงานเมื่อมีข้อมูล
- **Skills** — แสดงภาษาโปรแกรม Frameworks ฐานข้อมูล และเครื่องมือ
- **Activities** — รายละเอียดกิจกรรม พร้อมรูปสูงสุด 2 รูปต่อกิจกรรมและคำบรรยาย
- **Contact** — อีเมล เบอร์โทร GitHub และปุ่มคัดลอกอีเมล
- **Responsive layout** — เมนูมือถือและเลย์เอาต์ที่ปรับตามขนาดหน้าจอ
- **Component-based structure** — แยกส่วน UI และข้อมูลเพื่อแก้ไขได้สะดวก

## Built with

| Technology | Purpose |
| --- | --- |
| React 19 | UI components และ state |
| Vite 8 | Development server และ production build |
| JavaScript (ES modules) | Logic และข้อมูลเว็บไซต์ |
| CSS | Layout, responsive design และ styling |
| ESLint | ตรวจสอบโค้ด |

พอร์ตนี้เป็นเว็บไซต์ frontend แบบ static ไม่ต้องใช้ backend, database หรือ environment variables ในการรัน ฟอนต์โหลดจาก Google Fonts โดยมีฟอนต์สำรองเมื่อโหลดไม่ได้

## Featured projects

| Project | Description |
| --- | --- |
| **PetTracks** | ระบบจัดการข้อมูลสัตว์เลี้ยงและติดตามตำแหน่ง พร้อม geofencing |
| **MyMatchHistory** | ระบบบันทึกผลการแข่งขันกีฬาและจัดการวิดีโอบน AWS |
| **LeagueScout** | Dashboard สำหรับค้นหา เปรียบเทียบ และวิเคราะห์ข้อมูลนักฟุตบอล |

รายการนี้เป็นผลงานที่นำมาแสดงในพอร์ต ส่วนโค้ดใน repository นี้คือเว็บไซต์พอร์ตโฟลิโอ

## Getting started

ติดตั้ง **Node.js 24.x** และ npm จากนั้นดาวน์โหลดหรือ clone repository แล้วเปิด Terminal ในโฟลเดอร์ที่มี `package.json`

หาก repository มีโฟลเดอร์ `Portfolio` ครอบอยู่ ให้เข้าโฟลเดอร์นั้นก่อน:

```bash
cd Portfolio
```

ติดตั้ง dependencies และเปิด development server:

```bash
npm ci
npm run dev
```

เปิด URL ที่แสดงใน Terminal โดยปกติคือ `http://localhost:5173` หากพอร์ตถูกใช้อยู่ Vite จะเลือกพอร์ตถัดไป กด `Ctrl+C` เพื่อหยุด server

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | เปิด development server |
| `npm run build` | สร้างไฟล์สำหรับ deploy ใน `dist/` |
| `npm run preview` | เปิดดู production build ในเครื่อง หลังรัน build แล้ว |
| `npm run lint` | ตรวจโค้ดด้วย ESLint |

## Project structure

```text
Portfolio/
├── public/
│   ├── activities/          # รูปกิจกรรม
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectVisual.jsx
│   │   ├── Skills.jsx
│   │   ├── Activities.jsx
│   │   ├── ActivityGallery.jsx
│   │   ├── Contact.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Activities.css
│   │   └── ResumeContent.css
│   ├── data/
│   │   └── portfolio.js     # ข้อมูลหลักของเว็บไซต์
│   ├── App.jsx             # ประกอบ sections
│   ├── App.css
│   ├── index.css            # Global styles และ fonts
│   └── main.jsx
├── index.html              # Page title และ meta description
├── package.json
└── vite.config.js
```

## Customize content

แก้ข้อมูลหลักใน [`src/data/portfolio.js`](src/data/portfolio.js):

| Export | ข้อมูลที่แก้ไขได้ |
| --- | --- |
| `profile` | ชื่อ ประวัติ การศึกษา และข้อมูลติดต่อ |
| `projects` | ชื่อผลงาน รายละเอียด เทคโนโลยี รูปภาพ และลิงก์ |
| `skillGroups` | หมวดหมู่และรายการทักษะ |
| `activities` | กิจกรรม บทบาท รายละเอียด และรูปภาพ |

ข้อความหัวข้อบางส่วนอยู่ใน component ของแต่ละ section ส่วนชื่อแท็บและคำอธิบายสำหรับ search engine อยู่ใน `index.html`

### Project images and links

สร้างโฟลเดอร์ `public/projects/` แล้ววางภาพ เช่น `pettracks.jpg` จากนั้นแก้รายการใน `projects`:

```js
image: "/projects/pettracks.jpg",
imageAlt: "หน้าจอแสดงตำแหน่งสัตว์เลี้ยงใน PetTracks",
url: "",    // ใส่ URL เว็บไซต์ผลงานเมื่อมี
source: "", // ใส่ URL repository เมื่อมี
```

ถ้า `image` ว่าง เว็บไซต์จะแสดงกราฟิกชื่อผลงานแทน ลิงก์ที่เว้นว่างจะไม่แสดงปุ่ม

ตัวกรองรองรับ `type: "fullstack"` และ `type: "frontend"` หากเพิ่มประเภทใหม่ ให้เพิ่มตัวกรองใน `Projects.jsx` ด้วย

### Activity gallery: 2 photos

วางรูปใน `public/activities/` เช่น:

```text
public/activities/
├── et-robot-1.jpg
└── et-robot-2.jpg
```

แก้ `images` ของกิจกรรมใน `activities`:

```js
images: [
  {
    src: "/activities/et-robot-1.jpg",
    alt: "ช่วยนักเรียนเขียนโปรแกรม Python ในกิจกรรม ET Robot",
    caption: "กิจกรรมฝึกเขียนโปรแกรม Python",
  },
  {
    src: "/activities/et-robot-2.jpg",
    alt: "นักเรียนทดลองควบคุมหุ่นยนต์ระหว่างกิจกรรม",
    caption: "กิจกรรมควบคุมหุ่นยนต์",
  },
],
```

ปรับ `alt` และ `caption` ให้ตรงกับภาพจริง โดย `alt` ช่วยอธิบายภาพให้ผู้ใช้โปรแกรมอ่านหน้าจอ ส่วน `caption` คือข้อความใต้รูป

- แสดงสูงสุด 2 รูปที่มี `src`; ช่องว่างจะไม่แสดง
- จอใหญ่แสดงคู่กัน มือถือเรียงลงมา
- รูปแสดงในกรอบ 16:9 โดยไม่ตัดเนื้อภาพ และใช้โทนขาว–ดำ
- คลิกรูปเพื่อดูไฟล์ต้นฉบับในแท็บใหม่
- เว้น `caption` ว่างได้หากไม่ต้องการคำบรรยาย
- ชื่อไฟล์และตัวพิมพ์เล็ก–ใหญ่ต้องตรงกับ path ที่กำหนด

## Deployment

### Netlify: manual upload

1. รัน `npm run build`
2. เปิด [Netlify Drop](https://app.netlify.com/drop)
3. ลากโฟลเดอร์ `dist/` ที่ได้จาก build ไปวาง
4. เมื่อ deploy เสร็จ จะได้ URL สำหรับเข้าเว็บไซต์

ทุกครั้งที่แก้โค้ด ข้อมูล หรือรูปภาพ ให้ build ใหม่แล้วอัปโหลด `dist/` ผ่านหน้า Deploys ของเว็บไซต์เดิม

อ้างอิง: [Netlify deployment documentation](https://docs.netlify.com/deploy/create-deploys/)

### Vercel: deploy from GitHub

1. Push โค้ดไปยัง GitHub
2. ใน [Vercel](https://vercel.com) เลือก **Add New → Project** แล้ว import repository
3. ตรวจการตั้งค่า:

| Setting | Value |
| --- | --- |
| Root Directory | โฟลเดอร์ที่มี `package.json`; ใช้ `Portfolio` หาก repository ครอบด้วยโฟลเดอร์นี้ |
| Framework Preset | Vite |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 24.x |

4. กด **Deploy**

เมื่อ push การเปลี่ยนแปลงเข้า production branch ที่เชื่อมไว้ Vercel จะ build และ deploy ใหม่โดยอัตโนมัติ

อ้างอิง: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)

ไฟล์ใน `public/` จะถูกคัดลอกเข้า `dist/` ตอน build ส่วน `node_modules/` และ `dist/` ถูกยกเว้นจาก Git ตาม `.gitignore`

## Author

**Pitchayut Petchyen** — Information Technology, Software Engineering Track, KMITL

[GitHub: PitchayutTP](https://github.com/PitchayutTP)
