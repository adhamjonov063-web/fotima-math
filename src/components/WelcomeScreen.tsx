/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserLevel } from '../types.ts';
import { motion } from 'motion/react';
import { Calculator, Star, Trophy, GraduationCap, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils.ts';

interface WelcomeScreenProps {
  onRegister: (name: string, age: number, level: UserLevel) => void;
}

export default function WelcomeScreen({ onRegister }: WelcomeScreenProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [level, setLevel] = useState<UserLevel>(UserLevel.JUNIOR);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && age) {
      if (step === 1) {
        setStep(2);
      } else {
        onRegister(name, parseInt(age), level);
      }
    }
  };

  const levels = [
    {
      id: UserLevel.JUNIOR,
      title: 'Junior',
      desc: 'Matematikani o\'rganishni endi boshlayotganlar uchun. Oddiy va tushunarli.',
      icon: <Calculator className="w-6 h-6 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    },
    {
      id: UserLevel.SENIOR,
      title: 'Senior',
      desc: 'O\'rtacha darajadagi bilimga ega bo\'lganlar uchun. Mantiqiy va qiziqarli.',
      icon: <Star className="w-6 h-6 text-amber-600" />,
      color: 'border-amber-200 bg-amber-50 text-amber-700',
    },
    {
      id: UserLevel.MASTER,
      title: 'Master',
      desc: 'Matematika bilimdonlari uchun. Murakkab va muammoli masalalar.',
      icon: <Trophy className="w-6 h-6 text-rose-600" />,
      color: 'border-rose-200 bg-rose-50 text-rose-700',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-indigo-600">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md p-10 bg-white rounded-[40px] shadow-2xl space-y-8"
      >
        <div className="text-center space-y-3">
          <div className="inline-flex p-4 bg-indigo-50 rounded-2xl text-indigo-600 mb-2">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Math Master</h1>
          <p className="text-slate-500 font-medium">Bilim sari ilk qadam!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 ml-1">Ismingizni kiriting</label>
                    <input
                      autoFocus
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masalan: Adhamjon"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 ml-1">Yoshingizni kiriting</label>
                    <input
                      type="number"
                      required
                      min="5"
                      max="100"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Masalan: 18"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!name.trim() || !age}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  Davom etish
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-700 ml-1">O'rganish darajangizni tanlang</label>
                  <div className="grid gap-3">
                    {levels.map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setLevel(lvl.id)}
                        className={cn(
                          "flex items-start gap-4 p-4 rounded-2xl border-2 transition-all text-left",
                          level === lvl.id
                            ? lvl.color
                            : "border-slate-100 bg-slate-50 hover:border-slate-200 text-slate-600"
                        )}
                      >
                        <div className="mt-1">{lvl.icon}</div>
                        <div>
                          <div className="font-bold">{lvl.title}</div>
                          <div className="text-xs opacity-70">{lvl.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-200"
                >
                  Akademiyaga kirish
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-sm text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Ortga qaytish
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}

import { AnimatePresence } from 'motion/react';
