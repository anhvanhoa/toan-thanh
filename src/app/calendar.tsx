'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function Calendar() {
    const [selectedDate, setSelectedDate] = React.useState<Date>(new Date(2025, 0, 22));
    const [focusedDate, setFocusedDate] = React.useState<Date>(new Date(2025, 0, 20));
    const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date(2025, 0, 1));

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const lastDayOfPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();

    const days = React.useMemo(() => {
        const days = [];
        const prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

        // Previous month days
        for (let i = prevMonthDays - 1; i >= 0; i--) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, lastDayOfPrevMonth - i),
                isCurrentMonth: false
            });
        }

        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
                isCurrentMonth: true
            });
        }

        // Next month days
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i),
                isCurrentMonth: false
            });
        }

        return days;
    }, [currentMonth, daysInMonth, firstDayOfMonth, lastDayOfPrevMonth]);

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + (direction === 'next' ? 1 : -1), 1)
        );
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('default', {
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className='w-full max-w-sm p-4 mx-auto'>
            <div className='flex items-center justify-between mb-4'>
                <button onClick={() => navigateMonth('prev')}>
                    <ChevronLeft className='w-4 h-4' />
                    <span className='sr-only'>Previous month</span>
                </button>
                <h2 className='text-lg font-semibold capitalize'>{formatDate(currentMonth)}</h2>
                <button onClick={() => navigateMonth('next')}>
                    <ChevronRight className='w-4 h-4' />
                    <span className='sr-only'>Next month</span>
                </button>
            </div>
            <div className='grid grid-cols-7 gap-1 mb-2'>
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
                    <div
                        key={day}
                        className='flex items-center justify-center h-8 text-sm font-medium text-muted-foreground'
                    >
                        {day}
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-7 gap-1'>
                {days.map(({ date, isCurrentMonth }, index) => {
                    const isSelected = date.toDateString() === selectedDate?.toDateString();
                    const isFocused = date.toDateString() === focusedDate?.toDateString();
                    return (
                        <button
                            key={index}
                            className={clsx(
                                'h-8 w-full p-0 font-normal aria-selected:opacity-100',
                                isCurrentMonth ? 'text-black' : 'text-gray-400',
                                isSelected && 'text-blue-700 font-semibold',
                                isFocused && !isSelected && 'bg-rose-600 text-white rounded-full font-semibold'
                            )}
                            onClick={() => setSelectedDate(date)}
                            onFocus={() => setFocusedDate(date)}
                        >
                            <time dateTime={date.toISOString()}>{date.getDate()}</time>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
