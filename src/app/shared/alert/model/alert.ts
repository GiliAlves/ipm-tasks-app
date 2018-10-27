import { AlertType } from './alert.enum';

export class Alert {

  constructor(
    public readonly alertType: AlertType,
    public readonly message: string
  ) { }
}
