import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Phone,
  UserRound,
  MapPin,
  School,
  ShieldCheck,
  KeyRound,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MentorPortrait } from './common/MentorPortrait';
import { EducationalGrade } from '../types';
import { ALL_GRADES_META, ORDERED_GRADES } from '../data/gradeContentResolver';

interface AuthGateProps {
  onSuccessfulAuth?: (name: string, grade: EducationalGrade) => void;
}

const IRAQI_GOVERNORATES = [
  'بغداد',
  'البصرة',
  'نينوى',
  'أربيل',
  'السليمانية',
  'حلبجة',
  'دهوك',
  'كركوك',
  'ديالى',
  'الأنبار',
  'صلاح الدين',
  'كربلاء',
  'النجف',
  'بابل',
  'واسط',
  'القادسية',
  'المثنى',
  'ذي قار',
  'ميسان',
];

function toIraqiE164(input: string): string {
  let digits = input.replace(/\D/g, '');
  if (digits.startsWith('00964')) digits = digits.slice(2);
  if (digits.startsWith('964')) {
    // Already includes Iraq's country code.
  } else if (digits.startsWith('0')) {
    digits = '964' + digits.slice(1);
  } else if (digits.startsWith('7')) {
    digits = '964' + digits;
  }

  if (!/^9647\d{9}$/.test(digits)) {
    throw new Error('أدخل رقم هاتف عراقي صحيحاً، مثال: 07701234567');
  }
  return '+' + digits;
}

function getAuthErrorMessage(error: unknown): string {
  const code = (error as { code?: string } | null)?.code || '';
  if (code === 'auth/invalid-phone-number') return 'رقم الهاتف غير صحيح. استخدم رقماً عراقياً يبدأ بـ 07.';
  if (code === 'auth/too-many-requests') return 'تم تجاوز عدد محاولات إرسال الرسائل. انتظر قليلاً ثم أعد المحاولة.';
  if (code === 'auth/quota-exceeded') return 'وصل إرسال رسائل التحقق إلى الحد المسموح حالياً.';
  if (code === 'auth/captcha-check-failed') return 'تعذر التحقق من المتصفح. حدّث الصفحة وحاول مرة أخرى.';
  if (code === 'auth/operation-not-allowed') return 'تسجيل الدخول بالهاتف غير مفعّل بعد في Firebase Authentication.';
  if (code === 'auth/invalid-verification-code') return 'رمز التحقق غير صحيح. راجع الرسالة وأعد إدخاله.';
  if (code === 'auth/code-expired') return 'انتهت صلاحية رمز التحقق. اطلب رمزاً جديداً.';
  if (code === 'auth/network-request-failed') return 'تعذر الاتصال بخدمة التحقق. افحص اتصال الإنترنت وحاول مجدداً.';
  return error instanceof Error ? error.message : 'تعذر إكمال التحقق. تحقق من البيانات وحاول مرة أخرى.';
}

