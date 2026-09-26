# المنصة الرقمية للخدمات الصحية - منطقة الوايلي الطبية

نسخة أولية Static جاهزة لـ GitHub Pages مبنية بـ HTML و CSS و Vanilla JavaScript فقط.

## Structure

```text
index.html
assets/
  css/styles.css
  js/app.js
  images/waili-logo.png
  docs/demerdash-birth-registration.pdf
pages/
  offices/
  childcare/
  family/
  maps/
  news/
```

## Version One

- Splash screen احترافي بالشعار.
- واجهة عربية RTL وموبايل أولاً.
- بانر رئيسي جاهز للموبايل بدل نصوص الهيرو الطويلة.
- مكاتب الصحة والرعايات والجلدية تفتح داخل نفس الصفحة بدون Reload.
- عرض خدمة رقمي قابل للقراءة مع زر تحميل PDF رسمي.
- عرض مختلف للرعايات والعيادات بنبذة صحية وفيديو يوتيوب مستقبلي.
- قسم تحديثات الإدارة الصحية جاهز للربط بفيسبوك.
- ألبوم "لمة العيلة" وتجربة عرض صور.
- المساعد الذكي مدمج داخل إطار المنصة.
- Dark mode جاهز من الواجهة.

## Content Editing

عدّل الخدمات والمكاتب من ملف:

```text
assets/js/app.js
```

ابحث عن:

```js
const platformData = { ... }
```

ثم غيّر النصوص أو أضف خدمات جديدة.

لتغيير رابط صفحة فيسبوك، عدّل:

```js
const facebookPageUrl = "https://www.facebook.com/";
```
