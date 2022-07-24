export class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (Singleton.instance == null) {
      Singleton.instance = new Singleton();
      console.log("Instância Singleton gerada!");
    }

    return Singleton.instance;
  }
}