export const AuthGate: React.FC<AuthGateProps> = ({ onSuccessfulAuth }) => {
  const {
    signInWithGoogle,
    googleRedirectError,
    signInWithStudentPassword,
  } = useAuth();

  const [isRegistering, setIsRegistering] = useState(false);
  const [fullName, setFullName] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<EducationalGrade>('sixth-preparatory');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (googleRedirectError) setError(googleRedirectError);
  }, [googleRedirectError]);

  const validateStudentDetails = () => {
    const nameParts = fullName.trim().split(/\s+/).filter(Boolean);
    if (nameParts.length < 3) {
      throw new Error('يرجى إدخال الاسم الثلاثي للطالب (ثلاثة أسماء على الأقل).');
    }
    if (nameParts.some((part) => part.length < 2)) {
      throw new Error('يرجى كتابة الاسم الثلاثي بصورة كاملة.');
    }
    if (!governorate) throw new Error('يرجى اختيار المحافظة.');
    if (schoolName.trim().length < 3) throw new Error('يرجى كتابة اسم المدرسة بصورة صحيحة.');
    if (schoolName.trim().length > 160) throw new Error('اسم المدرسة طويل جداً.');
    return toIraqiE164(phone);
  };

  const handleStudentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      const normalizedPhone = isRegistering ? validateStudentDetails() : toIraqiE164(phone);
      if (password.length < 8) throw new Error('يجب أن تتكون كلمة المرور من 8 أحرف أو أرقام على الأقل.');
      const resolvedGrade = await signInWithStudentPassword({
        mode: isRegistering ? 'register' : 'login',
        name: fullName.trim().replace(/\s+/g, ' '), governorate,
        schoolName: schoolName.trim().replace(/\s+/g, ' '),
        phoneNumber: normalizedPhone, selectedGrade, password,
      });
      onSuccessfulAuth?.(fullName.trim(), resolvedGrade);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'تعذر تسجيل الدخول. تحقق من البيانات وكلمة المرور.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setNotice(null);
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
    } catch (caughtError) {
      const code = (caughtError as { code?: string } | null)?.code || '';
      const message = code === 'auth/unauthorized-domain'
        ? 'نطاق الموقع غير مضاف إلى Authorized domains في Firebase.'
        : code === 'auth/operation-not-allowed'
          ? 'تسجيل الدخول عبر Google غير مفعّل في Firebase Authentication.'
          : code === 'auth/popup-blocked'
            ? 'المتصفح منع نافذة Google. افتح ORBIT في Chrome أو Safari مباشرة ثم أعد المحاولة.'
            : code === 'auth/popup-closed-by-user'
              ? ''
              : getAuthErrorMessage(caughtError);
      if (message) setError(message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-paper text-ink flex items-center justify-center p-4 sm:p-6" dir="rtl">
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] select-none text-[120px] sm:text-[180px] font-black leading-none font-mono flex items-center justify-center overflow-hidden">
        ORBIT
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1040px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <section className="lg:col-span-5 bg-surface border-4 border-ink p-6 sm:p-8 shadow-brutal-hero flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow border-2 border-ink text-xs font-black shadow-brutal-sm">
              <GraduationCap className="w-4 h-4 text-cobalt" />
              <span className="font-mono">ORBIT · STUDENT PORTAL</span>
            </div>
            <div>
              <h1 id="auth-brand-heading" className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                <span dir="ltr" className="inline-block">ORBIT</span>
                <span className="mr-2 text-cobalt">أوربت</span>
                <span className="block mt-2 bg-cobalt text-surface px-2 py-1 text-2xl sm:text-3xl w-fit -rotate-1">
                  تعلّم اللغة الإنكليزية
                </span>
              </h1>
              <div className="flex items-center gap-3 mt-5 rounded border-2 border-ink bg-paper p-3 shadow-brutal-sm">
                <MentorPortrait size="sm" accent="yellow" withGeometricBackdrop priority />
                <p className="text-xs sm:text-sm font-bold leading-relaxed">
                  إشراف وإعداد <span className="underline decoration-coral decoration-4">الأستاذ مصطفى تركي</span> · منصة متخصصة بمنهاج اللغة الإنكليزية العراقي والتحضير للامتحانات الوزارية.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-paper border-2 border-ink shadow-brutal-callout">
              <div className="font-black text-cobalt text-lg">04</div>
              <div className="text-xs font-black">مراحل دراسية</div>
              <p className="text-[10px] text-ink/65 mt-1">من الثالث المتوسط إلى السادس الإعدادي</p>
            </div>
            <div className="p-3 bg-lavender border-2 border-ink shadow-brutal-callout">
              <div className="font-black text-cobalt text-lg">100</div>
              <div className="text-xs font-black">محاكاة وزارية</div>
              <p className="text-[10px] text-ink/65 mt-1">تدريب على نمط الدفتر الامتحاني</p>
            </div>
          </div>

          <div className="p-3.5 bg-yellow/30 border-2 border-ink flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
            <p className="text-xs font-bold leading-relaxed">
              خيارات الدخول: حساب Google، أو بيانات الطالب مع كلمة مرور خاصة.
            </p>
          </div>

          <div className="pt-2 border-t-2 border-ink flex items-center justify-between text-[10px] font-mono text-ink/60">
            <span>IRAQ CURRICULUM EDITION</span>
            <span>2026 / 2027</span>
          </div>
        </section>

        <section className="lg:col-span-7 bg-surface border-4 border-ink p-6 sm:p-8 shadow-brutal-hero">
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-black">{isRegistering ? "إنشاء حساب طالب جديد" : "تسجيل الدخول إلى ORBIT"}</h2>
            <p className="text-xs sm:text-sm font-bold text-ink/65 mt-1">اختر إحدى الطريقتين التاليتين للدخول إلى حسابك.</p>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={googleLoading || loading}
            className="w-full py-3 px-4 bg-surface border-2 border-ink hover:bg-paper font-black text-sm flex items-center justify-center gap-3 shadow-brutal-callout disabled:opacity-50"
          >
            {googleLoading ? <Loader2 className="w-5 h-5 animate-spin text-cobalt" /> : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>المتابعة مباشرة بحساب Google</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-ink flex-1" />
            <span className="text-[11px] font-black text-ink/60">أو بيانات الطالب</span>
            <div className="h-px bg-ink flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4"><button type="button" onClick={() => { setIsRegistering(false); setError(null); }} className={`py-2 border-2 border-ink text-xs font-black ${!isRegistering ? "bg-cobalt text-white" : "bg-paper"}`}>تسجيل الدخول</button><button type="button" onClick={() => { setIsRegistering(true); setError(null); }} className={`py-2 border-2 border-ink text-xs font-black ${isRegistering ? "bg-cobalt text-white" : "bg-paper"}`}>إنشاء حساب جديد</button></div>
          <form onSubmit={handleStudentSubmit} className="space-y-3.5">
            {isRegistering && (
              <>
            <div>
              <label htmlFor="student-full-name" className="block text-xs font-black mb-1">اسم الطالب الثلاثي</label>
              <div className="relative">
                <UserRound className="absolute right-3 top-3.5 w-4 h-4 text-ink/45" />
                <input
                  id="student-full-name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={loading}
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="مثال: علي حيدر جاسم"
                  className="w-full pr-10 pl-3 py-2.5 bg-paper border-2 border-ink text-sm font-bold disabled:opacity-60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="student-governorate" className="block text-xs font-black mb-1">المحافظة</label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3.5 w-4 h-4 text-ink/45 pointer-events-none" />
                  <select
                    id="student-governorate"
                    required
                    disabled={loading}
                    value={governorate}
                    onChange={(event) => setGovernorate(event.target.value)}
                    className="w-full pr-10 pl-3 py-2.5 bg-paper border-2 border-ink text-sm font-bold disabled:opacity-60"
                  >
                    <option value="">اختر المحافظة</option>
                    {IRAQI_GOVERNORATES.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="student-school" className="block text-xs font-black mb-1">اسم المدرسة</label>
                <div className="relative">
                  <School className="absolute right-3 top-3.5 w-4 h-4 text-ink/45" />
                  <input
                    id="student-school"
                    type="text"
                    autoComplete="organization"
                    required
                    disabled={loading}
                    value={schoolName}
                    onChange={(event) => setSchoolName(event.target.value)}
                    placeholder="اسم المدرسة"
                    className="w-full pr-10 pl-3 py-2.5 bg-paper border-2 border-ink text-sm font-bold disabled:opacity-60"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="student-grade" className="block text-xs font-black mb-1">الصف الدراسي</label>
              <select
                id="student-grade"
                required
                disabled={loading}
                value={selectedGrade}
                onChange={(event) => setSelectedGrade(event.target.value as EducationalGrade)}
                className="w-full px-3 py-2.5 bg-paper border-2 border-ink text-sm font-bold disabled:opacity-60"
              >
                {ORDERED_GRADES.map((gradeId) => (
                  <option key={gradeId} value={gradeId}>{ALL_GRADES_META[gradeId].nameAr}</option>
                ))}
              </select>
            </div>

              </>
            )}

            <div>
              <label htmlFor="student-phone" className="block text-xs font-black mb-1">رقم الهاتف العراقي</label>
              <div className="relative">
                <Phone className="absolute right-3 top-3.5 w-4 h-4 text-ink/45" />
                <input
                  id="student-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  disabled={loading}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="07701234567"
                  dir="ltr"
                  className="w-full pr-10 pl-3 py-2.5 bg-paper border-2 border-ink text-sm font-mono font-bold text-left disabled:opacity-60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="student-password" className="block text-xs font-black mb-1">كلمة المرور</label>
              <div className="relative">
                <KeyRound className="absolute right-3 top-3.5 w-4 h-4 text-ink/45" />
                <input
                  id="student-password"
                  type="password"
                  autoComplete="current-password"
                  minLength={8}
                  maxLength={128}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="8 أحرف أو أرقام على الأقل"
                  className="w-full pr-10 pl-3 py-2.5 bg-paper border-2 border-ink text-sm font-bold"
                />
                <p className="mt-1 text-[10px] text-ink/60">{isRegistering ? "اختر كلمة مرور لا تقل عن 8 أحرف." : "أدخل رقم الهاتف وكلمة المرور اللذين استخدمتهما عند إنشاء الحساب."}</p>
              </div>
            </div>

            {notice && <p role="status" className="p-3 bg-yellow/30 border border-ink text-xs font-bold">{notice}</p>}

            {error && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-answer-review-bg border-2 border-semantic-error flex items-start gap-2 text-xs font-bold">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-semantic-error" />
                <span>{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full py-3.5 bg-cobalt hover:bg-cobalt-hover text-surface font-black text-sm border-2 border-ink shadow-brutal-action flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  <Sparkles className="w-4 h-4 text-yellow" />
                  <span>{isRegistering ? "إنشاء حساب الطالب" : "تسجيل الدخول"}</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-5 pt-3 border-t-2 border-ink text-center">
            <p className="text-[11px] font-mono text-ink/65">ORBIT — أوربت • بوابة الطلبة 2026/2027</p>
          </div>
        </section>
      </div>
    </div>
  );
};
