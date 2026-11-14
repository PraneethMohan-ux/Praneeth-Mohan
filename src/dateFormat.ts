const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const monthPattern = 'January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec';
const ordinalDayPattern = '(\\d{1,2})(?:st|nd|rd|th)?';

function monthNumber(month: string): number {
  return months.findIndex((name) => name === month.slice(0, 3).toUpperCase());
}

function formatDayMonthYear(day: string, month: string, year: string): string {
  return `${day.padStart(2, '0')}/${months[monthNumber(month)]}/${year}`;
}

export function formatDateText(value: string): string {
  return value
    .replace(
      new RegExp(`\\b(${monthPattern})\\s+${ordinalDayPattern}\\s*[–—-]\\s*(${monthPattern})\\s+${ordinalDayPattern},?\\s+(\\d{4})\\b`, 'gi'),
      (_match, firstMonth: string, firstDay: string, lastMonth: string, lastDay: string, year: string) =>
        `${formatDayMonthYear(firstDay, firstMonth, year)} – ${formatDayMonthYear(lastDay, lastMonth, year)}`,
    )
    .replace(/\b(\d{4})-(\d{2})-(\d{2})\b/g, (_match, year: string, month: string, day: string) =>
      `${day}/${months[Number(month) - 1]}/${year}`,
    )
    .replace(
      new RegExp(`\\b(${monthPattern})\\s+${ordinalDayPattern},?\\s+(\\d{4})\\b`, 'gi'),
      (_match, month: string, day: string, year: string) => formatDayMonthYear(day, month, year),
    )
    .replace(
      new RegExp(`\\b${ordinalDayPattern}\\s+(${monthPattern})\\s+(\\d{4})\\b`, 'gi'),
      (_match, day: string, month: string, year: string) => formatDayMonthYear(day, month, year),
    )
    .replace(
      new RegExp(`\\b(${monthPattern})\\s*[–—-]\\s*(${monthPattern})\\s+(\\d{4})\\b`, 'gi'),
      (_match, firstMonth: string, lastMonth: string, year: string) =>
        `${months[monthNumber(firstMonth)]} – ${months[monthNumber(lastMonth)]}/${year}`,
    )
    .replace(new RegExp(`\\b(${monthPattern})\\s+(\\d{4})\\b`, 'gi'), (_match, month: string, year: string) =>
      `${months[monthNumber(month)]}/${year}`,
    );
}
