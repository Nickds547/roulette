export interface IJwtToken {
    token: string,
    expiresIn: number
}

export interface DataStoredInToken {
    _id: string;
  }