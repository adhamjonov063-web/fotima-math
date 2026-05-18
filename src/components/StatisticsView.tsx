/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, Lesson } from '../types.ts';
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Target, TrendingUp, Award, BookOpen } from 'lucide-react';

interface StatisticsViewProps {
  user: UserProfile;
  filteredLessons: Lesson[];
}

export default function StatisticsView({ user, filteredLessons }: StatisticsViewProps) {
  const completedCount = user.completedLessons.length;
  const totalInLevel = filteredLessons.length;
  const progressPercent = Math.round((completedCount / (totalInLevel || 1)) * 100);

  const levelData = [
    { name: 'Tugatilgan', value: completedCount },
    { name: 'Qolgan', value: Math.max(0, totalInLevel - completedCount) },
  ];

  const COLORS = ['#4f46e5', '#f1f5f9'];

  const activityData = [
    { day: 'Du', xp: 20 },
    { day: 'Se', xp: 50 },
    { day: 'Ch', xp: user.xp > 0 ? 80 : 0 },
    { day: 'Pa', xp: user.xp > 50 ? 40 : 0 },
    { day: 'Ju', xp: user.xp },
    { day: 'Sh', xp: 0 },
    { day: 'Ya', xp: 0 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Umumiy XP" 
          value={user.xp} 
          icon={<TrendingUp className="text-indigo-600" />} 
          desc="O'quv jarayonidagi yutuqlar"
          bgColor="bg-indigo-50"
        />
        <StatCard 
          title="Darslar" 
          value={`${completedCount}/${totalInLevel}`} 
          icon={<BookOpen className="text-emerald-600" />} 
          desc="Tizimdagi faollik"
          bgColor="bg-emerald-50"
        />
        <StatCard 
          title="Progress" 
          value={`${progressPercent}%`} 
          icon={<Target className="text-amber-600" />} 
          desc="Darajani tugatish foizi"
          bgColor="bg-amber-50"
        />
        <StatCard 
          title="Yutuqlar" 
          value={completedCount > 0 ? "3 ta" : "0 ta"} 
          icon={<Award className="text-rose-600" />} 
          desc="Sertifikat va nishonlar"
          bgColor="bg-rose-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
          <h3 className="text-xl font-black text-slate-900">Haftalik faollik</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 'bold' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="xp" fill="#4f46e5" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6 flex flex-col items-center">
           <h3 className="text-xl font-black text-slate-900 self-start">Kurs progressi</h3>
           <div className="h-64 w-full relative">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={levelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {levelData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={10} />
                  ))}
                </Pie>
              </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-4xl font-black text-slate-900">{progressPercent}%</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Tugatildi</div>
             </div>
           </div>
           <div className="w-full space-y-3 pb-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                  <span className="text-slate-600 font-bold">Tugatilgan</span>
                </div>
                <span className="font-black">{completedCount} ta</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                  <span className="text-slate-600 font-bold">Qolgan</span>
                </div>
                <span className="font-black">{totalInLevel - completedCount} ta</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, desc, bgColor }: { title: string, value: string | number, icon: React.ReactNode, desc: string, bgColor: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-4 hover:shadow-xl transition-all group">
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", bgColor)}>
        {icon}
      </div>
      <div>
        <div className="text-slate-400 text-[10px] font-black uppercase tracking-wider mb-1">{title}</div>
        <div className="text-3xl font-black text-slate-900">{value}</div>
        <p className="text-[10px] text-slate-400 font-medium mt-1">{desc}</p>
      </div>
    </div>
  );
}
