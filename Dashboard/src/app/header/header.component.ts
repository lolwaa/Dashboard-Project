import { Component, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

onSearchChange(event: Event):void  {
  const input = (event.target as HTMLInputElement)?.value; // Optional chaining
    if (input !== undefined) {
      this.searchService.setSearchTerm(input);
    }
  }

}

