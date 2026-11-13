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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202124]/60 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-[6px] shadow-[6px_6px_0px_#202124] border-3 border-[#202124] overflow-hidden"
          dir="rtl"
        >
          {/* Header Banner */}
          <div className="bg-[#405DE6] border-b-2 border-[#202124] p-6 text-white relative">
            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق نافذة تسجيل الدخول"
              className="absolute left-4 top-4 w-8 h-8 rounded-[4px] bg-white text-[#202124] border-2 border-[#202124] hover:bg-[#F3E6A5] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-[4px] bg-[#F3E6A5] border-2 border-[#202124] flex items-center justify-center shrink-0">
                <CloudUpload className="w-5 h-5 text-[#202124]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  {mode === 'register' ? 'إنشاء حساب طالب سحابي' : 'تسجيل دخول الطالب'}
                </h3>
                <p className="text-xs text-white/90 font-medium">
                  احفظ درجاتك ونقاطك وإنجازاتك في أي جهاز
                </p>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1.5 bg-[#202124]/25 p-1 rounded-[4px] mt-4 border border-white/25">
              <button
                type="button"
                onClick={() => { setMode('register'); setError(null); }}
                className={`py-2 text-xs font-black rounded-[4px] transition-all cursor-pointer ${
                  mode === 'register' ? 'bg-[#F3E6A5] text-[#202124] border border-[#202124]' : 'text-white hover:bg-white/10'
                }`}
              >
                حساب جديد
              </button>
              <button
                type="button"
                onClick={() => { setMode('login'); setError(null); }}
                className={`py-2 text-xs font-black rounded-[4px] transition-all cursor-pointer ${
                  mode === 'login' ? 'bg-[#F3E6A5] text-[#202124] border border-[#202124]' : 'text-white hover:bg-white/10'
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
              className="w-full py-3 px-4 rounded-[4px] border-2 border-[#202124] bg-[#F7F5EF] hover:bg-[#F3E6A5] shadow-[2px_2px_0px_#202124] font-bold text-[#202124] text-sm flex items-center justify-center gap-3 transition-colors mb-4 disabled:opacity-50 cursor-pointer"
            >
              {googleLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-[#405DE6]" />
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
              <div className="flex-1 h-0.5 bg-[#202124]/20"></div>
              <span className="text-xs text-[#747474] font-bold">أو عبر البريد الإلكتروني</span>
              <div className="flex-1 h-0.5 bg-[#202124]/20"></div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-4 p-3 rounded-[4px] bg-[#FDF6F4] border-2 border-[#B83A3A] flex items-start gap-2 text-[#B83A3A] text-xs font-bold"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#B83A3A]" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-[#202124] mb-1">اسم الطالب الكامل</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-[#747474] absolute right-3 top-3.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: علي محمد حسن"
                      required
                      className="w-full pr-10 pl-3 py-2.5 bg-[#F7F5EF] border-2 border-[#202124] rounded-[4px] text-sm text-[#202124] focus:outline-hidden focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#202124] mb-1">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#747474] absolute right-3 top-3.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    required
                    className="w-full pr-10 pl-3 py-2.5 bg-[#F7F5EF] border-2 border-[#202124] rounded-[4px] text-sm text-[#202124] focus:outline-hidden focus:bg-white transition-all text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] mb-1">كلمة المرور</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#747474] absolute right-3 top-3.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pr-10 pl-3 py-2.5 bg-[#F7F5EF] border-2 border-[#202124] rounded-[4px] text-sm text-[#202124] focus:outline-hidden focus:bg-white transition-all text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || googleLoading}
                className="w-full py-3 bg-[#405DE6] hover:bg-[#334DC6] text-white font-black text-sm rounded-[4px] border-2 border-[#202124] shadow-[3px_3px_0px_#202124] flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#F3E6A5]" />
                    <span>{mode === 'register' ? 'إنشاء الحساب وبدء الحفظ' : 'تسجيل الدخول'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Cloud Storage Assurance */}
            <div className="mt-5 p-3 rounded-[6px] bg-[#E9ECFA] border-2 border-[#202124] flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#405DE6] shrink-0" />
              <p className="text-[11px] text-[#202124] font-bold leading-relaxed">
                جميع بياناتك، درجات الامتحانات، ومحاكي الوزاري تُحفظ في خوادم Google Cloud الآمنة.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
