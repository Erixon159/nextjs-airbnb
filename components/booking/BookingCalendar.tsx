'use client'

import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useToast } from '@/hooks/use-toast'

import { useProperty } from '@/utils/store'
import { Calendar } from '@/components/ui/calendar'

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar'

function BookingCalendar() {
  const { toast } = useToast()
  const currentDate = new Date()

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)
  const bookings = useProperty((state) => state.bookings)

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  })

  const unavailableDates = generateDisabledDates(blockedPeriods)

  useEffect(() => {
    const selectedRange = generateDateRange(range)
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected)
        toast({
          description: 'Some dates are booked. Please select again.',
        })

        return true
      }
      return false
    })

    useProperty.setState({ range })
  }, [range])

  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4"
      disabled={blockedPeriods}
    />
  )
}

export default BookingCalendar