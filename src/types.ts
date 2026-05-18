/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum UserLevel {
  JUNIOR = 'junior',
  SENIOR = 'senior',
  MASTER = 'master',
}

export interface UserProfile {
  name: string;
  age?: number;
  level: UserLevel;
  xp: number;
  completedLessons: string[];
  testScores: Record<string, number>; // levelId -> score
  createdAt: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of options
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // Embed URL
  level: UserLevel;
  quiz: QuizQuestion[];
  isProblemSolving?: boolean;
}

export interface RankingEntry {
  name: string;
  xp: number;
  level: UserLevel;
}

export interface Statistics {
  totalLessons: number;
  averageScore: number;
  levelProgress: Record<UserLevel, number>;
}
