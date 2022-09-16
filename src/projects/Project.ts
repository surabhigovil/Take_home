export class Project {
    id: number | undefined;
    name: string = '';
    imageUrl: string = '';
    isActive: boolean = false;
    isGoodImage: boolean = false;
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
      if (initializer.isActive) this.isActive = initializer.isActive;
      if (initializer.isGoodImage) this.isGoodImage = initializer.isGoodImage;
    }
  }