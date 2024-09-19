import { Component, signal } from '@angular/core';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { CounterComponent } from "../../../shared/components/counter/counter.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000)
  message = signal('Hi! :)')

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement
    this.message.set(input.value)
  }
}
