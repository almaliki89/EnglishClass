# منصة أوميغا التعليمية (OMEGA Platform) • منهج اللغة الإنكليزية العراقي

منصة تعليمية لمادة اللغة الإنكليزية للمراحل المتوسطة والإعدادية، تعرض المحتوى بحسب المصادر المحددة لكل صف ولا تدّعي الاعتماد الوزاري لأي مصدر دون مستند اعتماد موثق (إشراف الأستاذ مصطفى تركي):
- **الثالث المتوسط** (Third Intermediate) - تحضير للامتحان الوزاري ومحاكي 100 درجة.
- **الرابع الإعدادي** (Fourth Preparatory) - محتوى ملزمة النموذجية 2025، وتمارين تدريبية ونصوص أدبية.
- **الخامس الإعدادي** (Fifth Preparatory) - امتحانات مدرسية نهائية.
- **السادس الإعدادي** (Sixth Preparatory) - البكالوريا الوزارية الشاملة (طبعة 2024-2026 الرسمية حصراً: عمار والهيكل الخارجي، نجلة عماد لفتة، راشد ورنا للأزياء، نهر الفرات، كبرياء وتحامل لجين أوستن، كما تحب لوليم شكسبير).

---

## 🏗️ البنية التقنية (Architecture)

1. **الواجهة الأمامية (Frontend):**
   - React 19 + TypeScript + Vite + Tailwind CSS.
   - دعم كامل للغة العربية (RTL) مع إبراز الجمل والمفردات الإنكليزية (LTR).
   - توجيه كامل عبر React Router مع سلامة الروابط العميقة (`/grade/:gradeId`, `/lesson/:lessonId`, `/curriculum`, `/mock`, `/exam`, `/review`).

2. **الخادم ونقاط الـ API (Backend):**
   - Express 4 + Node.js (المنفذ: 3000).
   - توثيق مشفر عبر Firebase Admin SDK باستخدام `verifyIdToken(token, true)` مع فحص الإبطال الفوري.
   - التحقق من صلاحيات الإدارة والتدريس حصراً عبر Custom Claims المشفرة، دون الاعتماد على قوائم بريد ثابتة أو بيانات مدخلة من العميل.
   - أمن المدخلات: جدار عزل هيكلي للمستندات غير الموثوقة `<<<UNTRUSTED_CURRICULUM_DOCUMENT_START>>>` لمنع هجمات حقن التوجيهات (Prompt Injection).
   - استخراج وتدقيق صفحات الـ PDF والتحقق من التوقيع الرقمي `%PDF` وحساب بصمة SHA-256 لاكتشاف النسخ المكررة.
   - تصحيح الامتحانات واحتساب نقاط الخبرة (XP) والإنجازات مركزياً على الخادم لمنع التلاعب وتزوير الدرجات.
   - مساعد ذكي منضبط (Strict Grounded RAG) يستشهد بأرقام الصفحات والوحدات من المحتوى المعتمد حصراً.

3. **قاعدة البيانات والأمان (Firebase Firestore, Storage & Auth):**
   - عزل تام لبيانات الطلاب (`/students/{studentId}`)، مع قفل تام لحقول XP، الدرجات، الإنجازات، وحظر تعديلها من واجهة العميل.
   - تخزين سحابي دائم للمناهج المعتمدة ومسودات التدقيق في Firestore (`/curriculum_sources`).
   - ملفات PDF الأصلية والمصادر المعتمدة مؤمنة عبر قواعد Firebase Storage (`storage.rules`).
   - قواعد أمان صارمة في `firestore.rules` تطبق مبدأ الرفض الافتراضي (Default-Deny).

---

## 🔐 إعداد المشرف وتعيين الصلاحيات (Admin Bootstrap)

لا تضع السر أو البريد الشخصي في ملفات المستودع أو سجل Git. يتطلب السكربت حساب Firebase موجوداً وبريداً موثقاً، ومتغيري البيئة `ADMIN_BOOTSTRAP_SECRET` و`BOOTSTRAP_SECRET` بالقيمة السرية نفسها (16 محرفاً على الأقل).

**PowerShell (Windows):**
```powershell
$secure = Read-Host "Enter bootstrap secret" -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
try {
  $secret = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
  $env:ADMIN_BOOTSTRAP_SECRET = $secret
  $env:BOOTSTRAP_SECRET = $secret
  npx tsx scripts/bootstrap_admin.ts --email=verified-user@example.com --role=admin
} finally {
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
  Remove-Item Env:ADMIN_BOOTSTRAP_SECRET -ErrorAction SilentlyContinue
  Remove-Item Env:BOOTSTRAP_SECRET -ErrorAction SilentlyContinue
  $secret = $null
}
```

**Bash (Linux/macOS):**
```bash
read -rsp "Enter bootstrap secret: " BOOTSTRAP_SECRET
echo
export ADMIN_BOOTSTRAP_SECRET="$BOOTSTRAP_SECRET"
export BOOTSTRAP_SECRET
npx tsx scripts/bootstrap_admin.ts --email=verified-user@example.com --role=admin
unset ADMIN_BOOTSTRAP_SECRET BOOTSTRAP_SECRET
```

استبدل البريد بعنوان حساب موجود وموثق. استخدم `--role=teacher` للمعلم، ولا تشارك السر أو تضعه في أوامر محفوظة أو ملفات المشروع.

---

## 🚀 التشغيل والاختبار

### المتطلبات:
- Node.js 22+
- npm 10+

### التثبيت والتشغيل:
```bash
npm ci
npm run dev
```
افتح المتصفح على: `http://localhost:3000`

### فحص واختبار المنظومة بالكامل:

```bash
npm run test:acceptance
```

يشغّل أمر القبول المحلي:
- فحص الأنواع الحالي عبر `tsc --noEmit` (وليس ESLint).
- اختبارات المنهج والبنية والأمان والهرمية ومواءمة المصادر.
- بناء الإنتاج واختبارات Playwright E2E.

**اختبارات قواعد Firebase الفعلية (Firestore وStorage Emulator):**

```bash
npm install --no-save --package-lock=false @firebase/rules-unit-testing firebase-tools
npx firebase emulators:exec --project demo-englishclass-rules-test --only firestore,storage "npm run test:rules"
```

ينفّذ GitHub Actions اختبارات المحاكاة هذه ضمن CI. لم يُفعّل TypeScript `strict: true` بعد؛ فحص الأنواع الحالي ليس فحصاً صارماً، ويجب التعامل مع تفعيل strict كمهمة ترحيل منفصلة بعد معالجة أخطاء الأنواع التي سيكشفها.

