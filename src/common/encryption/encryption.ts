import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';


export class Encryption {
    private readonly iv = randomBytes(16);
    private readonly password = 'MyPass';

    async createCryptoData(textToEncrypt) {
        const key = (await promisify(scrypt)(this.password, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, this.iv);

        const encryptedText = Buffer.concat([
            cipher.update(textToEncrypt),
            cipher.final()
        ]);

        return encryptedText;
    }

    async decryptData(encryptedText) {
        const key = (await promisify(scrypt)(this.password, 'salt', 32)) as Buffer;
        const decipher = createDecipheriv('aes-256-ctr', key, this.iv);

        const decryptedText = Buffer.concat([
            decipher.update(encryptedText),
            decipher.final()
        ]);

        return decryptedText;
    }
}