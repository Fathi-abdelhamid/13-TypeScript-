
//  // ==================== 1. User ====================
// class User {
//   private _age: number;
//   protected notebooks: NoteBook[] = [];

//   constructor(
//     public readonly id: number,
//     public name: string,
//     public email: string,
//     private password: string,
//     protected phone: string,
//     age: number
//   ) {
//     this._age = 18;
//     this.age = age;
//   }

//   get age(): number {
//     return this._age;
//   }

//   set age(value: number) {
//     if (!Number.isInteger(value) || value < 18 || value > 60) {
//       throw new Error("Age must be between 18 and 60");
//     }

//     this._age = value;
//   }

//   checkPassword(input: string): boolean {
//     return this.password === input;
//   }

//   displayInfo(): void {
//     console.log(
//       `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`
//     );
//   }

//   addNotebook(notebook: NoteBook): void {
//     this.notebooks.push(notebook);
//   }

//   removeNotebook(notebookId: number): boolean {
//     const index = this.notebooks.findIndex(
//       (notebook) => notebook.id === notebookId
//     );

//     if (index === -1) return false;

//     this.notebooks.splice(index, 1);
//     return true;
//   }

//   getNotebooks(): NoteBook[] {
//     return [...this.notebooks];
//   }
// }

// // ==================== 2. Admin ====================
// class Admin extends User {
//   constructor(
//     id: number,
//     name: string,
//     email: string,
//     password: string,
//     phone: string,
//     age: number
//   ) {
//     super(id, name, email, password, phone, age);
//   }

//   manageNotes(notebook: NoteBook): void {
//     console.log(`Managing notebook: ${notebook.name}`);

//     notebook.getNotes().forEach((note) => {
//       console.log(`${note.id} - ${note.title}: ${note.preview()}`);
//     });
//   }

//   override displayInfo(): void {
//     console.log("Admin Information:");
//     super.displayInfo();
//   }
// }

// // ==================== 3. Note ====================
// class Note {
//   constructor(
//     public readonly id: number,
//     public title: string,
//     public content: string,
//     public readonly author: User
//   ) {}

//   get userId(): number {
//     return this.author.id;
//   }

//   preview(length: number = 30): string {
//     if (this.content.length <= length) {
//       return this.content;
//     }

//     return this.content.substring(0, length) + "...";
//   }
// }

// // ==================== 4. NoteBook ====================
// class NoteBook {
//   private notes: Note[] = [];

//   constructor(
//     public readonly id: number,
//     public name: string
//   ) {}

//   addNote(
//     id: number,
//     title: string,
//     content: string,
//     author: User
//   ): Note {
//     const note = new Note(id, title, content, author);
//     this.notes.push(note);
//     return note;
//   }

//   removeNote(noteId: number): boolean {
//     const index = this.notes.findIndex(
//       (note) => note.id === noteId
//     );

//     if (index === -1) return false;

//     this.notes.splice(index, 1);
//     return true;
//   }

//   getNotes(): Note[] {
//     return [...this.notes];
//   }
// }

// // ==================== 5. Generic Storage ====================
// class Storage<T> {
//   private items: T[] = [];

//   addItem(item: T): void {
//     this.items.push(item);
//   }

//   removeItem(item: T): boolean {
//     const index = this.items.indexOf(item);

//     if (index === -1) return false;

//     this.items.splice(index, 1);
//     return true;
//   }

//   getAllItems(): T[] {
//     return [...this.items];
//   }
// }

// // ==================== 6. Demo ====================
// const user = new User(
//   1,
//   "Ahmed",
//   "ahmed@mail.com",
//   "1234",
//   "01000000000",
//   25
// );

// const admin = new Admin(
//   2,
//   "Sara",
//   "sara@mail.com",
//   "admin123",
//   "01111111111",
//   30
// );

// user.displayInfo();
// admin.displayInfo();

// const notebook = new NoteBook(1, "Work");
// user.addNotebook(notebook);

// notebook.addNote(
//   1,
//   "Meeting",
//   "Discuss the TypeScript assignment with the team",
//   user
// );

// notebook.addNote(
//   2,
//   "Tasks",
//   "Finish the OOP assignment",
//   user
// );

// console.log("User notebooks:", user.getNotebooks().length);

// console.log("Before removing a note:");
// admin.manageNotes(notebook);

// notebook.removeNote(2);

// console.log("After removing a note:");
// admin.manageNotes(notebook);

// const noteStorage = new Storage<Note>();

// notebook.getNotes().forEach((note) => {
//   noteStorage.addItem(note);
// });

// console.log("Stored notes:", noteStorage.getAllItems().length);

// const numberStorage = new Storage<number>();
// numberStorage.addItem(10);
// numberStorage.addItem(20);

// console.log("Numbers:", numberStorage.getAllItems());

// try {
//   new User(3, "Young", "young@mail.com", "123", "0100", 15);
// } catch (error) {
//   console.log((error as Error).message);
// }
