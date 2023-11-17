import { Component, signal, computed } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss',
})
export class ChatBoxComponent {
  firstUserText: string = ''
  secondUserText: string = ''

  firstUserSig = signal<ChatMessageInterface[]>([])

  secondUserSig = signal<ChatMessageInterface[]>([])

  chatListSig = computed(() => {
    return [...this.firstUserSig(), ...this.secondUserSig()].sort(
      (chatA: ChatMessageInterface, chatB: ChatMessageInterface) =>
        chatB.createdAt - chatA.createdAt
    )
  })

  sendFirstUserMessage(): void {
    const message: ChatMessageInterface = {
      createdAt: new Date().getTime(),
      text: this.firstUserText,
      userName: 'User 1',
      id: 1,
    }
    this.firstUserSig.update((list: ChatMessageInterface[]) => [
      ...list,
      message,
    ])
    this.firstUserText = ''
  }

  sendSecondUserMessage(): void {
    const message: ChatMessageInterface = {
      createdAt: new Date().getTime(),
      text: this.secondUserText,
      userName: 'User 2',
      id: 2,
    }
    this.secondUserSig.update((list: ChatMessageInterface[]) => [
      ...list,
      message,
    ])
    this.secondUserText = ''
  }
}

interface ChatMessageInterface {
  createdAt: number
  text: string
  userName: string
  id: number
}
