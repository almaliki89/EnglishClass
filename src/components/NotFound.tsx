import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, AlertCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 text-center" dir="rtl">
      <div className="bg-surface border-2 border-ink rounded-[6px] p-8 sm:p-12 max-w-lg w-full shadow-brutal-action space-y-6">
        <div className="w-16 h-16 rounded-[6px] bg-answer-review-bg border-2 border-ink text-semantic-error flex items-center justify-center mx-auto shadow-brutal-sm">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-5xl font-black text-semantic-error font-mono tracking-wider tabular-nums block">404</span>
          <h1 className="text-3xl font-black text-ink">الصفحة غير موجودة</h1>
          <p className="text-sm text-muted-gray font-medium leading-relaxed">
            عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو تم نقله. يمكنك العودة إلى الرئيسية أو تصفح الصفوف الدراسية.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/grades"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-cobalt hover:bg-cobalt-hover text-surface border-2 border-ink font-extrabold text-sm shadow-brutal-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <Link
            to="/grades"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-yellow hover:bg-yellow-hover text-ink border-2 border-ink font-extrabold text-sm shadow-brutal-sm transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>بوابة الصفوف</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
