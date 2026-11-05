import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, AlertCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 text-center" dir="rtl">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 max-w-lg w-full shadow-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">الصفحة غير موجودة</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو تم نقله. يمكنك العودة إلى الرئيسية أو تصفح المواد الدراسية.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <Link
            to="/subjects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>المواد الدراسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
