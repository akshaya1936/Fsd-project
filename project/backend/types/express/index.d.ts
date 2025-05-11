declare namespace Express {
  export interface Request {
    user?: {
      userId: string;
      userType: string;
    };
  }
}