import IDateService from "./IDateService";

class DateService implements IDateService {
  public getDate(): Date {
    return new Date();
  }
}

export default DateService;
