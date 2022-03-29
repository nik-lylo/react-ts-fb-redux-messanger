export interface IMessageChat {
  text: string;
  urlPhoto: string;
  fromID: string;
  createdAt: Date;
  fullname: string;
  messageID?: string;
  time?: string;
  fullTime?: string;
}
export interface IMessageGroupChat {
  text: string;
  urlPhoto: string;
  fromID: string;
  fromGroupID: string;
  createdAt: Date;
  fullname: string;
  messageID?: string;
  time?: string;
  fullTime?: string;
}
