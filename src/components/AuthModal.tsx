import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  CloudUpload
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess?: (studentName: string) => void;
}

export function AuthModal({ isOpen, onClose, onAuthSuccess }: AuthModalProps) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'register') {
        if (!name.trim()) {
          throw new Error('يرجى كتابة اسم الطالب الثلاثي أو المستعار');
        }
        if (password.length < 6) {
          throw new Error('كلمة المرور يجب أن لا تقل عن 6 أحرف أو أرقام');
        }
        await signUpWithEmail(name.trim(), email.trim(), password);
        if (onAuthSuccess) onAuthSuccess(name.trim());
      } else {
        await signInWithEmail(email.trim(), password);
        if (onAuthSuccess) onAuthSuccess('');
      }
      onClose();
    } catch (err: any) {
      let message = 'حدث خطأ أثناء المحاولة، يرجى التحقق من البيانات';
      if (err.code === 'auth/email-already-in-use') {
        message = 'هذا البريد الإلكتروني مسجل مسبقاً، يمكنك تسجيل الدخول به';
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        message = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      } else if (err.code === 'auth/invalid-email') {
        message = 'صيغة البريد الإلكتروني غير صحيحة';
      } else if (err.message) {
        message = err.message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      if (onAuthSuccess) onAuthSuccess('');
      onClose();
    } catch (err: any) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('تعذر تسجيل الدخول بواسطة Google، يرجى المحاولة مرة أخرى أو استخدام البريد');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          dir="rtl"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute left-4 top-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xs border border-white/20">
                <CloudUpload className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-xl font-black">
                  {mode === 'register' ? 'إنشاء حساب طالب سحابي' : 'تسجيل دخول الطالب'}
                </h3>
                <p className="text-xs text-indigo-100 font-medium">
                  احفظ درجاتك ونقاطك وإنجازاتك في أي جهاز
                </p>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1 bg-white/10 p-1 rounded-xl mt-4 border border-white/10">
              <button
                type="button"
                onClick={() => { setMode('register'); setError(null); }}
                className={`py-2 text-xs font-black rounded-lg transition-all ${
                  mode === 'register' ? 'bg-white text-indigo-700 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                حساب جديد
              </button>
              <button
                type="button"
                onClick={() => { setMode('login'); setError(null); }}
                className={`py-2 text-xs font-black rounded-lg transition-all ${
                  mode === 'login' ? 'bg-white text-indigo-700 shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                تسجيل الدخول
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Quick Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={googleLoading || loading}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 font-bold text-slate-700 text-sm flex items-center justify-center gap-3 transition-colors mb-4 disabled:opacity-50"
            >
              {googleLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>المتابعة باستخدام حساب Google</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-xs text-slate-400 font-bold">أو عبر البريد الإلكتروني</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2 text-red-700 text-xs font-semibold"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">اسم الطالب الكامل</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: علي محمد حسن"
                      required
                      className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    required
                    className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">كلمة المرور</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || googleLoading}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black text-sm rounded-xl shadow-md shadow-indigo-100 flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{mode === 'register' ? 'إنشاء الحساب وبدء الحفظ' : 'تسجيل الدخول'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Cloud Storage Assurance */}
            <div className="mt-5 p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
              <p className="text-[11px] text-indigo-900 font-medium leading-relaxed">
                جميع بياناتك، درجات الامتحانات، ومحاكي الوزاري تُحفظ في خوادم Google Cloud الآمنة.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
