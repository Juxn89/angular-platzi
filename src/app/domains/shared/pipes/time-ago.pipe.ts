import { formatDistance } from 'date-fns'

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value)
    const today = new Date()

    return formatDistance(today, date)
  }

}
