export interface AdminUser {
  _id?: string;
  email: string;
  passwordHash: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
}
