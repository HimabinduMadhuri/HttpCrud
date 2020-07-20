import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      { id: 101, title: 'Angular by Sai', category: 'Angular' },
      { id: 102, title: 'Core Java by Bindu', category: 'Java' },
      { id: 103, title: 'NgRx by Prudvi', category: 'Angular' }
    ];
    return { articles: articleDetails };
  }
} 