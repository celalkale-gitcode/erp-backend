@Injectable()
export class BarcodeService {
  generateEAN13(base: string): string {
    const digits = base.split('').map(Number);
    let sum = 0;

    for (let i = 0; i < 12; i++) {
      sum += digits[i] * (i % 2 === 0 ? 1 : 3);
    }

    return base + ((10 - (sum % 10)) % 10);
  }
}
