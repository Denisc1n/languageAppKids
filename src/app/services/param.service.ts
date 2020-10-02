import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ParamService {
  category: string;
  language: string;

  constructor() {}
}
