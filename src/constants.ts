/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserLevel, Lesson } from './types.ts';

export const LESSONS: Lesson[] = [
  // JUNIOR (EASY)
  {
    id: 'jr-1',
    title: 'Sonlar va sanoq',
    description: 'Sonlar dunyosi bilan tanishamiz va oddiy amallarni bajaramiz.',
    videoUrl: 'https://www.youtube.com/embed/S2pEToitw0I', // Example math video
    level: UserLevel.JUNIOR,
    quiz: [
      {
        id: 'q1',
        question: '7 + 8 necha bo\'ladi?',
        options: ['13', '14', '15', '16'],
        correctAnswer: 2,
        explanation: '7 qo\'shilgan 8 teng 15.'
      },
      {
        id: 'q2',
        question: 'Qaysi son toq?',
        options: ['2', '4', '7', '8'],
        correctAnswer: 2,
        explanation: '7 soni 2 ga qoldiqsiz bo\'linmaydi.'
      }
    ]
  },
  {
    id: 'jr-2',
    title: 'Geometriya asosi',
    description: 'Shakllar va ularning xususiyatlari.',
    videoUrl: 'https://www.youtube.com/embed/jZf62D6lT5s',
    level: UserLevel.JUNIOR,
    quiz: [
      {
        id: 'q3',
        question: 'Uchburchakning nechta tomoni bor?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'Uchburchak nomi bilan uchta tomonga ega.'
      }
    ]
  },

  // SENIOR (INTERMEDIATE)
  {
    id: 'sr-1',
    title: 'Tenglamalar dunyosi',
    description: 'Noma\'lumlarni topish va oddiy tenglamalarni yechish.',
    videoUrl: 'https://www.youtube.com/embed/l3XzpqIUP9E',
    level: UserLevel.SENIOR,
    quiz: [
      {
        id: 'q4',
        question: '2x + 5 = 15 bo\'lsa, x ni toping.',
        options: ['4', '5', '6', '10'],
        correctAnswer: 1,
        explanation: '2x = 10, x = 5.'
      }
    ]
  },
  {
    id: 'sr-2',
    title: 'Logika va Mantiq',
    description: 'Mantiqiy ketma-ketliklar va qonuniyatlar.',
    videoUrl: 'https://www.youtube.com/embed/8-WvL_D6gG4',
    level: UserLevel.SENIOR,
    isProblemSolving: true,
    quiz: [
      {
        id: 'q5',
        question: 'Ketma-ketlikni davom ettiring: 2, 4, 8, 16, ?',
        options: ['24', '30', '32', '36'],
        correctAnswer: 2,
        explanation: 'Har bir son o\'zidan oldingisining 2 baravari.'
      }
    ]
  },

  // MASTER (HARD)
  {
    id: 'ms-1',
    title: 'Murakkab Funksiyalar',
    description: 'Logarifmlar va ko\'rsatkichli funksiyalar.',
    videoUrl: 'https://www.youtube.com/embed/aaXEnVjX-k8',
    level: UserLevel.MASTER,
    quiz: [
      {
        id: 'q6',
        question: 'log2(16) necha bo\'ladi?',
        options: ['2', '3', '4', '8'],
        correctAnswer: 2,
        explanation: '2 ning 4-darajasi 16 ga teng.'
      }
    ]
  },
  {
    id: 'ms-2',
    title: 'Ehtimollar Nazariyasi',
    description: 'Tasodifiy hodisalar va ularning ehtimoli.',
    videoUrl: 'https://www.youtube.com/embed/SkadyH-F_64',
    level: UserLevel.MASTER,
    isProblemSolving: true,
    quiz: [
      {
        id: 'q7',
        question: 'Tangani 2 marta tashlaganda ikkala marta ham gerb tushish ehtimoli?',
        options: ['1/2', '1/3', '1/4', '1/8'],
        correctAnswer: 2,
        explanation: '1/2 * 1/2 = 1/4.'
      }
    ]
  }
];

export const MANTIQIY_MASALALAR = [
  {
    question: "Agar bir kishi 10 metrli tayoqni har bir metri 1 minutadan bo'lib chiqsa, hammasini bo'lish uchun necha minut ketadi?",
    options: ["10", "9", "11", "5"],
    answer: 1,
    explanation: "Oxirgi metrni bo'lish shart emas, chunki u o'zi qoladi."
  },
  {
    question: "Savatda 5 ta olma bor. 5 kishiga bittadan berildi, lekin savatda 1 ta olma qoldi. Buning sababi nima?",
    options: ["Xatolik bo'lgan", "Bitta kishi olma olmagan", "Oxirgi kishi olmani savati bilan olgan", "Olma ko'payib qolgan"],
    answer: 2,
    explanation: "Oxirgi odam olmani savat bilan birga oldi."
  }
];
