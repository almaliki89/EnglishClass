import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  Lock, 
  User as UserIcon, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  BookOpen, 
  Trophy, 
  Award, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { EducationalGrade } from '../types';
import { ORDERED_GRADES, ALL_GRADES_META } from '../data/gradeContentResolver';

interface AuthGateProps {
  onSuccessfulAuth?: (name: string, grade: EducationalGrade) => void;
}

export const AuthGate: React.FC<AuthGateProps> = ({ onSuccessfulAuth }) => {
  const { 
    signInWithGoogle, 
    signInWithEmail, 
    signUpWithEmail, 
    signUpWithPhone, 
    signInWithPhone,
    signInAsGuest,
  } = useAuth();

  // Mode: Register vs Login
  const [mode, setMode] = useState<'register' | 'login'>('register');
  
  // Auth Method: Email vs Phone
  const [method, setMethod] = useState<'email' | 'phone'>('email');

  // Form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<EducationalGrade>('sixth-preparatory');

  // State
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'register') {
        if (!name.trim()) {
          throw new Error('يرجى كتابة اسم الطالب الكامل (الثلاثي)');
        }
        if (password.length < 6) {
          throw new Error('كلمة المرور يجب أن لا تقل عن 6 أحرف أو أرقام لضمان أمان حسابك');
        }

        if (method === 'phone') {
          const cleanedPhone = phone.trim().replace(/[^0-9]/g, '');
          if (cleanedPhone.length < 10) {
            throw new Error('يرجى إدخال رقم هاتف عراقي صالح (مثال: 07701234567)');
          }
          await signUpWithPhone(name.trim(), cleanedPhone, password, selectedGrade);
        } else {
          if (!email.trim().includes('@')) {
            throw new Error('يرجى إدخال بريد إلكتروني صحيح');
          }
          await signUpWithEmail(name.trim(), email.trim(), password, selectedGrade);
        }

        if (onSuccessfulAuth) onSuccessfulAuth(name.trim(), selectedGrade);
      } else {
        // Login mode
        if (method === 'phone') {
          const cleanedPhone = phone.trim().replace(/[^0-9]/g, '');
          if (cleanedPhone.length < 10) {
            throw new Error('يرجى إدخال رقم هاتفك المسجل به سابقاً');
          }
          await signInWithPhone(cleanedPhone, password);
        } else {
          if (!email.trim()) {
            throw new Error('يرجى إدخال بريدك الإلكتروني المسجل');
          }
          await signInWithEmail(email.trim(), password);
        }

        if (onSuccessfulAuth) onSuccessfulAuth('', selectedGrade);
      }
    } catch (err: any) {
      let message = 'حدث خطأ أثناء المحاولة، يرجى التأكد من البيانات';
      if (err.code === 'auth/email-already-in-use' || err.message?.includes('already-in-use')) {
        message = method === 'phone' 
          ? 'رقم الهاتف هذا مسجل مسبقاً! يمكنك الضغط على "تسجيل الدخول" في الأعلى' 
          : 'هذا البريد مسجل مسبقاً! يمكنك الضغط على "تسجيل الدخول" في الأعلى';
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        message = 'رقم الهاتف/البريد أو كلمة المرور غير صحيحة، يرجى التأكد';
      } else if (err.code === 'auth/invalid-email') {
        message = 'صيغة البيانات المدخلة غير صحيحة';
      } else if (err.message) {
        message = err.message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      if (onSuccessfulAuth) onSuccessfulAuth('', selectedGrade);
    } catch (err: any) {
      const errCode = err?.code || '';
      const errMessage = err?.message || '';
      if (errCode === 'auth/unauthorized-domain' || errMessage.includes('unauthorized-domain')) {
        setError('نطاق المعاينة الحالي غير مضاف في قائمة النطاقات المصرح بها لـ Firebase Auth. يمكنك الدخول المباشر برقم الهاتف/البريد الإلكتروني أو الدخول كزائر.');
      } else if (errCode !== 'auth/popup-closed-by-user') {
        setError('تعذر تسجيل الدخول بحساب Google. يمكنك استخدام رقم الهاتف، البريد الإلكتروني، أو الدخول كزائر.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full min-w-0 bg-paper text-ink flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 selection:bg-yellow selection:text-ink" dir="rtl">
      
      {/* Decorative Editorial Watermarks */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] select-none text-[120px] sm:text-[180px] font-black leading-none font-mono flex items-center justify-center overflow-hidden">
        IRAQI • ARCHIVE
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 my-auto">
        
        {/* Left / Top Hero Info Column */}
        <div className="lg:col-span-6 bg-surface border-4 border-ink p-6 sm:p-8 shadow-brutal-hero flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow border-2 border-ink text-ink text-xs font-black uppercase tracking-wider shadow-brutal-sm">
              <GraduationCap className="w-4 h-4 text-cobalt" />
              <span className="font-mono">SEC. 2026 · STUDENT PORTAL</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-ink">
                المنصة النموذجية <br />
                <span className="bg-cobalt text-surface px-2 py-0.5 inline-block -rotate-1 mt-1">
                  اللغة الإنكليزية
                </span>
              </h1>
              <p className="text-sm sm:text-base text-ink/80 font-bold leading-relaxed pt-2">
                إشراف وإعداد <span className="underline decoration-coral decoration-4">الأستاذ مصطفى تركي</span>. المنظومة الأكاديمية المتكاملة للتدريب الشامل والاستعداد للامتحان الوزاري وفق منهاج اللغة الإنكليزية العراقي.
              </p>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-paper border-2 border-ink shadow-brutal-callout">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 bg-coral text-ink border border-ink flex items-center justify-center font-black text-xs">
                  ★
                </div>
                <h4 className="text-xs font-black text-ink">محاكي الوزاري 100د</h4>
              </div>
              <p className="text-[11px] text-ink/70 font-bold">محاكاة شاملة لنمط الدفتر الامتحاني</p>
            </div>

            <div className="p-3 bg-lavender border-2 border-ink shadow-brutal-callout">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 bg-cobalt text-surface border border-ink flex items-center justify-center font-black text-xs">
                  06
                </div>
                <h4 className="text-xs font-black text-ink">كافة المراحل</h4>
              </div>
              <p className="text-[11px] text-ink/70 font-bold">من الثالث متوسط إلى السادس الإعدادي</p>
            </div>
          </div>

          <div className="p-3.5 bg-yellow/30 border-2 border-ink flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
            <p className="text-xs text-ink font-bold leading-relaxed">
              سجل مجاناً برقم هاتفك أو بريدك لمزامنة تقدمك الدراسي وحفظ نتائج الاختبارات وشهادات التقدير سحابياً.
            </p>
          </div>

          <div className="pt-2 border-t-2 border-ink flex items-center justify-between text-[11px] font-mono text-ink/60">
            <span>VOL. 26 ARCHIVE</span>
            <span>IRAQ CURRICULUM EDITION</span>
          </div>

        </div>

        {/* Right / Registration & Login Card */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-surface border-4 border-ink p-6 sm:p-8 shadow-brutal-hero text-ink relative">
            
            {/* Mode Switch Tabs (حساب جديد / تسجيل الدخول) */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-paper border-2 border-ink mb-6 shadow-brutal-sm">
              <button
                type="button"
                onClick={() => { setMode('register'); setError(null); }}
                className={`py-2 text-xs sm:text-sm font-black transition-all cursor-pointer border-2 ${
                  mode === 'register' 
                    ? 'bg-cobalt border-ink text-surface shadow-brutal-sm' 
                    : 'bg-surface border-transparent text-ink hover:border-ink'
                }`}
              >
                إنشاء حساب طالب جديد
              </button>
              <button
                type="button"
                onClick={() => { setMode('login'); setError(null); }}
                className={`py-2 text-xs sm:text-sm font-black transition-all cursor-pointer border-2 ${
                  mode === 'login' 
                    ? 'bg-cobalt border-ink text-surface shadow-brutal-sm' 
                    : 'bg-surface border-transparent text-ink hover:border-ink'
                }`}
              >
                تسجيل الدخول
              </button>
            </div>

            {/* Quick Google Login (Official Brand SVG Colors Preserved) */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading || loading}
              className="w-full py-2.5 px-4 bg-surface border-2 border-ink hover:bg-paper font-black text-ink text-xs sm:text-sm flex items-center justify-center gap-3 transition-transform active:translate-x-0.5 active:translate-y-0.5 shadow-brutal-callout mb-2 disabled:opacity-50 cursor-pointer"
            >
              {googleLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-cobalt" />
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>الدخول المباشر بحساب Google</span>
                </>
              )}
            </button>

            {/* Guest Exploration Mode */}
            <button
              type="button"
              onClick={async () => {
                await signInAsGuest();
                if (onSuccessfulAuth) onSuccessfulAuth('طالب زائر', selectedGrade);
              }}
              className="w-full py-2 px-3 bg-paper hover:bg-yellow border-2 border-ink font-bold text-ink text-xs flex items-center justify-center gap-2 transition-all shadow-brutal-sm mb-4 cursor-pointer"
            >
              <span>دخول سريع كزائر (معاينة المنهاج) ←</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-0.5 bg-ink"></div>
              <span className="text-xs font-mono font-bold text-ink">أو اختر وسيلة التسجيل:</span>
              <div className="flex-1 h-0.5 bg-ink"></div>
            </div>

            {/* Choose Email vs Phone Pill Switch */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                type="button"
                onClick={() => { setMethod('email'); setError(null); }}
                className={`py-2 px-3 text-xs font-black flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                  method === 'email'
                    ? 'bg-yellow border-ink text-ink shadow-brutal-sm'
                    : 'bg-paper border-ink/40 text-ink/70 hover:border-ink'
                }`}
              >
                <Mail className="w-4 h-4 text-cobalt" />
                <span>البريد الإلكتروني</span>
              </button>

              <button
                type="button"
                onClick={() => { setMethod('phone'); setError(null); }}
                className={`py-2 px-3 text-xs font-black flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                  method === 'phone'
                    ? 'bg-yellow border-ink text-ink shadow-brutal-sm'
                    : 'bg-paper border-ink/40 text-ink/70 hover:border-ink'
                }`}
              >
                <Phone className="w-4 h-4 text-cobalt" />
                <span>رقم الهاتف (SMS)</span>
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-4 p-3 bg-answer-review-bg border-2 border-semantic-error flex items-start gap-2 text-ink text-xs font-bold"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-semantic-error" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* If Register: Student Name */}
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-black text-ink mb-1">اسم الطالب الثلاثي</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-ink/50 absolute right-3 top-3.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: علي حيدر جاسم"
                      required
                      className="w-full pr-10 pl-3 py-2.5 bg-surface border-2 border-ink text-sm font-bold text-ink focus:outline-hidden focus:bg-yellow/15 focus:shadow-brutal-sm transition-all"
                    />
                  </div>
                </div>
              )}

              {/* If Register: Grade Selector */}
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-black text-ink mb-1.5">
                    اختر مرحلتك الدراسية (منهاج اللغة الإنكليزية):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {ORDERED_GRADES.map((gId) => {
                      const meta = ALL_GRADES_META[gId];
                      const isSelected = selectedGrade === gId;
                      return (
                        <button
                          key={gId}
                          type="button"
                          onClick={() => setSelectedGrade(gId)}
                          className={`p-2 border-2 text-xs font-black text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                            isSelected
                              ? 'bg-cobalt border-ink text-surface shadow-brutal-sm'
                              : 'bg-surface border-ink/30 text-ink hover:border-ink'
                          }`}
                        >
                          <span>{meta.shortName}</span>
                          <span className={`text-[9px] font-mono ${isSelected ? 'text-surface/80' : 'text-ink/60'}`}>
                            {meta.stage === 'intermediate' ? 'متوسط' : 'إعدادي'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Phone or Email Input */}
              {method === 'phone' ? (
                <div>
                  <label className="block text-xs font-black text-ink mb-1">رقم الهاتف (زين / آسيا / كورك)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-ink/50 absolute right-3 top-3.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07701234567"
                      required
                      className="w-full pr-10 pl-3 py-2.5 bg-surface border-2 border-ink text-sm font-mono font-bold text-ink focus:outline-hidden focus:bg-yellow/15 focus:shadow-brutal-sm transition-all text-left"
                      dir="ltr"
                    />
                  </div>
                  <p className="text-[10px] text-ink/60 font-mono mt-1">يُستخدم كرقم تعريف لدخول حسابك في أي وقت</p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-black text-ink mb-1">البريد الإلكتروني</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ink/50 absolute right-3 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      required
                      className="w-full pr-10 pl-3 py-2.5 bg-surface border-2 border-ink text-sm font-mono font-bold text-ink focus:outline-hidden focus:bg-yellow/15 focus:shadow-brutal-sm transition-all text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div>
                <label className="block text-xs font-black text-ink mb-1">
                  {mode === 'register' ? 'كلمة المرور / الرمز السري' : 'كلمة المرور'}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-ink/50 absolute right-3 top-3.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pr-10 pl-3 py-2.5 bg-surface border-2 border-ink text-sm font-mono font-bold text-ink focus:outline-hidden focus:bg-yellow/15 focus:shadow-brutal-sm transition-all text-left"
                    dir="ltr"
                  />
                </div>
                {mode === 'register' && (
                  <p className="text-[10px] text-ink/60 font-mono mt-1">6 خانات على الأقل (أحرف أو أرقام)</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || googleLoading}
                className="w-full py-3.5 bg-cobalt hover:bg-cobalt-hover text-surface font-black text-sm border-2 border-ink shadow-brutal-action hover:shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-50 cursor-pointer rounded-[4px]"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-yellow" />
                    <span>
                      {mode === 'register' 
                        ? 'إكمال التسجيل والدخول إلى المنصة' 
                        : 'تسجيل الدخول ومتابعة دراستي'}
                    </span>
                  </>
                )}
              </button>

            </form>

            <div className="mt-4 pt-3 border-t-2 border-ink text-center">
              <p className="text-[11px] font-mono text-ink/70">
                منصة النموذجية • بوابة تسجيل الطلبة 2026/2027
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
