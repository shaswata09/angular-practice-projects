export class Recipe {
    public name: string | undefined;
    public description: string | undefined;
    public imagePath: string | undefined;

    constructor(name: string, desc: string, imgPath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
    }
}