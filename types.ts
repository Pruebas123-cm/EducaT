import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number | string; strokeWidth?: number | string }>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SegmentType {
  STUDENT = 'student',
  PARENT = 'parent',
  SCHOOL = 'school',
}