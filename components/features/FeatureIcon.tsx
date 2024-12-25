"use client";

import { ClipboardList, Activity, Repeat, ScanText, Table, BarChart } from "lucide-react";

export type IconType = "clipboard-list" | "activity" | "repeat" | "scan-text" | "table" | "bar-chart";

interface FeatureIconProps {
  type: IconType;
  className?: string;
}

export function FeatureIcon({ type, className = "h-6 w-6" }: FeatureIconProps) {
  const icons = {
    "clipboard-list": ClipboardList,
    activity: Activity,
    repeat: Repeat,
    "scan-text": ScanText,
    table: Table,
    "bar-chart": BarChart,
  };

  const Icon = icons[type];
  return <Icon className={className} />;
}